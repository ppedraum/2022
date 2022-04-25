import os

class Bloquinho:

#lista de itens do bloquinho
    def __init__(self):
        self.__itens=[]
    
 #encapsulando variaveis
    @property
    def itens(self):
        return self.__itens
    @itens.setter
    def itens(self, novos_itens):
        raise ValueError('Não é possível alterar os itens manualmente!')

#metodos para alterar o bloco
    def add_item(self, titulo):
        self.__itens.append(Item(titulo))

    def excluir_item(self, numero):
        del self.__itens[numero-1]

    def riscar_item(self, numero):
        if self.__itens[numero-1].get_stat()==True:
            pass
        else:
            self.__itens[numero-1].set_titulo(self.__itens[numero-1].get_titulo()+" [CONCLUÍDO]")
            self.__itens[numero-1].set_stat(True)

    def apagar_riscados(self):
        riscados=[]
        #pegar apenas os itens que foram riscados
        for i in range(len(self.__itens)):
            if self.__itens[i].get_stat():
                riscados.append(self.__itens[i])
        #o self.__itens é agora a diferença entre si mesma e os riscados
        self.__itens = [i for i in self.__itens if i not in riscados]
            
#metodo para pegar e setar os itens como quiser
    def set_itens(self, itens):
        self.__itens = itens[:]

    def get_itens(self, decor=False):
        if decor:
            lista=[]
            for i in range(len(self.__itens)):
                lista.append(str(i+1)+' - '+self.__itens[i].get_titulo())
            return lista
        else:
            return self.__itens

#classe item, com metodos proprios para o titulo e stat(riscado/não riscado)
class Item:
    def __init__(self, titulo):
        self.__titulo=titulo
        self.__isRiscado=False
    

    @property
    def titulo(self):
        return self.__titulo
    @property
    def isRiscado(self):
        return self.__isRiscado

    @titulo.setter
    def titulo(self, novo_titulo):
        raise ValueError('Não é possível alterar o título manualmente!')
    @isRiscado.setter
    def isRiscado(self, novo_stat):
        raise ValueError('Não é possível alterar o estado do item manualmente!')


    def set_titulo(self, novo_titulo):
        self.__titulo=novo_titulo
    def get_titulo(self):
        return self.titulo

    def get_stat(self):
        return self.isRiscado
    def set_stat(self, stat):
        self.__isRiscado=stat


#classe que é o núcleo do pragrama, que consegue realizar funções mais complexas e fazer o loop principal
class Request():
    def __init__(self, bloco):
        self.bloco=bloco
        
#pegar o comando do input do usuário e fatiar em vários pedaços para direcionar os argumentos em diferentes níveis
    def comando(self, comm):
#fatiar e dividir entre o tipo de comando e argumento dado
        tipo=comm.split()[0]
        arg=comm.split(' ', 1)[1]
#tipo deletar itens
        if tipo=='del':
            if arg=='riscados':
                self.bloco.apagar_riscados()
            elif arg=='*':
                self.bloco.set_itens([])
            else:
                itens_exc=[]
                arg=arg.split()
                print(arg)
                for i in arg:
                    itens_exc.append(self.bloco.get_itens()[int(i)-1])
                self.bloco.set_itens([i for i in self.bloco.get_itens() if i not in itens_exc])

#tipo add itens
        elif tipo=='add':
            self.bloco.add_item(arg)

#tipo riscar itens
        elif tipo=="riscar":
            arg=arg.split()
            for i in arg:
                self.bloco.riscar_item(int(i)) 

#loop principal do programa
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