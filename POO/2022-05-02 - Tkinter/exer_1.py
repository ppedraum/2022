""" 
1 - Crie uma classe para representar um jogador de futebol, com os atributos nome, posição, data de nascimento, nacionalidade, altura e peso. Crie os métodos públicos necessários para sets e gets e também um método para imprimir todos os dados do jogador. Crie um método para calcular a idade do jogador e outro método para mostrar quanto tempo falta para o jogador se aposentar. Para isso, considere que os jogadores da posição de defesa se aposentam em média aos 40 anos, os jogadores de meio-campo aos 38 e os atacantes aos 35. 
"""
import datetime as dt
from tkinter import *
from tkinter.ttk import Combobox

class Jogador:
    def __init__(self, nome: str, data_nasc: int, nacionalidade: str, altura: float, peso: float, posicao: str):
        self.nome=nome
        self.data_nasc=data_nasc
        self.nacionalidade=nacionalidade
        self.altura=altura
        self.peso=peso
        self.posicao = posicao
        self.idade_aposentadoria={'defesa':40, 'meio-campo':38, 'ataque':35}
        self.is_aposentado = None

    def calcular_idade(self):
        return int(dt.datetime.today().strftime('%Y')) - self.data_nasc
    def calcular_aposentadoria(self, posicao):
        dif = self.idade_aposentadoria[posicao] - self.calcular_idade()
        if dif <=0:
            self.is_aposentado = True
        else:
            self.is_aposentado = False
        return dif

    def get_val_aposentadoria(self):
        return self.idade_aposentadoria


class Janela:
    def __init__(self, root: Tk):
        self.root = root
        self.nome_jogador = StringVar()
        self.dt_nasc_jogador = IntVar()
        self.nac_jogador = StringVar()
        self.altura_jogador = DoubleVar()
        self.peso_jogador = DoubleVar()
        self.ety_nome = Entry(self.root, textvariable=self.nome_jogador)
        self.ety_data_nasc = Entry(self.root, textvariable=self.dt_nasc_jogador)
        self.ety_nac = Entry(self.root, textvariable=self.dt_nasc_jogador)
        self.ety_altura = Entry(self.root, textvariable=self.dt_nasc_jogador)
        self.ety_peso = Entry(self.root, textvariable=self.dt_nasc_jogador)
        self.cbb_posicao = Combobox(self.root, values=)

    def set_settings(self, width, height, title):
        self.root.geometry(str(width)+'x'+str(height))
        self.root.title(title)

    def run(self):
        self.root.mainloop()
