class Localizer:

    def __init__(self, program):
        self.program = program
        self.executive_elements = self.getExecutiveElements()
        self.pinPointListName = "fl_list"
        self.pinPointList = {}
        self.codes = []

    def getExecutiveElements(self):
        executive_elements = []
        file = open('./configs/executive_elements.txt')
        for line in file:
            executive_elements.append(line.replace("\n", ""))
        return executive_elements

    def preprocess(self, node, meta):
        if node.type in self.executive_elements:
            first = meta.start.offset
            last = meta.end.offset
            self.pinPointList[(first, last)] = node
            if node.type == 'ExpressionStatement' or node.type == 'VariableDeclaration' or node.type == 'ReturnStatement':
                self.codes.append([(first, last), self.generateSingleLine(first, last)])
            elif node.type == 'IfStatement' or node.type == 'WhileStatement':
                self.codes.append([(first, last), self.generateIfStatement(first, last)])
            elif node.type == 'FunctionDeclaration' or node.type == 'ArrowFunctionExpression':
                self.codes.append([(first, last), self.generateFunctionDeclaration(first, last)])

    def printProgram(self):
        for code in self.codes:
            print(code[1])

    def pinPointAugmenter(self, first, last):
        return self.pinPointListName + ".push(" + str([first, last]) + ");\n"

    def generateSingleLine(self, first, last):
        return self.program[first:last] + '\n' + self.pinPointAugmenter(first, last)

    def generateIfStatement(self, first, last):
        tmp = []
        for c in self.codes[::-1]:
            if c[0][0] > first and c[0][1] <= last:
                tmp.append(self.codes.pop())
            else:
                break
        tmp.reverse()
        start = self.program[first:tmp[0][0][0]]
        code = start + "{\n"
        code += self.pinPointAugmenter(first, last)
        for c in tmp:
            code += c[1]
        if start.replace(" ", "").replace("\n", "")[len(start.replace(" ", "").replace("\n", "")) - 1] == '{':
            code += "}}\n"
        else:
            code += "}\n"
        return code

    def generateFunctionDeclaration(self, first, last):
        pass
