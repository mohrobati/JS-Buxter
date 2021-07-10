from repair.abstract_repair import Repair
from repair.live_variables_extractor import LiveVariablesExtractor
import esprima, sys, itertools


class MC_DAP_Repair(Repair):

    def __init__(self, runner, program, buggyCodeLocation, fileName, startTime, debug):
        super().__init__(runner, program, buggyCodeLocation, fileName, startTime, debug)

    def _detectParanthesis(self, code):
        stack = []
        list = []
        index = 0
        for c in code:
            if c == "(":
                stack.append(index)
            elif c == ")":
                first = stack.pop()
                list.append([first, index-1])
            index += 1
        # TODO for multiple arg sets
        return list[0]

    def __checkValidity(self, code):
        invalidKeywords = ['=>', 'function']
        for key in invalidKeywords:
            if key in code:
                return False
        return True

    def fix(self):
        lve = LiveVariablesExtractor(self._program)
        esprima.parseScript(self._program, delegate=lve.extractLiveVariables)
        live_variables, _ = lve.getLiveVariablesUpToPoint(self._buggyCodeLocation[0], None)
        code = self._program[self._buggyCodeLocation[0]:self._buggyCodeLocation[1]]
        isValid = self.__checkValidity(code)
        if isValid:
            [first, last] = self._detectParanthesis(code)
            args = self._program[self._buggyCodeLocation[0]+first+1:self._buggyCodeLocation[0]+last+1]
            args = args.replace(" ", "").split(",")
            number_of_args = len(args)
            for arg in args:
                live_variables.add(arg)
            if None in live_variables:
                live_variables.remove(None)
            combinations = list(itertools.combinations(live_variables, number_of_args))
            for combination in combinations:
                permuations = list(itertools.permutations(combination))
                for permuation in permuations:
                    string = ""
                    for par in permuation:
                        string += par + ", "
                    string = string[0:len(string)-2]
                    newProgram = self._program[:self._buggyCodeLocation[0]+first+1] + string +\
                                 self._program[self._buggyCodeLocation[0]+last+1:]
                    self._writeRepairProgram(newProgram)
                    self._testRepair(newProgram)
