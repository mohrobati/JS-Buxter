import esprima
from fault_localization.preprocessor import Preprocessor
from fault_localization.runner import Runner

fileName = 'sample_022'
inputPath = 'sample_code/' + fileName + "/" + fileName + ".js"
file = open(inputPath)
program = file.read()
file.close()
preprocessor = Preprocessor(program)
parsedCode = esprima.parseScript(program, delegate=preprocessor.preprocess)
preprocessedCode = preprocessor.getPreprocessedCode()
# print(preprocessedCode)
Runner(fileName, preprocessedCode).run(program, debug=True, fix=True)
