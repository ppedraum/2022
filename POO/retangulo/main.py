""" 3- Classe Retângulo: Crie uma classe que modele um retângulo: 
  a) Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher) 
  b) Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular    
Perímetro;   
c) Crie um programa que utilize esta classe. Ele deve pedir ao usuário que informe as medidas 
de um local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e 
de rodapés necessárias para o local. """

piso={'b':5, 'h':5}

from ret import Ret

ret=Ret(10,10)

print(ret.get_perimetro())
print(ret.get_area())
ret.set_valores(1,1)
print(ret.get_area())