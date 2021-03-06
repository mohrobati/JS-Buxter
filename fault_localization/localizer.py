import ast, math
from repair.bug_classifier import BugClassifier


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
                if key not in self.__failed:
                    continue
                if key not in self.__passed:
                    self.__passed[key] = 0
                SBFLValues[key] = (self.__failed[key] / self.__totalFailed) / \
                                  ((self.__passed[key] / self.__totalPassed) +
                                   (self.__failed[key] / self.__totalFailed))
        return SBFLValues

    def calculateOchiai(self):
        SBFLValues = {}
        if self.__totalFailed != 0:
            for loc in self._allLocs:
                key = str(loc)
                if key not in self.__failed:
                    continue
                if key not in self.__passed:
                    self.__passed[key] = 0
                SBFLValues[key] = self.__failed[key] /\
                                  (math.sqrt(self.__totalFailed * (self.__failed[key]+self.__passed[key])))
        return SBFLValues

    def calculateGenProg(self):
        SBFLValues = {}
        if self.__totalFailed != 0:
            for loc in self._allLocs:
                key = str(loc)
                if key not in self.__failed:
                    SBFLValues[key] = 0
                if key not in self.__passed:
                    SBFLValues[key] = 1
                SBFLValues[key] = 0.1
        return SBFLValues

    def calculateJaccard(self):
        SBFLValues = {}
        if self.__totalFailed != 0:
            for loc in self._allLocs:
                key = str(loc)
                if key not in self.__failed:
                    continue
                if key not in self.__passed:
                    self.__passed[key] = 0
                if self.__totalFailed != 0 and self.__passed[key] != 0:
                    SBFLValues[key] = self.__failed[key] / (self.__totalFailed + self.__passed[key])
        return SBFLValues

    def rankBuggyCodeElements(self, SBFLValues, debug=False):
        bugClassifier = BugClassifier()
        sortedCodeElements = sorted(SBFLValues.items(), key=lambda kv: kv[1], reverse=True)
        for i in range(len(sortedCodeElements)):
            loc = ast.literal_eval(sortedCodeElements[i][0])
            codeElementSyntax = self.__program[loc[0]:loc[1]]
            sortedCodeElements[i] = (ast.literal_eval(sortedCodeElements[i][0]),) + (sortedCodeElements[i][1], ) + (bugClassifier.classify(codeElementSyntax),)
            if debug:
                print(self.__WARNING + "#####\nCode Element: ", "(Suspiciousness: " + str(sortedCodeElements[i][1]) + ")")
                print("Location: ", loc)
                print(codeElementSyntax)
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
