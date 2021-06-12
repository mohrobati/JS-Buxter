from repair.abstract_repair import Repair
from repair.live_variables_extractor import LiveVariablesExtractor
import esprima, sys, itertools


class MC_DAP_Repair(Repair):

    def __init__(self, runner, program, buggyCodeLocation, fileName, debug):
        super().__init__(runner, program, buggyCodeLocation, fileName, debug)

    def _detectParanthesis(self, code):
        stack = []
        list = []
        loc = []
        index = 0
        for c in code:
            if c == "(":
                stack.append("$")
                loc.append(index)
            elif c == ")":
                stack.pop()
                loc.append(index-1)
                list.append(loc)
                loc = []
            index += 1
        # TODO for multiple arg sets
        return list[0]

    def fix(self):
        lve = LiveVariablesExtractor(self._program)
        esprima.parseScript(self._program, delegate=lve.extractLiveVariables)
        live_variables = lve.getLiveVariablesUpToPoint(self._buggyCodeLocation[0])
        [first, last] = self._detectParanthesis(self._program[self._buggyCodeLocation[0]:self._buggyCodeLocation[1]])
        args = self._program[self._buggyCodeLocation[0]+first+1:self._buggyCodeLocation[0]+last+1]
        args = args.replace(" ", "").split(",")
        number_of_args = len(args)
        for arg in args:
            live_variables.add(arg)
        combinations = list(itertools.combinations(live_variables, number_of_args))
        for combination in combinations:
            permuations = itertools.permutations(combination)
            for permuation in permuations:
                string = ""
                for par in permuation:
                    string += par + ", "
                string = string[0:len(string)-2]
                newProgram = self._program[:self._buggyCodeLocation[0]+first+1] + string +\
                             self._program[self._buggyCodeLocation[0]+last+1:]
                self._writeRepairProgram(newProgram)
                self._testRepair(newProgram)
        sys.exit(0)
