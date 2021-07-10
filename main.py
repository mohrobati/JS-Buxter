import esprima, sys
from fault_localization.preprocessor import Preprocessor
from fault_localization.repair_runner import RepairRunner

fileName = 'sample_000'
inputPath = 'sample_code/' + fileName + "/" + fileName + ".js"
file = open(inputPath)
program = file.read()
file.close()
preprocessor = Preprocessor(program)
parsedCode = esprima.parseScript(program, delegate=preprocessor.preprocess)
# print(parsedCode)
preprocessedCode = preprocessor.getPreprocessedCode()
# print(preprocessedCode)
RepairRunner(fileName, preprocessedCode).run(program, debug=True, fix=True)


# okays: 0, 1, 2, 3, 4, 5, 6, 7 loop, 8, 9, 10 time, 11, 12, 13, 14, 15, 16, 17, 18, 19,
#        20, 21, 22, 23, 24, 25, 26, 27 time, 28 loop, 29, 30, 31 time, 32, 33, 34 time, 35 loop,
#        36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49
