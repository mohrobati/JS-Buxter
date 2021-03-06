from repair.repair_classes.if_apc import IF_APC_Repair
from repair.repair_classes.sq_rmo import SQ_RMO_Repair
from repair.repair_classes.sq_rfo import SQ_RFO_Repair
from repair.repair_classes.if_rmv import IF_RMV_Repair
from repair.repair_classes.if_cc import IF_CC_Repair
from repair.repair_classes.if_apc import IF_APC_Repair
from repair.repair_classes.ty_atc import TY_ATC_Repair
from repair.repair_classes.mc_dap import MC_DAP_Repair
from repair.repair_classes.for_thb import FOR_THB_Repair


class BugFix:

    def __init__(self, runner, program, possibleBuggyCodes, fileName, startTime, repair_configs, debug=False):
        self.__runner = runner
        self.__program = program
        self.__possibleBuggyCodes = possibleBuggyCodes
        self.__fileName = fileName
        self.__startTime = startTime
        self.__fl = repair_configs[0]
        self.__debug = debug
        self.__pattern = repair_configs[1]

    def fix(self):
        index = 0
        for buggyCode in self.__possibleBuggyCodes:
            if buggyCode[2]:
                for bugFixPattern in buggyCode[2]:
                    if bugFixPattern in self.__pattern:
                        index += 1
                        globals()[bugFixPattern + "_Repair"](self.__runner, self.__program, buggyCode[0], self.__fileName,
                                                             self.__startTime, self.__fl, [len(self.__possibleBuggyCodes), index], self.__debug).fix()
