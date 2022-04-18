
import os

class Bloquinho:
    def __init__(self):
        self.itens=[]
    
    def add_item(self, titulo):
        self.itens.append(Item(titulo))

    def excluir_item(self, numero):
        del self.itens[numero-1]

    def riscar_item(self, numero):
        self.itens[numero-1].set_titulo(self.itens[numero-1].get_titulo()+" [CONCLUÍDO]")
        self.itens[numero-1].set_stat(True)

    def apagar_riscados(self):
        i=0
        while i<len(self.itens):
            if self.itens[i].get_stat()==True:
                del self.itens[i]
            i+=1
        # a estrutura FOR não aceita que mude a quantidade de itens de uma lista :-(, pois os
        # números acabam não batendo

    def get_itens(self):
        lista=[]
        for i in range(len(self.itens)):
            lista.append(str(i+1)+' - '+self.itens[i].get_titulo())
        return lista

class Item:
    def __init__(self, titulo):
        self.titulo=titulo
        self.isRiscado=False
    
    def set_titulo(self, novo_titulo):
        self.titulo=novo_titulo
    def get_titulo(self):
        return self.titulo

    def get_stat(self):
        return self.isRiscado
    def set_stat(self, stat):
        self.isRiscado=stat

class Request():
    def __init__(self, bloco):
        self.bloco=bloco
        
    def comando(self, comm):
        if 'del' in comm:
            if 'riscados' in comm:
                self.bloco.apagar_riscados()
            else:
                self.bloco.excluir_item(self.take_numero(comm))
        elif 'add' in comm:
            self.bloco.add_item(input('Digite o input: '))
        elif 'riscar' in comm:
            self.bloco.riscar_item(self.take_numero(comm)) 

    def run(self):
        while True:
            qtd_itens = len(self.bloco.get_itens())
            print('-'*30)
            for i in range(qtd_itens):
                print(self.bloco.get_itens()[i])
            print('-'*30)
            req = input(':> ')
            self.comando(req)
            print("\033[H\033[xJ", end="")
        



    def take_numero(self, comando):
        numero=''
        for i in comando:
            if i.isdigit():
                numero += str(i)
        return int(numero)
        

bloco = Bloquinho()
app = Request(bloco)
app.run()





""" bloco = Bloquinho()
os = Request(bloco)
os.comando('add')
os.comando('add')
os.comando('riscar 1')
os.comando('riscar 2')
bloco.apagar_riscados()
print(bloco.get_itens()) """

""" bloco = Bloquinho()
a = Request(bloco)
a.comando('add')
a.comando('add')
a.comando('add')
a.comando('add')
a.comando('add')
a.comando('add')
a.comando('riscar 1')
a.comando('riscar 2')
a.comando('riscar 3')
a.comando('riscar 4')
a.comando('riscar 5')
a.comando('riscar 6')
print(bloco.get_itens())
a.comando('del riscados')
print(bloco.get_itens()) """


"""
bloco = Bloquinho()
bloco.add_item("Fazer TCC")
bloco.add_item("Fazer Trabalho POO")
bloco.add_item("a")

a=Request(bloco)
print(bloco.get_itens())
a.comando('del 2')
print(bloco.get_itens())
a.comando('add')
print(bloco.get_itens())
a.comando('riscar 3')
a.comando('riscar 1')
print(bloco.get_itens())
a.comando('del riscados')
print(bloco.get_itens()) """
