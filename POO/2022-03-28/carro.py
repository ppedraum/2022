
class Veiculo:
    def __init__(self, tipo, chassi, marca, modelo, ano):
        self.tipo=tipo
        self.chassi=chassi
        self.marca=marca
        self.modelo=modelo
        self.ano=ano

class Moto(Veiculo):
    def __init__(self, tipo, chassi, marca, modelo, ano, cilindrada):
        super().__init__(tipo, chassi, marca, modelo, ano)
        self.cilindrada=cilindrada

    @property
    def cilindrada(self):
        return self.cilindrada

    @cilindrada.setter
    def cilindrada(self, nova_cil):
        raise ValueError('Não é possível alterar as cilindradass')

    