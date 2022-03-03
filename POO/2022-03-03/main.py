from pessoa import Pessoa
import random as r

marcos=Pessoa()

func=[]
nomes=['Jonas', 'Joaquim', 'Jorge', 'Carlos', 'Carlitos', 'José', 'Omar']
nomes_usados=[]

for i in range(10):
    nome=nomes[r.randint(0,6)] #Pega um item aleatório da lista de nomes
    func.append(Pessoa(nome if nome not in nomes_usados else 'Nenhum'))
    #Objetos podem ser adicionados a uma lista, para criar vários
    nomes_usados.append(nome)
    print(func[i].nome, func[i].get_id())

'''Criei uma lista com nomes já usados, mas tem que ser adicionado depois de instancear
a pessoa pois senão dá erro...

func.append(Pessoa(nome se nome não está em nomes_usados, senão 'Nenhum'))
'''

func[5]=Pessoa() 
#Pode substituir o item da lista normalmente
