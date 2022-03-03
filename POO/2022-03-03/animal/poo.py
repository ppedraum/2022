from distutils import core
from email.errors import InvalidDateDefect


class Animal:
    def __init__(self, tamanho, cor, idade):
        self.tamanho = tamanho
        self.cor = cor
        self.idade = idade
    def mostrar_dados(self):
        print(f'{self.tamanho} {self.cor} {self.idade}')
    
        
