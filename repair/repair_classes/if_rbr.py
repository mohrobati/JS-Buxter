from repair.abstract_repair import Repair


class IF_RBR_Repair(Repair):

    def __init__(self, runner, program, buggyCodeLocation, fileName, debug):
        super().__init__(runner, program, buggyCodeLocation, fileName, debug)

    def fix(self):
        print(self._program[self._buggyCodeLocation[0]:self._buggyCodeLocation[1]])
        # newProgram = self._program[0:self._buggyCodeLocation[0]] + "{}" + self._program[self._buggyCodeLocation[1]:]
        # self._writeRepairProgram(newProgram)
        # self._testRepair(newProgram)
