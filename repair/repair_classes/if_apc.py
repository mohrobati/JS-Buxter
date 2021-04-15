from repair.abstract_repair import Repair


class IF_APC_Repair(Repair):

    def __init__(self, program):
        super().__init__(program)

    def fix(self):
        print("hola")
