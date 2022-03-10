class Funcionario:

    def __init__(self, nome, salario):
        self.nome=nome
        self.salario=float(salario)
    def aum_salario(self, pct):
        self.salario += (self.salario*pct/100)
    def get_salario(self):
        return self.salario