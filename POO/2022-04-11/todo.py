class Bloquinho:
    def __init__(self):
        self.itens=[]
    
    def add_item(self, titulo):
        self.itens.append(Item(titulo))

    def excluir_item(self, numero):
        del self.itens[numero]

    def riscar_item(self, numero):
        self.itens[numero].set_titulo(self.itens[numero].get_titulo()+" [CONCLUÍDO]")
        self.itens[numero].set_stat(True)

    def get_itens(self):
        lista=[]
        for i in range(len(self.itens)):
            lista.append(self.itens[i].get_titulo())
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

bloco = Bloquinho()
bloco.add_item("Fazer TCC")
bloco.add_item("Fazer Trabalho POO")
bloco.add_item("a")
print(bloco.get_itens())
bloco.riscar_item(2)
print(bloco.get_itens())
bloco.excluir_item(2)
print(bloco.get_itens())
bloco.riscar_item(0)
print(bloco.get_itens())