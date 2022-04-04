

class Macaco():
    def __init__(self, nome):
        self.nome=nome
        self.__bucho=[]

    @property
    def bucho(self):
        return self.__bucho
        
    @bucho.setter
    def bucho(self, comidas):
        raise ValueError(f'Impossível colocar {comidas} no bucho, coma usando comer()!')

    def comer(self, comida):
        if type(comida) == Macaco:
            print(f'O Macaco comeu {comida.nome}!')
            self.__bucho.append(comida.nome)
        else:
            print(f'O Macaco comeu {comida}!')
            self.__bucho.append(comida)


    def alterar_nome(self, novo_nome):
        self.nome=novo_nome

    def verBucho(self):
        print(self.bucho)
    
    def digerir(self):
        for i in self.bucho:
            del self.bucho[i]
        print('O macaco digeriu!')