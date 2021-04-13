import esprima
from fault_localization.preprocessor import Preprocessor
import subprocess
import json
import ast

OKGREEN = '\033[92m'
FAIL = '\033[91m'
ENDC = '\033[0m'

fileName = 'main'
inputPath = 'js_tests/' + fileName + ".js"
file = open(inputPath)
program = file.read()
file.close()

preprocessor = Preprocessor(program)
parsedCode = esprima.parseScript(program, delegate=preprocessor.preprocess)
preprocessedCode = preprocessor.getPreprocessedCode()

file = open('configs/input_reader.txt')
temp_code = file.read()
file.close()

file = open('js_tests/preprocessed/data.json')
io = json.loads(file.read())
file.close()

counter = 1
for test in io:
    inputs = ""
    for input in test['input']:
        inputs += input + '\n'
    code = temp_code.replace("%%inputs", inputs)
    code = code.replace("%%code", preprocessedCode)
    preprocessedCodePath = 'js_tests/preprocessed/' + fileName + '_preprocessed.js'
    file = open(preprocessedCodePath, "w+")
    file.write(code)
    file.close()
    result = subprocess.run(['node', preprocessedCodePath], stdout=subprocess.PIPE).stdout.decode('utf-8').replace("\n", "")
    first = result.find("%%locs")
    second = result.rfind("%%locs")
    output = result[:first].replace(" ", "")
    locs = ast.literal_eval(result[first+len("%%locs"):second].replace(" ", ""))
    evaluation = output == str(test['output'][0])
    msg, color = "", ""
    if evaluation:
        msg = "PASSED"
        color = OKGREEN
    else:
        msg = "FAILED"
        color = FAIL
    print(color + 'TestCase #'+str(counter)+': --', msg)
    print("Real Value:", test['output'][0])
    print("Predicted Value:", output)
    print("Locations:", locs, ENDC)
    print()
    counter += 1

