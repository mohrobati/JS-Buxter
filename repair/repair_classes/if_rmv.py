from repair.abstract_repair import Repair


class IF_RMV_Repair(Repair):

    def __init__(self, runner, program, buggyCodeLocation, fileName, startTime, debug):
        super().__init__(runner, program, buggyCodeLocation, fileName, startTime, debug)

    def fix(self):
        code = self._program[self._buggyCodeLocation[0]:self._buggyCodeLocation[1]]
        first, last = self._detectParanthesis(code)
        first = self._buggyCodeLocation[0] + first
        last = self._buggyCodeLocation[0] + last
        if_pos = self._program.rfind("if", 0, first)
        newProgram = self._program[0:if_pos] + "" + self._program[last+1:]
        self._writeRepairProgram(newProgram)
        self._testRepair(newProgram)
