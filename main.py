import esprima, sys
from fault_localization.preprocessor import Preprocessor
from fault_localization.repair_runner import RepairRunner

fileName = 'sample_050'
inputPath = 'sample_code/' + fileName + "/" + fileName + ".js"
file = open(inputPath)
program = file.read()
file.close()
preprocessor = Preprocessor(program)
parsedCode = esprima.parseScript(program, delegate=preprocessor.preprocess)
preprocessedCode = preprocessor.getPreprocessedCode()
# print(preprocessedCode)
RepairRunner(fileName, preprocessedCode).run(program, debug=True, fix=True)
