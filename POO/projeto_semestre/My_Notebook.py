from tkinter import *
from 



class Janela():
    def __init__(self, root:Tk, width, height):
        self.width=width
        self.height=height
        self.root = root
        self.root.geometry(str(width)+'x'+str(height))
        """ self.index() """
        self.txt_input = {}

        self.pagina()
        
        self.root.mainloop()

    def index(self):
        self.img_index = PhotoImage(file='./src/images/index.png', width=738, height=806)
        self.fundo = Label(self.root, width=self.width, height=self.height, image=self.img_index)
        self.fundo.pack()

    def login(self, usuario, senha):
        pass

    def menu(self, titulos:list):
        pass

    def pagina(self, data='', titulo=''):
        self.fundo = Label(self.root, bg='#FFF9F1', width=self.width, height=self.height)
        self.img_linhas = PhotoImage(file='./src/images/linhas.png', width=631, height=648)
        self.linhas = Label(self.root, image=self.img_linhas, bg='#FFF9F1', width=self.width, height=self.height)
        self.txt_input[data] = Text(self.linhas, width=631, height=648)
        self.linhas.pack()
        self.fundo.pack()
        self.txt_input[data].pack()
    

Janela(Tk(), 738, 806)