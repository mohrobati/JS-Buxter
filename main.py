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
preprocessedCode = preprocessor.getPreprocessedCode()
# print(preprocessedCode)
RepairRunner(fileName, preprocessedCode).run(program, debug=True, fix=True)

#
# from random import randrange
# arr = [
#     232866808126,
#     159767792739,
#     83048334460,
#     412576791154,
#     219697940547,
#     197253056722,
#     174663776140,
#     146157576660,
#     307966962333,
#     298092953214,
#     124460333224,
#     385889834742]
# for i in range(9, 21):
#     string = None
#     if i == 9:
#         string = "09"
#     else:
#         string = str(i)
#     fileName = "sample_010_output_" + string
#     f = open("./tmp/output/"+fileName+".txt", "w+")
#     # n = randrange(10, 100)
#     # numbers = ""
#     # for j in range(n):
#     #     numbers += str(randrange(1000000000, 10000000000)) + " "
#     # f.truncate()
#     # f.write(str(n)+"\n")
#     f.write(str(arr[i-9]))
#     f.close()
#

