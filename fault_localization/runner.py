import glob


class Runner:

    def __init__(self, fileName, preprocessedCode):
        self._fileName = fileName
        self._preprocessedCode = preprocessedCode
        self._preprocessedCodePath = './sample_code/preprocessed/' + fileName + '_preprocessed.js'
        self._tempCode = self._getTempCode('./configs/input_reader.txt')
        self._testCases = self._getTestCases('./sample_code/' + fileName + '/inputs/')
        self._OKGREEN = '\033[92m'
        self._FAIL = '\033[91m'
        self._ENDC = '\033[0m'

    def _getTempCode(self, path):
        file = open(path)
        tempCode = file.read()
        file.close()
        return tempCode

    def _getTestCases(self, path):
        tests = glob.glob(path + '*.txt')
        tests.reverse()
        return tests

    def _getOutput(self, test):
        file = open(test.replace("input", "output"))
        output = file.read()
        file.close()
        return output

    def _writePreprocessedCode(self, code):
        file = open(self._preprocessedCodePath, "w+")
        file.write(code)
        file.close()
        return self._preprocessedCodePath

    def _executeCommand(self, *args, **kwargs):
        pass

    def run(self, *args, **kwargs):
        pass
