from repair.abstract_repair import Repair
import re

class IF_APC_Repair(Repair):

    def __init__(self, runner, program, buggyCodeLocation, fileName, startTime, fl, SBFLData, debug):
        super().__init__(runner, program, buggyCodeLocation, fileName, startTime, fl, SBFLData, debug)

    def fix(self):
        code = self._program[self._buggyCodeLocation[0]:self._buggyCodeLocation[1]]
        regexp = re.compile(r'(\w|\d|\[|\]|\$|_)+(\.(\w|\d|\[|\]|\$|_)+)+')
        check = regexp.search(code)
        condition = ''
        if check:
            exp = check.group()
            vars = exp.split(".")
            for i in range(len(vars)):
                chain = ''
                for j in range(i+1):
                    chain += vars[j] + '.'
                chain = chain.rstrip(chain[-1])
                condition += chain + " && "
            condition = condition.rstrip(condition[-1])
            condition = condition.rstrip(condition[-1])
            condition = condition.rstrip(condition[-1])
        newProgram = self._program[:self._buggyCodeLocation[0]] + \
                     "if(" + condition + ")\n" + self._program[self._buggyCodeLocation[0]:]
        self._writeRepairProgram(newProgram)
        self._testRepair(newProgram)
