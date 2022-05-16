import random
from tkinter import *
from tkinter.ttk import Combobox

class Janela:
    def __init__(self, root: Tk):
        self.set_settings(500,500, 'Agenda')


        self.bt_enviar = Button(text='Enviar', command=None)
        self.bt_enviar.grid(column=0, row=2)

        self.run()

    def enviar_dados(self):
        root = self.root


    def set_settings(self, width, height, title):
        self.root.geometry(str(width)+'x'+str(height))
        self.root.title(title)

    def run(self):
        self.root.mainloop()


class Pessoa:
    def __init__(self, nome, numero):
        self.nome=nome
        self.numero=numero

    def get_nome(self):
        return self.nome
    def get_numero(self):
        return self.numero

class Usuario:
    def __init__(self, pessoa:Pessoa):
        self.id = random.randint(0, 1000)
        self.pessoa=pessoa
        self.emprestimos = []

    def get_usuario(self):
        return self.pessoa

    def get_emprestimos(self):
        return self.emprestimos

class Livro:
    def __init__(self, titulo, autor, data_publicacao):
        self.id = random.randint(0,1000)
        self.titulo=titulo
        self.autor=autor
        self.data_publicacao=data_publicacao

class Biblioteca:
    def __init__(self, nome):
        self.livros=[]
        self.nome=nome

    def emprestar_livros(self, livros : list, usuario: Usuario):
        for i in livros:
            usuario.emprestimos.append(i)

    def retornar_livros(self, id_livros, usuario: Usuario):
        for i in id_livros:
            for n in usuario.emprestimos:
                if n.id == i:
                    del n

    def add_livros(self, livros: list):
        for i in livros:
            self.livros.append(i)

    def get_livros(self):
        return self.livros

pedro = Pessoa('Pedro', 123)
pedraumm = Usuario(pedro)
print(pedraumm.get_usuario().get_nome())
print(pedraumm.id)

livro = Livro('As viagens de Gulliver', 'Não sei', 1930)

bib = Biblioteca('bibib')
bib.add_livros([livro])
bib.emprestar_livros([bib.get_livros()[0]], pedraumm)
print(pedraumm.get_emprestimos())

        
        