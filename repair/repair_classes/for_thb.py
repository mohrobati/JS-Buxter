from repair.abstract_repair import Repair
import esprima, re


class FOR_THB_Repair(Repair):

    def __init__(self, runner, program, buggyCodeLocation, fileName, startTime, debug):
        super().__init__(runner, program, buggyCodeLocation, fileName, startTime, debug)

    def fix(self):
        code = self._program[self._buggyCodeLocation[0]:self._buggyCodeLocation[1]]
        try:
            parsedCode = esprima.parseScript(code)
        except:
            return None
        iterator = parsedCode.body[0].init.declarations[0].id.name
        regexp = re.compile(r'(\w|\d|\$|_)+[\[]'+iterator+r'[\]]')
        check = regexp.search(code)
        exp = check.group()
        variable = exp[:len(exp) - len(iterator) - 2]
        code = code.replace(exp, "forEachEl")
        first, last = self._detectParanthesis(code)
        newCode = variable + ".forEach((forEachEl) => " + code[last+1:] + ")"
        newProgram = self._program[:self._buggyCodeLocation[0]] + \
                     newCode + self._program[self._buggyCodeLocation[1]:]
        self._writeRepairProgram(newProgram)
        self._testRepair(newProgram)
