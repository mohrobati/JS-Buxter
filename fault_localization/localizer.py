import ast


class Localizer:

    def __init__(self, program):
        self.__program = program
        self.__passed = {}
        self.__failed = {}
        self.__totalPassed = 0
        self.__totalFailed = 0
        self._allLocs = set()
        self.__WARNING = '\033[93m'
        self.__ENDC = '\033[0m'

    def addTestCase(self, evaluation, locs):
        if evaluation:
            self.__totalPassed = self.__updateFields(locs, self.__totalPassed, self.__passed)
        else:
            self.__totalFailed = self.__updateFields(locs, self.__totalFailed, self.__failed)

    def calculateTarantula(self):
        SBFLValues = {}
        if not (self.__totalFailed == 0 or self.__totalPassed == 0):
            for loc in self._allLocs:
                key = str(loc)
                if key not in self.__failed or key not in self.__passed:
                    continue
                SBFLValues[key] = (self.__failed[key] / self.__totalFailed) / \
                                  ((self.__passed[key] / self.__totalPassed) +
                                   (self.__failed[key] / self.__totalFailed))
        return SBFLValues

    def rankBuggyCodeElements(self, SBFLValues, debug=False):
        sortedCodeElements = sorted(SBFLValues.items(), key=lambda kv: kv[1], reverse=True)
        if debug:
            for ce in sortedCodeElements:
                loc = ast.literal_eval(ce[0])
                print(self.__WARNING + "#####\nCode Element: ", "(Suspiciousness: " + str(ce[1]) + ")")
                print("Location: ", loc)
                print(self.__program[loc[0]:loc[1]])
                print("#####\n" + self.__ENDC)
        return sortedCodeElements

    def __updateFields(self, locs, total, category):
        total += 1
        for loc in locs:
            if str(loc) in category:
                category[str(loc)] += 1
            else:
                category[str(loc)] = 1
            self._allLocs.add(str(loc))
        return total
