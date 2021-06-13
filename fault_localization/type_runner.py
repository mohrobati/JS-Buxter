import subprocess
from fault_localization.runner import Runner


class TypeRunner(Runner):

    def __init__(self, fileName, preprocessedCode):
        super().__init__(fileName, preprocessedCode)

    def _executeCommand(self, path, test):
        cmd = "cat " + test + " | node " + path
        ps = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        result = ps.communicate()[0].decode('utf-8').replace("\n", "")
        output = result.replace("\n", "")
        return output

    def run(self, inspectingProgram):
        test = self._testCases[0]
        typeValues = []
        code = self._tempCode
        code = code.replace("%%code", inspectingProgram)
        path = self._writePreprocessedCode(code)
        output = self._executeCommand(path, test)
        first = output.find("%insp")
        second = output[first+len("%insp"):].find("%%insp")
        values = output[first + len("%insp"):second+len("%%insp")].split("$$split$$")
        typeValues.append(values)
        return typeValues.pop()
