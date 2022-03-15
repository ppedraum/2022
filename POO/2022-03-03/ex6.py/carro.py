class Carro:
    def __init__(self, km_l):
        self.km_l=km_l
        self.gas=0
        self.km_rodados=0

    def add_gas(self, gas):
        self.gas+=gas

    def andar(self, km):
        self.gas-= km/self.km_l
        self.km_rodados+=km

    def get_gas(self):
        return self.gas

    def get_km(self):
        return self.km_rodados
