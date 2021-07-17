from repair.abstract_repair import Repair


class SQ_RFO_Repair(Repair):

    def __init__(self, runner, program, buggyCodeLocation, fileName, startTime, fl, SBFLData, debug):
        super().__init__(runner, program, buggyCodeLocation, fileName, startTime, fl, SBFLData, debug)

    def fix(self):
        newProgram = self._program[0:self._buggyCodeLocation[0]] + "{}" + self._program[self._buggyCodeLocation[1]:]
        self._writeRepairProgram(newProgram)
        self._testRepair(newProgram)
