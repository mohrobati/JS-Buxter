import subprocess
import json
import ast
from .localizer import Localizer


class Runner:

    def __init__(self, fileName, preprocessedCode):
        self.__fileName = fileName
        self.__preprocessedCode = preprocessedCode
        self.__preprocessedCodePath = './sample_codes/preprocessed/' + fileName + '_preprocessed.js'
        self.__tempCode = self.__getTempCode('./configs/input_reader.txt')
        self.__testCases = self.__getTestCases('./sample_codes/test_cases/'+fileName+'_test_cases.json')
        self.__OKGREEN = '\033[92m'
        self.__FAIL = '\033[91m'
        self.__ENDC = '\033[0m'

    def __getTempCode(self, path):
        file = open(path)
        tempCode = file.read()
        file.close()
        return tempCode

    def __getTestCases(self, path):
        file = open(path)
        testCases = json.loads(file.read())
        file.close()
        return testCases

    def __getInputsOutputs(self, test):
        inputs = ""
        for input in test['input']:
            inputs += input + '\n'
        return inputs, test['output']

    def __writePreprocessedCode(self, code):
        file = open(self.__preprocessedCodePath, "w+")
        file.write(code)
        file.close()
        return self.__preprocessedCodePath

    def __executeCommant(self, path, test):
        result = subprocess.run(['node', path], stdout=subprocess.PIPE).stdout.decode('utf-8').replace(
            "\n", "")
        first = result.find("%%locs")
        second = result.rfind("%%locs")
        predictedValue = result[:first].replace(" ", "")
        locs = ast.literal_eval(result[first + len("%%locs"):second].replace(" ", ""))
        evaluation = predictedValue == str(test['output'][0])
        return predictedValue, locs, evaluation

    def __evaluateTest(self, evaluation):
        if evaluation:
            msg = "PASSED"
            color = self.__OKGREEN
        else:
            msg = "FAILED"
            color = self.__FAIL
        return msg, color

    def run(self, program, debug=False):
        counter = 1
        localizer = Localizer(program)
        for test in self.__testCases:
            inputs, output = self.__getInputsOutputs(test)
            code = self.__tempCode.replace("%%inputs", inputs)
            code = code.replace("%%code", self.__preprocessedCode)
            path = self.__writePreprocessedCode(code)
            predictedValue, locs, evaluation = self.__executeCommant(path, test)
            if debug:
                msg, color = self.__evaluateTest(evaluation)
                print(color + 'TestCase #'+str(counter)+': --', msg)
                print("Real Value:", test['output'][0])
                print("Predicted Value:", output)
                print("Locations:", locs, self.__ENDC)
                print()
            localizer.addTestCase(evaluation, locs)
            counter += 1
        localizer.rankBuggyCodeElements(localizer.calculateTarantula(), debug)

