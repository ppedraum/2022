
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
        riscados=[]
        #pegar apenas os itens que foram riscados
        for i in range(len(self.itens)):
            if self.itens[i].get_stat():
                riscados.append(self.itens[i])
        #o self.itens é agora a diferença entre si mesma e os riscados
        self.itens = [i for i in self.itens if i not in riscados]
            
    def set_itens(self, itens):
        self.itens = itens[:]

    def get_itens(self, decor=False):
        if decor:
            lista=[]
            for i in range(len(self.itens)):
                lista.append(str(i+1)+' - '+self.itens[i].get_titulo())
            return lista
        else:
            return self.itens

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
        tipo=comm.split()[0]
        arg=comm.split(' ', 1)[1]
        if tipo=='del':
            if arg=='riscados':
                self.bloco.apagar_riscados()
            elif arg=='*':
                pass
            else:
                itens_exc=[]
                arg=arg.split()
                print(arg)
                for i in arg:
                    itens_exc.append(self.bloco.get_itens()[int(i)-1])
                self.bloco.set_itens([i for i in bloco.get_itens() if i not in itens_exc])
                
        elif tipo=='add':
            bloco.add_item(arg)
            
        elif 'riscar' in comm:
            arg=arg.split()
            for i in arg:
                self.bloco.riscar_item(int(i)) 
            

    def run(self):
        while True:
            os.system('cls')
            qtd_itens = len(self.bloco.get_itens())
            print('-'*30)
            for i in range(qtd_itens):
                print(self.bloco.get_itens(1)[i])
            print('-'*30)
            req = input(':> ')
            self.comando(req)
            

    def take_numero(self, comando):
        """ numero=''
        for i in comando:
            if i.isdigit():
                numero += str(i)
        return int(numero) """
        """ numero=[]
        for i in comando:
            numero.append(i)
        comm=''.join(numero[:numero.index(' ')])
        print(numero[numero.index(' ')+1:])
        print(numero[numero.index(' ')+1:].index(' ')) """
        numero=[]
        numero=comando.split(' ', 1)
        comm=numero[0]
        arg=numero[1]
        print(comm)
        print(arg)
        return numero

        
        

bloco = Bloquinho()
app = Request(bloco)
app.run()
""" print(app.take_numero('add Macaquinho José')) """




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
