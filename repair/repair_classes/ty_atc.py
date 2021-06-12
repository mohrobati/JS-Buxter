from repair.abstract_repair import Repair


class TY_ATC_Repair(Repair):

    def __init__(self, runner, program, buggyCodeLocation, fileName, debug):
        super().__init__(runner, program, buggyCodeLocation, fileName, debug)

    def fix(self):
        newProgram = "try {\n" + self._program[self._buggyCodeLocation[0]:self._buggyCodeLocation[1]] + "} catch(e) {}\n"
        self._writeRepairProgram(newProgram)
        self._testRepair(newProgram)
