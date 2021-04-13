import esprima
from fault_localization.localizer import Localizer

file = open('js_tests/simple.js')
program = file.read()
localizer = Localizer(program)
output = esprima.parseScript(program, delegate=localizer.preprocess)
# print(output)
localizer.printProgram()


