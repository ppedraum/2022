class Livro:
    def __init__(self, titulo, autor, num_paginas, preco):
        self.titulo=titulo
        self.autor=autor
        self.num_paginas=num_paginas
        self.preco=float(preco)

    def get_preco(self):
        return self.preco
    def set_preco(self, novo_preco):
        self.preco=novo_preco