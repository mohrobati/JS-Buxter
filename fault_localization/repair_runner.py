import subprocess
import ast
from fault_localization.localizer import Localizer
from fault_localization.runner import Runner
from repair.bug_fix import BugFix


class RepairRunner(Runner):

    def __init__(self, fileName, preprocessedCode):
        super().__init__(fileName, preprocessedCode)

    def __evaluateTest(self, evaluation):
        if evaluation:
            msg = "PASSED"
            color = self._OKGREEN
        else:
            msg = "FAILED"
            color = self._FAIL
        return msg, color

    def _executeCommand(self, path, test, output, fix):
        cmd = "cat " + test + " | node " + path
        ps = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        result = ps.communicate()[0].decode('utf-8').replace("\n", "")
        if fix:
            first = result.find("%%locs")
            second = result.rfind("%%locs")
            predictedValue = result[:first].replace(" ", "").replace("\n", "")
            locs = ast.literal_eval(result[first + len("%%locs"):second].replace(" ", ""))
            locs = [ast.literal_eval(loc) for loc in locs]
        else:
            predictedValue = result.replace("\n", "")
            locs = []
        evaluation = predictedValue == output
        return predictedValue, locs, evaluation

    def run(self, program, debug=False, fix=False):
        counter = 1
        localizer = Localizer(program)
        hasFailedTestCase = False
        for test in self._testCases:
            output = self._getOutput(test).replace("\n", "").replace(" ", "")
            code = self._tempCode
            if fix:
                code = code.replace("%%code", self._preprocessedCode)
            else:
                code = code.replace("%%code", program)
            path = self._writePreprocessedCode(code)
            predictedValue, locs, evaluation = self._executeCommand(path, test, output, fix)
            if not evaluation:
                hasFailedTestCase = True
            if debug:
                msg, color = self.__evaluateTest(evaluation)
                print(color + 'TestCase #' + str(counter) + ': --', msg)
                print("Real Value:", output)
                print("Predicted Value:", predictedValue)
                print("Locations:", locs, self._ENDC)
                print()
            localizer.addTestCase(evaluation, locs)
            counter += 1
        if fix:
            possibleBuggyCodes = localizer.rankBuggyCodeElements(localizer.calculateTarantula(), debug)
            bugFix = BugFix(self, program, possibleBuggyCodes, self._fileName, debug)
            print(possibleBuggyCodes)
            bugFix.fix()
        return not hasFailedTestCase
