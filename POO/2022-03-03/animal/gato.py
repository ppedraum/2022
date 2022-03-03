import animal.poo as poo

class Gato(poo.Animal):
    def __init__(self, tamanho, cor, idade):
        self.tipos_raca=['Persa', 'Leopardo', 'Siames']
        self.tipo_raca='Sem Raça'
        super().__init__(tamanho, cor, idade)
    def raca(self, tipo_raca):
        self.tipo_raca=self.tipos_raca[tipo_raca]


gato = Gato('a', 'Vermelho', 7)
gato.mostrar_dados()
print(gato.__dict__)
gato.raca(1)
print(gato.tipo_raca)