from repair.abstract_repair import Repair
from repair.live_variables_extractor import LiveVariablesExtractor
from fault_localization.inspection_runner import InspectionRunner
from fault_localization.type_runner import TypeRunner
from z3 import *
import esprima
import sys, re
from copy import deepcopy
import itertools


class IF_CC_Repair(Repair):

    def __init__(self, runner, program, buggyCodeLocation, fileName, startTime, debug):
        super().__init__(runner, program, buggyCodeLocation, fileName, startTime, debug)
        self.__fixEndDepth = 3
        self.__comp = ['=', 'distinct', '<', '>', '<=', '>=']
        self.__log = ['and', 'or']
        self.__live_variables = []
        self.__types = {}

    def __getSMTStrings(self, exp_string, data):
        strings = []
        dec_string = ""
        # print(data)
        for var in self.__live_variables:
            try:
                float(var)
            except:
                if self.__types[var] == 'boolean':
                    dec_string += "(declare-fun " + var + " () Bool) "
                else:
                    dec_string += "(declare-fun " + var + " () Int) "
        for pair in data:
            smt_string = dec_string
            for i in range(len(pair['values'])):
                smt_string += "(assert (= " + self.__live_variables[i] + " " + \
                              pair['values'][i].replace(" ", "") + ")) "
            smt_string += exp_string
            strings.append(smt_string)
        return strings

    def __smtSolve(self, exp_string, data):
        solver = Solver()
        smt_strings = self.__getSMTStrings(exp_string, data)
        for i in range(len(smt_strings)):
            smt_strings[i] = smt_strings[i].replace("[", "LSB_SIGN")
            smt_strings[i] = smt_strings[i].replace("]", "RSB_SIGN")
            solver.reset()
            try:
                solver.add(parse_smt2_string(smt_strings[i]))
            except:
                continue
            if (str(solver.check()) == 'sat') != data[i]["eval"]:
                return False
        solver = str(solver)
        if "(" in solver:
            output = solver[solver.find("(") - 2:solver.rfind(")") + 1]
        else:
            parts = solver.split(",")
            output = parts.pop()
            output = output[:len(output) - 1]
        output = output.replace("LSB_SIGN", "[")
        output = output.replace("RSB_SIGN", "]")
        return output

    def __checkCondition(self, var_list, operators_set, data):
        for operators in operators_set:
            exp_string = ""
            curr_log = ""
            stack = []
            index = 0
            for i in range(len(operators)):
                if operators[i] in self.__log:
                    if len(stack) == 2:
                        exp_string = ""
                        exp_string += "(" + curr_log + " "
                        exp_string += stack.pop()
                        exp_string += stack.pop() + ") "
                        stack.append(exp_string)
                    curr_log = operators[i]
                    continue
                exp_string = ""
                exp_string += "(" + operators[i] + " "
                exp_string += var_list[index] + " "
                exp_string += var_list[index + 1] + ") "
                if self.__types[var_list[index]] == 'boolean' and operators[i] != '=' and operators[i] != 'distinct':
                    exp_string = ''
                    index += 2
                    continue
                stack.append(exp_string)
                index += 2
            if len(stack) == 2:
                exp_string = ""
                exp_string += "(" + curr_log + " "
                exp_string += stack.pop()
                exp_string += stack.pop() + ")"
            if exp_string == '':
                continue
            eval = self.__smtSolve("(assert " + exp_string + ")", data)
            if eval:
                return eval
        return None

    def __separateTypes(self, live_variables):
        bools = []
        for i in range(len(live_variables)):
            if self.__types[live_variables[i]] == 'boolean':
                bools.append(live_variables[i])
                live_variables[i] = None
        tmp = []
        for var in live_variables:
            if var:
                tmp.append(var)
        live_variables = list(tmp)
        return live_variables, bools

    def __getBoolStates(self, bools):
        states = []
        for bool in bools:
            states.append((bool, 'true'))
            states.append((bool, 'false'))
        return states

    def __solve(self, live_variables, data):
        live_variables, bools = self.__separateTypes(live_variables)
        state = [deepcopy(self.__comp)]
        operators_set = list(itertools.product(*state))
        for i in range(1, min(self.__fixEndDepth, len(live_variables) + len(bools))):
            if i != 1:
                state.append(deepcopy(self.__log))
                state.append(deepcopy(self.__comp))
                operators_set = list(itertools.product(*state))
            all_types_list = list(itertools.combinations(live_variables, 2)) + self.__getBoolStates(bools)
            expression_formats = list(itertools.combinations(all_types_list, i))
            var_list = []
            for item in expression_formats:
                for exp in item:
                    var_list.append(exp[0])
                    var_list.append(exp[1])
                solution = self.__checkCondition(var_list, operators_set, data)
                if solution:
                    return self.__prefixToInfix(solution)
                var_list = []

    def __prefixToInfix(self, string):
        outputString = ""
        first = string.find("(") + 1
        last = string.find(",")
        if string.startswith("Or"):
            outputString += string[first:last] + " || "
        elif string.startswith("And"):
            outputString += string[first:last] + " && "
        if string[last + 2:].startswith("Or") or string[last + 2:].startswith("And"):
            outputString += self.__prefixToInfix(string[last + 2:])
        else:
            index = len(string) - 1
            while string[index] == ")":
                index -= 1
            outputString += string[last + 2:index + 1]
        return outputString

    def dynamicRepair(self, condition, first, last):
        comps = ['<', '>', '<=', '=>', '==', '!=']
        logs = ['&&', '||']
        condition = condition.replace("===", '==').replace("!==", "!=")
        logicalOps = 0
        state = [deepcopy(comps)]
        for i in range(len(condition)):
            if condition[i:i+2] == '&&' or condition[i:i+2] == '||':
                logicalOps += 1
        operators_set = list(itertools.product(*state))
        for i in range(logicalOps):
            state.append(deepcopy(logs))
            state.append(deepcopy(comps))
            operators_set = list(itertools.product(*state))
        for operators in operators_set:
            res = re.split('===|==|!==|!=|<=|>=|>|<|!|&&|\|\|', condition)
            newCond = res[0]
            for i in range(len(operators)):
                if i+1 < len(res):
                    newCond += operators[i] + res[i+1]
            newProgram = self._program[0:first] + newCond + self._program[last:]
            self._writeRepairProgram(newProgram)
            self._testRepair(newProgram)

    def fix(self):
        code = self._program[self._buggyCodeLocation[0]:self._buggyCodeLocation[1]]
        first, last = self._detectParanthesis(code)
        first = self._buggyCodeLocation[0] + first
        last = self._buggyCodeLocation[0] + last
        condition = self._program[first:last]
        curr_variables = self._detectVariables(self._program[first:last])
        lve = LiveVariablesExtractor(self._program)
        esprima.parseScript(self._program, delegate=lve.extractLiveVariables)
        live_variables, types = lve.getLiveVariablesUpToPoint(self._buggyCodeLocation[0],
                                                              TypeRunner(self._fileName, None),
                                                              curr_variables=curr_variables)
        if len(live_variables) != len(types):
            return
        for i in range(len(live_variables)):
            self.__types[str(live_variables[i])] = types[i]
        for i in range(len(deepcopy(live_variables))):
            if 'number' not in types[i] and \
                    'NaN' not in types[i] and \
                    'undefined' not in types[i] and \
                    'boolean' not in types[i]:
                live_variables[i] = None
        while None in live_variables:
            live_variables.remove(None)
        self.__live_variables = list(live_variables)
        live_variables_str = ""
        for var in live_variables:
            live_variables_str += "(" + var + ") + ' $$split$$ ' + "
        live_variables_str = live_variables_str[:len(live_variables_str) - len(" + $$split$$ + ")]
        trueConditionProgram, falseConditionProgram, valuesProgram = deepcopy(self._program), deepcopy(
            self._program), deepcopy(self._program)
        trueConditionProgram = trueConditionProgram[:first] + "true" + trueConditionProgram[last:]
        falseConditionProgram = falseConditionProgram[:first] + "false" + falseConditionProgram[last:]
        valuesCode = "\nconsole.log('%%insp '+ " + live_variables_str + " %%insp ');\n" \
                                                                        "console.log('%%insp '+ " + live_variables_str + " %%insp ');\nreturn\n"
        valuesProgram = valuesProgram[:self._buggyCodeLocation[0]] + \
                        valuesCode + valuesProgram[self._buggyCodeLocation[0]:]
        # try:
        runner = InspectionRunner(self._fileName, None)
        data = runner.run([trueConditionProgram, falseConditionProgram], valuesProgram)
        # print("asd", live_variables, data)
        solution = self.__solve(live_variables, data)
        if solution:
            newProgram = self._program[0:first] + solution + self._program[last:]
            self._writeRepairProgram(newProgram)
            self._testRepair(newProgram)
        # except SystemExit:
        #     sys.exit(0)
        # except:
        #     pass
        self.dynamicRepair(condition, first, last)

