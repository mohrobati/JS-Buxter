import esprima
from fault_localization.preprocessor import Preprocessor
from fault_localization.runner import Runner

fileName = 'sample_051'
inputPath = 'sample_code/' + fileName + "/" + fileName + ".js"
file = open(inputPath)
program = file.read()
file.close()

preprocessor = Preprocessor(program)
parsedCode = esprima.parseScript(program, delegate=preprocessor.preprocess)
preprocessedCode = preprocessor.getPreprocessedCode()
# print(preprocessedCode)
Runner(fileName, preprocessedCode).run(program, debug=True, fix=True)


# 15 bad parse, 17, 20 repitition,  25, 33 useless code (change it with another),
# 34 loop, 42 bad parse, 45 bad parse
# 48 useless code (change it with another), 50 bad parse

