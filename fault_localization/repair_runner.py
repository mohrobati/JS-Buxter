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
        f = open(path, "r")
        lines = f.readlines()
        for i in range(line_number, len(lines)):
            if lines[i].startswith('fl_set'):
                return lines[i]
        return None
        # f = open(path, "w")
        # for line in lines:
        #     print(line)
        # f.writelines(lines)
        # f.close()
        # cmd = "cat " + test + " | node " + path
        # ps = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        # return ps.communicate()[0].decode('utf-8').replace("\n", "")

    def _executeCommand(self, path, test, output, fix):
        cmd = "cat " + test + " | node " + path
        ps = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        result = ps.communicate()[0].decode('utf-8').replace("\n", "")
        regexp = re.compile(r'\^.*Error')
        errorCheck = regexp.search(result)
        predictedValue = None
        if errorCheck:
            try:
                errorText = errorCheck.group()
                index = result.find(errorText)
                pos_string = result[index:].split("    ")[1].split(" ").pop()
                line_number = pos_string[1:len(pos_string)-1].split(":")[1]
                result = self.__getResultsWhileError(path, test, int(line_number))
                left = result.find("[")
                right = result.find("]")+1
                result = result[left:right]
            except:
                pass
        if fix and not errorCheck:
            first = result.find("%%locs")
            second = result.rfind("%%locs")
            predictedValue = result[:first].replace(" ", "").replace("\n", "")
            locs = []
            try:
                locs = ast.literal_eval(result[first + len("%%locs"):second].replace(" ", ""))
                locs = [ast.literal_eval(loc) for loc in locs]
            except SyntaxError:
                pass
        elif not fix:
            if not errorCheck:
                predictedValue = result.replace(" ", "").replace("\n", "")
            locs = []
        else:
            locs = [ast.literal_eval(result)]
        evaluation = predictedValue == output
        return predictedValue, locs, evaluation, errorCheck

    def run(self, program, startTime, repair_configs, debug=False, fix=False):
        counter = 1
        failedTests = []
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
                    failedTests.append(counter)
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
            fl, patterns = repair_configs[0], repair_configs[1]
            if not errorCheck:
                if fl == 'ochiai':
                    possibleBuggyCodes = localizer.rankBuggyCodeElements(localizer.calculateOchiai(), debug)
                elif fl == 'genprog':
                    possibleBuggyCodes = localizer.rankBuggyCodeElements(localizer.calculateGenProg(), debug)
                elif fl == 'jaccard':
                    possibleBuggyCodes = localizer.rankBuggyCodeElements(localizer.calculateJaccard(), debug)
                else:
                    possibleBuggyCodes = localizer.rankBuggyCodeElements(localizer.calculateTarantula(), debug)
                bugFix = BugFix(self, program, possibleBuggyCodes, self._fileName, startTime, repair_configs, debug)
                bugFix.fix()
            else:
                if errorCodeElement:
                    bugClassifier = BugClassifier()
                    errorCodeElement = errorCodeElement.pop()
                    errorCodeElement = [(errorCodeElement, 1.0, bugClassifier.classify('ERROR'))]
                    bugFix = BugFix(self, program, errorCodeElement, self._fileName, startTime, repair_configs, debug)
                    bugFix.fix()
                return False
        else:
            if errorCheck:
                return False
        return not hasFailedTestCase
