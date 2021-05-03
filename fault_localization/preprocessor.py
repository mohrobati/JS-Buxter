from copy import deepcopy


class Preprocessor:

    def __init__(self, program):
        self.__program = program
        self.__executive_elements = self.__getExecutiveElements('./configs/executive_elements.txt')
        self.__pinPointListName = "fl_list"
        self.__pinPointList = {}
        self.__codes = []
        self.__chainStack = []

    def __getExecutiveElements(self, path):
        executive_elements = []
        file = open(path)
        for line in file:
            executive_elements.append(line.replace("\n", ""))
        return executive_elements

    def __pinPointAugmenter(self, first, last):
        return self.__pinPointListName + ".push(" + str([first, last]) + ");\n"

    def __generateSingleLine(self, first, last, after=True):
        if after:
            return self.__program[first:last] + '\n' + self.__pinPointAugmenter(first, last)
        else:
            return self.__pinPointAugmenter(first, last) + '\n' + self.__program[first:last]

    def __generateBlockStatement(self, first, last):
        tmp = self.__getCodes(first, last)
        if tmp:
            start = self.__program[first:tmp[0][0][0]]
            code = start + "{\n"
            code += self.__pinPointAugmenter(first, last)
            for c in tmp:
                code += c[1]
            if start and start.replace(" ", "").replace("\n", "")[len(start.replace(" ", "").replace("\n", "")) - 1] == '{':
                code += "}}\n"
            else:
                code += "}\n"
        else:
            code = self.__program[first:last] + "\n"
        return code

    def __generateForStatement(self, first, last):
        lastBlock = self.__chainStack.pop()
        tmp = []
        if lastBlock:
            tmp = self.__getCodes(lastBlock[0][0], lastBlock[0][1])
        if tmp:
            start = self.__program[first:lastBlock[0][0]]
            code = start + "{\n"
            code += self.__pinPointAugmenter(first, last)
            if tmp:
                for c in tmp:
                    code += c[1]
            else:
                code += lastBlock[1]
            if start and start.replace(" ", "").replace("\n", "")[len(start.replace(" ", "").replace("\n", "")) - 1] == '{':
                code += "}}\n"
            else:
                code += "}\n"
        else:
            code = self.__program[first:last] + "\n"
        return code

    def __generateIfElseBlockStatement(self, first, last):
        tmp = self.__getCodes(first, last)
        start = self.__program[first:tmp[0][0][0]]
        code = start + "{\n"
        code += self.__pinPointAugmenter(first, last)
        lastBlock = self.__chainStack.pop()
        for c in deepcopy(tmp):
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
        code += self.__pinPointAugmenter(lastBlock[0][0], lastBlock[0][1])
        for c in tmp:
            code += c[1]
        return code + "}"

    def __generateElseIfBlockStatement(self, first, last):
        tmp = self.__getCodes(first, last)
        start = self.__program[first:tmp[0][0][0]]
        code = start + "{\n"
        code += self.__pinPointAugmenter(first, last)
        lastBlock = self.__chainStack.pop()
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

    def __generateTryCatchBlockStatement(self, first, last):
        tmp = self.__getCodes(first, last)
        start = self.__program[first:tmp[0][0][0]]
        code = start + "{\n"
        code += self.__pinPointAugmenter(first, last)
        lastBlock = self.__chainStack.pop()
        for c in deepcopy(tmp):
            if not (lastBlock[0][0] <= c[0][0] and lastBlock[0][1] >= c[0][1]):
                code += c[1]
                tmp.pop(0)
        if start.replace(" ", "").replace("\n", "")[len(start.replace(" ", "").replace("\n", "")) - 1] == '{':
            code += "}} "
        else:
            code += "} "
        code += lastBlock[1]
        return code

    def __getCodes(self, first, last):
        tmp = []
        for c in self.__codes[::-1]:
            if c[0][0] >= first and c[0][1] <= last:
                tmp.append(self.__codes.pop())
            else:
                break
        tmp.reverse()
        return tmp

    def preprocess(self, node, meta):
        if node.type in self.__executive_elements:
            first = meta.start.offset
            last = meta.end.offset
            self.__pinPointList[(first, last)] = node
            if node.type == 'ExpressionStatement' or node.type == 'VariableDeclaration' or\
                    node.type == 'ReturnStatement':
                if node.type == 'ReturnStatement':
                    code = self.__generateSingleLine(first, last, after=False)
                else:
                    code = self.__generateSingleLine(first, last)
                self.__codes.append([(first, last), code])
                self.__chainStack.append([(first, last), code])
            elif node.type == 'IfStatement' and node.alternate:
                if node.alternate.type == 'BlockStatement' or node.alternate.type == 'ExpressionStatement':
                    code = self.__generateIfElseBlockStatement(first, last)
                    self.__codes.append([(first, last), code])
                    self.__chainStack.append([(first, last), code])
                elif node.alternate.type == 'IfStatement':
                    code = self.__generateElseIfBlockStatement(first, last)
                    self.__codes.append([(first, last), code])
                    self.__chainStack.append([(first, last), code])
            elif node.type == 'BlockStatement':
                self.__chainStack.append([(first, last), ""])
            elif node.type == 'IfStatement' or node.type == 'WhileStatement' or\
                    node.type == 'FunctionDeclaration':
                code = self.__generateBlockStatement(first, last)
                self.__codes.append([(first, last), code])
                if node.type == 'IfStatement':
                    self.__chainStack.append([(first, last), code])
            elif node.type == 'ForStatement':
                code = self.__generateForStatement(first, last)
                self.__codes.append([(first, last), code])
                self.__chainStack.append([(first, last), code])
            elif node.type == 'TryStatement':
                code = self.__generateTryCatchBlockStatement(first, last)
                self.__codes.append([(first, last), code])
            elif node.type == 'CatchClause':
                code = self.__generateBlockStatement(first, last)
                self.__codes.append([(first, last), code])
                self.__chainStack.append([(first, last), code])

    def getPreprocessedCode(self):
        declare = 'var ' + self.__pinPointListName + ' = [];\n'
        printList = 'console.log(" %%%locs",' + self.__pinPointListName + ',"%%locs");\n'
        codes = ""
        for code in self.__codes:
            codes += str(code[1])
        return declare + codes + printList
