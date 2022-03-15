

class Macaco():
    def __init__(self, nome):
        self.nome=nome
        self.bucho=[]

    def comer(self, comida):
        if type(comida) == Macaco:
            print(f'O Macaco comeu {comida.nome}!')
            self.bucho.append(comida.nome)
        else:
            print(f'O Macaco comeu {comida}!')
            self.bucho.append(comida)

    def verBucho(self):
        print(self.bucho)
    
    def digerir(self):
        for i in self.bucho:
            del self.bucho[i]
        print('O macaco digeriu!')