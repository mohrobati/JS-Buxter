import subprocess, ast, sys, re
from fault_localization.localizer import Localizer
from fault_localization.runner import Runner
from repair.bug_fix import BugFix
from repair.bug_classifier import BugClassifier


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

    def __getResultsWhileError(self, path, test, line_number):
        insertingText = 'console.log(" %%%locs", Array.from(fl_set) ,"%%locs");\n'
        f = open(path, "r")
        lines = f.readlines()
        lines.insert(line_number-1, insertingText)
        f = open(path, "w")
        f.writelines(lines)
        f.close()
        cmd = "cat " + test + " | node " + path
        ps = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        return ps.communicate()[0].decode('utf-8').replace("\n", "")

    def _executeCommand(self, path, test, output, fix):
        cmd = "cat " + test + " | node " + path
        ps = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        result = ps.communicate()[0].decode('utf-8').replace("\n", "")
        regexp = re.compile(r'\^.*Error')
        errorCheck = regexp.search(result)
        predictedValue = None
        if errorCheck:
            errorText = errorCheck.group()
            index = result.find(errorText)
            pos_string = result[index:].split("    ")[1].split(" ").pop()
            line_number = pos_string[1:len(pos_string)-1].split(":")[1]
            result = self.__getResultsWhileError(path, test, int(line_number))
        if fix:
            first = result.find("%%locs")
            second = result.rfind("%%locs")
            if not errorCheck:
                predictedValue = result[:first].replace(" ", "").replace("\n", "")
            locs = []
            try:
                locs = ast.literal_eval(result[first + len("%%locs"):second].replace(" ", ""))
                locs = [ast.literal_eval(loc) for loc in locs]
                if errorCheck:
                    locs = [locs.pop()]
            except SyntaxError:
                pass
        else:
            if not errorCheck:
                predictedValue = result.replace(" ", "").replace("\n", "")
            locs = []
        evaluation = predictedValue == output
        return predictedValue, locs, evaluation, errorCheck

    def run(self, program, debug=False, fix=False):
        counter = 1
        localizer = Localizer(program)
        hasFailedTestCase = False
        errorCheck, errorCodeElement = None, None
        for test in self._testCases:
            output = self._getOutput(test).replace("\n", "").replace(" ", "")
            code = self._tempCode
            if fix:
                code = code.replace("%%code", self._preprocessedCode)
            else:
                code = code.replace("%%code", program)
            path = self._writePreprocessedCode(code)
            predictedValue, locs, evaluation, errorCheck = self._executeCommand(path, test, output, fix)
            if not errorCheck:
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
            else:
                if debug:
                    msg, color = self.__evaluateTest(False)
                    print(color + 'TestCase #' + str(counter) + ': --', "ERROR")
                    print("The code has faced Runtime Error")
                    if locs:
                        print("Error code syntax:\n", program[locs[0][0]:locs[0][1]])
                    print("Location:", locs, self._ENDC, "\n\n")
                errorCodeElement = locs
                break
            counter += 1
        if fix:
            if not errorCheck:
                possibleBuggyCodes = localizer.rankBuggyCodeElements(localizer.calculateTarantula(), debug)
                bugFix = BugFix(self, program, possibleBuggyCodes, self._fileName, debug)
                bugFix.fix()
            else:
                if errorCodeElement:
                    bugClassifier = BugClassifier()
                    errorCodeElement = errorCodeElement.pop()
                    errorCodeElement = [(errorCodeElement, 1.0, bugClassifier.classify(program[errorCodeElement[0]:errorCodeElement[1]]))]
                    bugFix = BugFix(self, program, errorCodeElement, self._fileName, debug)
                    bugFix.fix()
                return False
        else:
            if errorCheck:
                return False
        return not hasFailedTestCase
