from tkinter import *
from tkinter.ttk import Combobox
import datetime as dt

class Contato:
    def __init__(self, nome, numero):
        self.nome=nome
        self.numero=numero

    def get_nome(self):
        return self.nome
    def set_nome(self, novo_nome):
        self.nome=novo_nome

    def get_numero(self):
        return self.numero
    def set_numero(self, novo_numero):
        self.numero=novo_numero

class Agenda:

    def __init__(self):
        self.contatos = []
    
    def get_contatos(self):
        return self.contatos

    def add_contato(self, contato: Contato):
        self.contatos.append(contato)

    def del_contato(self, nome):
        del self.contatos[nome]

    def ligar_contato(self, numero):
        print(f'Trim Trim Trim! {numero}')

class Janela:
    def __init__(self, root: Tk, agenda: Agenda):
        self.nome_contato = StringVar()
        self.numero_contato = IntVar()

        self.root = root
        self.agenda = agenda
        self.set_settings(500,500, 'Agenda')
        Label(root, text='Nome: ').grid(column=0, row=0)
        ety_nome = Entry(root, textvariable=self.nome_contato)
        ety_nome.grid(column=1, row=0)

        Label(root, text='Número: ').grid(column=0, row=1)
        ety_numero = Entry(root, textvariable=self.numero_contato)
        ety_numero.grid(column=1, row=1)

        self.bt_enviar = Button(text='Enviar', command=self.enviar_dados).grid(column=0, row=2)
        self.bt_mostrar_contatos = Button(text='Mostrar contatos', command=self.mostrar_contatos)

        self.run()

    def enviar_dados(self):
        root = self.root
        Label(root, text='Contato Salvo!').grid(column=1, row=2)
        self.agenda.add_contato(Contato(self.nome_contato.get(), self.numero_contato.get()))
        self.mostrar_contatos()
        print(agenda.get_contatos())

    def mostrar_contatos(self):
        fr_contatos = Frame(self.root)
        n=0
        for i in self.agenda.contatos:
            Label(fr_contatos, text='Nome: ' + i.get_nome()).grid(column=0, row=n)
            Label(fr_contatos, text='Número: ' + str(i.get_numero())).grid(column=0, row=n+1)
            n+=2
        fr_contatos.grid(column=3, row=0)



    def set_settings(self, width, height, title):
        self.root.geometry(str(width)+'x'+str(height))
        self.root.title(title)

    def run(self):
        self.root.mainloop()

agenda = Agenda()
janela = Janela(Tk(), agenda)






