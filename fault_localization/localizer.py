class Localizer:

    def __init__(self):
        self.executive_elements = self.getExecutiveElements()
        self.pinPointList = []
        self.pinPointListName = "fl_list"

    def getExecutiveElements(self):
        executive_elements = []
        file = open('./configs/executive_elements.txt')
        for line in file:
            executive_elements.append(line.replace("\n", ""))
        return executive_elements

    def pinPointAugmentor(self, meta):
        return '\n'+self.pinPointListName + ".push(" + str(meta) + ");\n"

    def preprocess(self, node, meta):
        if node.type in self.executive_elements:
            self.pinPointList.append(meta)

    def printProgram(self, program):
        newProgram = ""
        for pinPoint in self.pinPointList:
            newProgram += self.pinPointAugmentor(pinPoint) +\
                      program[pinPoint.start.offset:pinPoint.end.offset]
        print(newProgram)
