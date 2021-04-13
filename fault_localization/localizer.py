from copy import deepcopy

class Localizer:

    def __init__(self, program):
        self.program = program
        self.executive_elements = self.getExecutiveElements()
        self.pinPointListName = "fl_list"
        self.pinPointList = {}
        self.codes = []
        self.chainStack = []

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
                code = self.generateSingleLine(first, last)
                self.codes.append([(first, last), code])
                self.chainStack.append([(first, last), code])
            elif node.type == 'IfStatement' and node.alternate:
                if node.alternate.type == 'BlockStatement' or node.alternate.type == 'ExpressionStatement':
                    code = self.generateIfElseBlockStatement(first, last)
                    self.codes.append([(first, last), code])
                    self.chainStack.append([(first, last), code])
                elif node.alternate.type == 'IfStatement':
                    code = self.generateElseIfBlockStatement(first, last)
                    self.codes.append([(first, last), code])
                    self.chainStack.append([(first, last), code])
            elif node.type == 'BlockStatement':
                self.chainStack.append([(first, last), ""])
            elif node.type == 'IfStatement' or node.type == 'WhileStatement' or node.type == 'FunctionDeclaration':
                code = self.generateBlockStatement(first, last)
                self.codes.append([(first, last), code])
                if node.type == 'IfStatement':
                    self.chainStack.append([(first, last), code])

    def printProgram(self):
        for code in self.codes:
            print(code[1])

    def pinPointAugmenter(self, first, last):
        return self.pinPointListName + ".push(" + str([first, last]) + ");\n"

    def generateSingleLine(self, first, last):
        return self.program[first:last] + '\n' + self.pinPointAugmenter(first, last)

    def generateBlockStatement(self, first, last):
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

    def generateIfElseBlockStatement(self, first, last):
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
        lastBlock = self.chainStack.pop()
        for c in deepcopy(tmp):
            print(lastBlock[0], c[0])
            if not (lastBlock[0][0] <= c[0][0] and lastBlock[0][1] >= c[0][1]):
                code += c[1]
                tmp.pop(0)
            else:
                break
        if start.replace(" ", "").replace("\n", "")[len(start.replace(" ", "").replace("\n", "")) - 1] == '{':
            code += "}}"
        else:
            code += "}"
        code += ' else {\n'
        code += self.pinPointAugmenter(lastBlock[0][0], lastBlock[0][1])
        for c in tmp:
            code += c[1]
        return code + "}"

    def generateElseIfBlockStatement(self, first, last):
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
        lastBlock = self.chainStack.pop()
        for c in deepcopy(tmp):
            if not (lastBlock[0][0] <= c[0][0] and lastBlock[0][1] >= c[0][1]):
                code += c[1]
                tmp.pop(0)
        if start.replace(" ", "").replace("\n", "")[len(start.replace(" ", "").replace("\n", "")) - 1] == '{':
            code += "}} else "
        else:
            code += "} else "
        code += lastBlock[1]
        return code
