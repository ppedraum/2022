class Triangulo:
    
    def __init__(self, lado):

        self.lados=[]
        for i in range(3):
            self.lados.append(lado[i])
        
        if max(self.lados)>=sorted(self.lados)[1]+sorted(self.lados)[0]:
            print('Este triângulo é impossível!')
        else:
            print('Triângulo criado!')
            self.perimetro=sum(self.lados)
            print(f'Perímetro: {self.perimetro}')
            print(f'Maior lado: {max(self.lados)}')