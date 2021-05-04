import esprima
from fault_localization.preprocessor import Preprocessor
from fault_localization.runner import Runner

fileName = 'sample_01'
inputPath = 'sample_codes/' + fileName + "/" + fileName + ".js"
file = open(inputPath)
program = file.read()
file.close()

preprocessor = Preprocessor(program)
parsedCode = esprima.parseScript(program, delegate=preprocessor.preprocess)
preprocessedCode = preprocessor.getPreprocessedCode()
print(parsedCode)
print(preprocessedCode)
# Runner(fileName, preprocessedCode).run(program, debug=True, fix=True)


# Empty arrow function         DONE
# Let a = (a, b) => {}         DONE
# function instead of () =>    DONE
# question statement
# switch case
