import subprocess
import json
import ast
import glob
from fault_localization.localizer import Localizer
from repair.bug_fix import BugFix


class Runner:

    def __init__(self, fileName, preprocessedCode):
        self.__fileName = fileName
        self.__preprocessedCode = preprocessedCode
        self.__preprocessedCodePath = './sample_codes/preprocessed/' + fileName + '_preprocessed.js'
        self.__tempCode = self.__getTempCode('./configs/input_reader.txt')
        self.__testCases = self.__getTestCases('./sample_codes/' + fileName + '/inputs/')
        self.__OKGREEN = '\033[92m'
        self.__FAIL = '\033[91m'
        self.__ENDC = '\033[0m'

    def __getTempCode(self, path):
        file = open(path)
        tempCode = file.read()
        file.close()
        return tempCode

    def __getTestCases(self, path):
        tests = glob.glob(path + '*.txt')
        tests.reverse()
        return tests

    def __getOutput(self, test):
        file = open(test.replace("input", "output"))
        output = file.read()
        file.close()
        return output

    def __writePreprocessedCode(self, code):
        file = open(self.__preprocessedCodePath, "w+")
        file.write(code)
        file.close()
        return self.__preprocessedCodePath

    def __executeCommand(self, path, test, output, fix):
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

    def __evaluateTest(self, evaluation):
        if evaluation:
            msg = "PASSED"
            color = self.__OKGREEN
        else:
            msg = "FAILED"
            color = self.__FAIL
        return msg, color

    def run(self, program, debug=False, fix=False):
        counter = 1
        localizer = Localizer(program)
        hasFailedTestCase = False
        for test in self.__testCases:
            output = self.__getOutput(test).replace("\n", "")
            code = self.__tempCode
            if fix:
                code = code.replace("%%code", self.__preprocessedCode)
            else:
                code = code.replace("%%code", program)
            path = self.__writePreprocessedCode(code)
            predictedValue, locs, evaluation = self.__executeCommand(path, test, output, fix)
            print(evaluation)
            if not evaluation:
                hasFailedTestCase = True
            if debug:
                msg, color = self.__evaluateTest(evaluation)
                print(color + 'TestCase #' + str(counter) + ': --', msg)
                print("Real Value:", output)
                print("Predicted Value:", predictedValue)
                print("Locations:", locs, self.__ENDC)
                print()
            localizer.addTestCase(evaluation, locs)
            counter += 1
        if fix:
            possibleBuggyCodes = localizer.rankBuggyCodeElements(localizer.calculateTarantula(), debug)
            bugFix = BugFix(self, program, possibleBuggyCodes, self.__fileName, debug)
            print(possibleBuggyCodes)
            bugFix.fix()
        return not hasFailedTestCase
