import esprima
from fault_localization.preprocessor import Preprocessor
from fault_localization.runner import Runner

fileName = 'sample_01'
inputPath = 'sample_codes/' + fileName + ".js"
file = open(inputPath)
program = file.read()
file.close()

preprocessor = Preprocessor(program)
parsedCode = esprima.parseScript(program, delegate=preprocessor.preprocess)
preprocessedCode = preprocessor.getPreprocessedCode()
Runner(fileName, preprocessedCode).run(program, debug=True)


