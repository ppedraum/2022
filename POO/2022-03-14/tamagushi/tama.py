class Tamagushi:
    
    def __init__(self, nome):
        self.nome=nome
        self.fome=10
        self.saude=100
        self.idade=0

    def alt_nome(self, novo_nome):
        self.nome=novo_nome

    def alimentar(self, comida):
        self.fome+=1
        print(f'comeu {comida}!')

    def get_nome(self, p):
        if p:
            print(self.nome)
        return self.nome
    def get_fome(self, p):
        if p:
            print(self.fome)
        return self.fome
    def get_saude(self, p):
        if p:
            print(self.saude)
        return self.saude
    def get_idade(self, p):
        if p:
            print(self.idade)
        return self.idade

    def get_humor(self, p):
        humor=int((self.saude/10+self.fome)/2)
        if p:
            print(humor)
        return humor
        