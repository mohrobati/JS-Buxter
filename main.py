import esprima, sys
from fault_localization.preprocessor import Preprocessor
from fault_localization.repair_runner import RepairRunner

fileName = 'sample_017'
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


# 17 problem: low amount of tests
# 18 problem: if (true/false)loop problem
# 19 problem: low amount of tests
# 22 problem: low amount of tests

