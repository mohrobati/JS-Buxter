import esprima
from fault_localization.localizer import Localizer

localizer = Localizer()
file = open('js_tests/main.js')
program = file.read()
output = esprima.parseScript(program, delegate=localizer.preprocess)
print(output)
localizer.printProgram(program)
