from repair.abstract_repair import Repair
from repair.live_variables_extractor import LiveVariablesExtractor
from fault_localization.inspection_runner import InspectionRunner
from z3 import *
import esprima
import sys
from copy import deepcopy
import itertools


class IF_CC_Repair(Repair):

    def __init__(self, runner, program, buggyCodeLocation, fileName, debug):
        super().__init__(runner, program, buggyCodeLocation, fileName, debug)
        self.__buggyCodeLocation = buggyCodeLocation
        self.__fixEndDepth = 4
        self.__comp = ['<', '>', '<=', '>=', '=', 'distinct']
        self.__log = ['and', 'or']
        self.__live_variables = []

    def __detectParanthesis(self, code):
        first, last, index = 0, 0, 0
        stack = []
        start = True
        for letter in code:
            if letter == "(":
                first = index
                start = False
                stack.append("$")
            elif letter == ")":
                stack.pop()
            if len(stack) == 0 and not start:
                last = index
                break
            index += 1
        return first + 1, last

    def __getSMTStrings(self, exp_string, data):
        strings = []
        dec_string = ""
        for var in self.__live_variables:
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
            solver.reset()
            solver.add(parse_smt2_string(smt_strings[i]))
            if (str(solver.check()) == 'sat') != data[i]["eval"]:
                return False
        solver = str(solver)
        return solver[solver.find("(")-2:solver.rfind(")")+1]

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
                stack.append(exp_string)
                index += 2
            if len(stack) == 2:
                exp_string = ""
                exp_string += "(" + curr_log + " "
                exp_string += stack.pop()
                exp_string += stack.pop() + ")"
            eval = self.__smtSolve("(assert " + exp_string + ")", data)
            if eval:
                return eval
        return None

    def __solve(self, live_variables, data):
        live_variables = list(live_variables)
        state = [deepcopy(self.__comp)]
        operators_set = list(itertools.product(*state))
        for i in range(1, min(self.__fixEndDepth + 2, len(live_variables) + 1)):
            if i != 1:
                state.append(deepcopy(self.__log))
                state.append(deepcopy(self.__comp))
                operators_set = list(itertools.product(*state))
            expression_formats = list(itertools.combinations(list(itertools.combinations(live_variables, 2)), i))
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
            outputString += string[last + 2:index+1]
        return outputString

    def fix(self):
        lve = LiveVariablesExtractor(self._program)
        esprima.parseScript(self._program, delegate=lve.extractLiveVariables)
        live_variables = lve.getLiveVariablesUpToPoint(self.__buggyCodeLocation[0])
        self.__live_variables = list(live_variables)
        live_variables_str = ""
        for var in live_variables:
            live_variables_str += var + " + ' $$split$$ ' + "
        live_variables_str = live_variables_str[:len(live_variables_str) - len(" + $$split$$ + ")]
        code = self._program[self.__buggyCodeLocation[0]:self.__buggyCodeLocation[1]]
        first, last = self.__detectParanthesis(code)
        first = self.__buggyCodeLocation[0] + first
        last = self.__buggyCodeLocation[0] + last
        trueConditionProgram, falseConditionProgram, inspectingProgram = deepcopy(self._program), deepcopy(
            self._program), deepcopy(self._program)
        trueConditionProgram = trueConditionProgram[:first] + "true" + trueConditionProgram[last:]
        falseConditionProgram = falseConditionProgram[:first] + "false" + falseConditionProgram[last:]
        inspectingCode = "\nconsole.log('%%insp '+ " + live_variables_str + " %%insp');\n"
        inspectingProgram = inspectingProgram[:self.__buggyCodeLocation[0]] + \
                            inspectingCode + inspectingProgram[self.__buggyCodeLocation[0]:]
        runner = InspectionRunner(self._fileName, None)
        data = runner.run([trueConditionProgram, falseConditionProgram], inspectingProgram)
        solution = self.__solve(live_variables, data)
        if solution:
            newProgram = self._program[0:first] + solution + self._program[last:]
            self._writeRepairProgram(newProgram)
            self._testRepair(newProgram)
