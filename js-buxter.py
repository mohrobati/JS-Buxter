import argparse
import esprima
from fault_localization.preprocessor import Preprocessor
from fault_localization.repair_runner import RepairRunner
import timeit

currentBugFixPatterns = ["FOR_THB", "MC_DAP", "SQ_RMO", "SQ_RFO", "IF_RMV", "TY_ATC", "IF_APC", "IF_CC"]
my_parser = argparse.ArgumentParser(description='JS-Buxter: Javascript bug buster',
                                    add_help=True)

my_parser.add_argument('-r',
                       '--repair',
                       nargs="*",
                       choices=currentBugFixPatterns,
                       help="choose the repair pattern\n" + \
                            'valid patterns='+str(["FOR_THB", "MC_DAP", "SQ_RMO", "SQ_RFO", "IF_RMV", "TY_ATC", "IF_APC", "IF_CC"])+'\n' +\
                            'if none is selected, all of them will be executed')

my_parser.add_argument('-fl',
                       '--fault_localization',
                       nargs="?",
                       const="tarantula",
                       choices=['tarantula', 'ochiai', 'jaccard', 'genprog'],
                       help="choose the fault localization method\nvalid choices=['tarantula', 'ochiai', 'jaccard', 'genprog']"
                            "\n default is 'tarantula'")

my_parser.add_argument('-s',
                       '--sample',
                       type=int,
                       help='choose the sample number from ./sample_code folder',
                       required=True)

my_parser.add_argument('-d',
                       '--debug',
                       action='store_true',
                       help='run in debug mode')

args = my_parser.parse_args()
if args.repair is None or len(args.repair) == 0:
    args.repair = currentBugFixPatterns

if int(args.sample/10) == 0:
    sample_number = '00' + str(args.sample)
else:
    sample_number = '0' + str(args.sample)

fileName = 'sample_' + sample_number
inputPath = 'sample_code/' + fileName + "/" + fileName + ".js"
file = open(inputPath)
program = file.read()
file.close()
preprocessor = Preprocessor(program)
parsedCode = esprima.parseScript(program, delegate=preprocessor.preprocess)
preprocessedCode = preprocessor.getPreprocessedCode()
start = timeit.default_timer()
try:
    RepairRunner(fileName, preprocessedCode).run(program, start, [args.fault_localization, args.repair], debug=args.debug, fix=True)
except SystemExit:
    pass
