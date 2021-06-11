

class LiveVariablesExtractor:

    def __init__(self, program):
        self.__program = program
        self.__live_variable_elements = self.__getLiveVariableElements('./configs/live_variable_elements.txt')
        self.__variables = []

    def __getLiveVariableElements(self, path):
        live_variable_elements = []
        file = open(path)
        for line in file:
            live_variable_elements.append(line.replace("\n", ""))
        return live_variable_elements

    def __closeScope(self, first, last):
        for var in self.__variables:
            if (not var["isDone"]) and first <= var["scope"][0] and last >= var["scope"][1]:
                var["scope"][1] = last
                var["isDone"] = True

    def extractLiveVariables(self, node, meta):
        if node.type in self.__live_variable_elements:
            first = meta.start.offset
            last = meta.end.offset
            if node.type == 'VariableDeclaration' and node.declarations[0].init.type != "ArrowFunctionExpression" \
                and node.declarations[0].init.type != "FunctionExpression":
                self.__variables.append({"name": node.declarations[0].id.name, "scope": [first, last], "isDone": False})
            elif node.type == 'ArrowFunctionExpression' or node.type == 'FunctionExpression' or node.type == 'FunctionDeclaration':
                for var in node.params:
                    self.__variables.append({"name": var.name, "scope": [first, last], "isDone": True})
            elif node.type == 'BlockStatement' or node.type == 'ForStatement':
                self.__closeScope(first, last)

    def getLiveVariablesUpToPoint(self, programPoint):
        live_variables = set()
        for var in self.__variables:
            if not var["isDone"]:
                live_variables.add(var["name"])
                continue
            if var["scope"][0] <= programPoint <= var["scope"][1]:
                live_variables.add(var["name"])
        return live_variables













