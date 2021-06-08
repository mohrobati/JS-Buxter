import esprima
from fault_localization.preprocessor import Preprocessor
from fault_localization.runner import Runner

fileName = 'sample_036'
inputPath = 'sample_code/' + fileName + "/" + fileName + ".js"
file = open(inputPath)
program = file.read()
file.close()

preprocessor = Preprocessor(program)
parsedCode = esprima.parseScript(program, delegate=preprocessor.preprocess)
preprocessedCode = preprocessor.getPreprocessedCode()
# print(preprocessedCode)
Runner(fileName, preprocessedCode).run(program, debug=True, fix=True)


# 9, 13, 15 bad parse, 20 repitition, 17, 25, 27 bad parse, 33 useless code (change it with another),
# 34 loop, 36 useless code (change it with another), 40 wrong answer, 42 bad parse, 45 bad parse
# 48 useless code (change it with another), 50 bad parse, 51 wrong answer / loop

