
class Funcionario():
    def __init__(self, nome, salario):
        self.nome=nome
        self.__salario=salario

    @property
    def salario(self):
        return self.__salario

    @salario.setter
    def salario(self, novo_salario):
        raise ValueError('Impossível alterar salário assim!')

    def aum_salario(self, pct):
        self.__salario = self.__salario * pct / 100
        """ print(self.__salario) """

    def get_salario(self): return self.salario
    def set_salario(self, novo_salario): self.__salario = novo_salario

    def get_nome(self): return self.nome
