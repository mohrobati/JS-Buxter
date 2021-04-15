from repair.repair_classes.if_apc import IF_APC_Repair
from repair.repair_classes.sq_rmo import SQ_RMO_Repair
from repair.repair_classes.sq_rfo import SQ_RFO_Repair


class BugFix:

    def __init__(self, runner, program, possibleBuggyCodes, fileName, debug=False):
        self.__runner = runner
        self.__program = program
        self.__possibleBuggyCodes = possibleBuggyCodes
        self.__fileName = fileName
        self.__debug = debug

    def fix(self):
        for buggyCode in self.__possibleBuggyCodes:
            for bugFixPattern in buggyCode[2]:
                if bugFixPattern == "SQ_RFO":
                    globals()[bugFixPattern+"_Repair"](self.__runner, self.__program, buggyCode[0], self.__fileName, self.__debug).fix()
