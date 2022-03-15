from livro import Livro

hp=Livro('Harry Potter', 'J.K. Rowling', 324, 44.50)
print(hp.get_preco())
hp.set_preco(2500.00)
print(hp.get_preco())