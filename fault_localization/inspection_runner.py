import subprocess
from fault_localization.runner import Runner


class InspectionRunner(Runner):

    def __init__(self, fileName, preprocessedCode):
        super().__init__(fileName, preprocessedCode)

    def _executeCommand(self, path, test, output):
        cmd = "cat " + test + " | node " + path
        ps = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        result = ps.communicate()[0].decode('utf-8').replace("\n", "")
        predictedValue = result.replace("\n", "")
        locs = []
        evaluation = predictedValue == output
        return predictedValue, locs, evaluation

    def run(self, programs, inspectingProgram, failedTests):
        counter = 0
        evaluations = [[] for i in range(len(programs))]
        inspectedValues = []
        inspectedInfo = []
        for program in programs:
            for test in self._testCases:
                output = self._getOutput(test).replace("\n", "").replace(" ", "")
                code = self._tempCode
                code = code.replace("%%code", program)
                path = self._writePreprocessedCode(code)
                predictedValue, locs, evaluation = self._executeCommand(path, test, output)
                evaluations[counter].append(evaluation)
            counter += 1
        counter = 0
        for test in self._testCases:
            output = self._getOutput(test).replace("\n", "").replace(" ", "")
            code = self._tempCode
            code = code.replace("%%code", inspectingProgram)
            path = self._writePreprocessedCode(code)
            predictedValue, locs, evaluation = self._executeCommand(path, test, output)
            first = predictedValue.find("%insp")
            second = predictedValue[first + len("%insp"):].find("%%insp") + first - 1
            if first == -1 or second == -1:
                continue
            firstOutput = predictedValue[first + len("%insp"):second + len("%%insp")]
            values = firstOutput.split("$$split$$")
            for i in range(len(values)):
                if 'undefined' in values[i]:
                    values[i] = ' 0 '
            inspectedValues.append(values)
        for val in inspectedValues:
            if evaluations[0][counter] != evaluations[1][counter]:
                eval = evaluations[0][counter]
                data = {"values": val, "eval": eval}
                inspectedInfo.append(data)
            counter += 1
        return inspectedInfo
