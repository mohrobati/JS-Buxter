from fault_localization.preprocessor import Preprocessor
import esprima
import sys


class Repair:

    def __init__(self, runner, program, buggyCodeLocation, fileName, debug=False):
        self._runner = runner
        self._program = program
        self._buggyCodeLocation = buggyCodeLocation
        self._fileName = fileName
        self._path = "./sample_code/repaired/"+fileName+"_repaired.js"
        self._debug = debug
        pass

    def _writeRepairProgram(self, repairedProgram):
        file = open(self._path, "w+")
        file.write(repairedProgram)
        file.close()

    def _testRepair(self, repairedProgram):
        print(repairedProgram)
        allPassed = self._runner.run(repairedProgram, debug=self._debug, fix=False)
        if allPassed:
            print("Repaired!\n")
            print("Patch:")
            print(type(self).__name__ + " on \"" + self._program[self._buggyCodeLocation[0]:self._buggyCodeLocation[1]] + "\"")
            sys.exit(0)

    def fix(self):
        pass

