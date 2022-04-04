class Tamagushi:
    
    def __init__(self, nome):
        self.nome=nome
        self.__fome=10
        self.__saude=100
        self.__idade=0

    @property
    def fome(self):
        return self.__fome
    @property
    def saude(self):
        return self.__saude
    @property
    def idade(self):
        return self.__idade
    
    @fome.setter
    def fome(self, nova_fome):
        raise ValueError('Você não pode alterar a fome desse jeito!')
    @saude.setter
    def saude(self, nova_saude):
        raise ValueError('Você não pode alterar a saude desse jeito!')
    @idade.setter
    def idade(self, nova_idade):
        raise ValueError('Você não pode alterar a idade desse jeito!')


    def alt_nome(self, novo_nome):
        self.nome=novo_nome

    def alimentar(self, comida):
        for i in comida:
            if self.comida>=10:
                print(f'{Tamagushi.get_nome} Está cheio!!!')
            else:
                self.__fome+=1
        print(f'comeu {comida}!')
        self.__idade+=1
        if comida<100:
            self.__saude+=1

    def get_nome(self, p):
        if p:
            print(self.nome)
        return self.nome
    def get_fome(self, p):
        if p:
            print(self.__fome)
        return self.__fome
    def get_saude(self, p):
        if p:
            print(self.__saude)
        return self.__saude
    def get_idade(self, p):
        if p:
            print(self.__idade)
        return self.__idade

    def get_humor(self, p):
        humor=int((self.__saude/10+self.__fome)/2)
        if p:
            print(humor)
        return humor
        