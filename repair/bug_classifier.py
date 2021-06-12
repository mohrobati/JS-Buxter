import json
import esprima


class BugClassifier:

    def __init__(self):
        self.__codeElements = []
        self.__bugFixPatterns = self.__getBugFixPatterns('./configs/bug_fix_patterns.json')
        self.__classifiers = {
            "ExpressionStatement": self.__expressionStatementClassify,
            "IfStatement": self.__ifStatementClassify,
            "WhileStatement": self.__whileStatementClassify,
            "BlockStatement": self.__blockStatementClassify,
            "FunctionDeclaration": self.__functionDeclarationClassify,
            "VariableDeclaration": self.__variableDeclarationClassify,
            "ReturnStatement": self.__returnStatementClassify,
            "ForStatement": self.__blockStatementClassify,
        }

    def __getBugFixPatterns(self, path):
        file = open(path)
        bugFixPatterns = json.loads(file.read())
        file.close()
        return bugFixPatterns

    def classify(self, codeElement):
        parsedCodeElement = esprima.parseScript(codeElement, tolerant=True)
        possibleFixTypes = self.__classifiers[parsedCodeElement.body[0].type](parsedCodeElement.body[0])
        return possibleFixTypes

    def __ifStatementClassify(self, codeElement):
        return self.__bugFixPatterns['IF']

    def __blockStatementClassify(self, codeElement):
        return self.__bugFixPatterns['BLOCK']

    def __whileStatementClassify(self, codeElement):
        return self.__bugFixPatterns['WHILE']

    def __functionDeclarationClassify(self, codeElement):
        return self.__bugFixPatterns['FUNCTION']

    def __variableDeclarationClassify(self, codeElement):
        return self.__bugFixPatterns['ASSIGNMENT']

    def __returnStatementClassify(self, codeElement):
        return self.__bugFixPatterns['RETURN']

    def __expressionStatementClassify(self, codeElement):
        if codeElement.type == "ExpressionStatement":
            if codeElement.expression.type == "CallExpression":
                return self.__callExpressionClassify(codeElement.expression)
            elif codeElement.expression.type == "AssignmentExpression":
                if codeElement.expression.right.type == "CallExpression":
                    return self.__callExpressionClassify(codeElement.expression.right)
                else:
                    return self.__bugFixPatterns['ASSIGNMENT']

    def __callExpressionClassify(self, codeElement):
        if codeElement.callee.type == "MemberExpression":
            return self.__bugFixPatterns['METHOD_CHAIN_CALL']
        else:
            return self.__bugFixPatterns['METHOD_CALL']








