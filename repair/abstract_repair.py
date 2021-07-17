from fault_localization.preprocessor import Preprocessor
import esprima, re
import sys
import timeit


class Repair:

    def __init__(self, runner, program, buggyCodeLocation, fileName, startTime, fl, SBFLData, debug=False):
        self._runner = runner
        self._program = program
        self._buggyCodeLocation = buggyCodeLocation
        self._fileName = fileName
        self._startTime = startTime
        self._fl = fl
        self._SBFLData = SBFLData
        self._path = "./sample_code/repaired/"+fileName+"_repaired.js"
        self._debug = debug
        self.__stats = open('./out.csv', "a")
        pass

    def _detectParanthesis(self, code):
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

    def _detectVariables(self, code):
        res = re.split('===|==|!==|!=|<=|>=|>|<|!|&&|\|\|', code)
        for i in range(len(res)):
            res[i] = res[i].replace(" ", "")
        res = set(res)
        if '' in res:
            res.remove('')
        return res

    def _writeRepairProgram(self, repairedProgram):
        file = open(self._path, "w+")
        file.write(repairedProgram)
        file.close()

    def _testRepair(self, repairedProgram):
        if self._debug:
            print(type(self).__name__ + " on \"" + self._program[
                                               self._buggyCodeLocation[0]:self._buggyCodeLocation[1]] + "\"")
        allPassed = self._runner.run(repairedProgram, self._startTime, self._fl, debug=self._debug, fix=False)
        if allPassed:
            print("Repaired!\n")
            print("Patch:")
            print(type(self).__name__ + " on \"" + self._program[self._buggyCodeLocation[0]:self._buggyCodeLocation[1]] + "\"")
            stop = timeit.default_timer()
            # stat = self._fileName[len(self._fileName)-3:] + ","
            # stat += self._fl + ","
            # stat += str(self._SBFLData[0]) + ","
            # stat += str(self._SBFLData[1]) + ","
            # stat += str(stop - self._startTime)[0:4] + "\n"
            # self.__stats.write(stat)
            print('Repair Time: ', stop - self._startTime, 'Seconds')
            sys.exit(0)

    def fix(self):
        pass

