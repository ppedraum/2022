import datetime as dt
import json

'''
    A classe Pagina são todos os atributos e lógica de uma página da agenda 
'''
class Pagina:
    '''Recebe a sua respectiva data e começa sem conteúdo '''
    def __init__(self, data : dt.date):
        self.data=data
        self.conteudo = ''

    def get_data(self):
        return self.data
    def get_data_string(self):
        return self.data.strftime('%d/%m/%Y')

    def get_conteudo(self):
        return self.conteudo
    def set_conteudo(self, novo_conteudo):
        self.conteudo = novo_conteudo


'''
    A agenda é a classe mãe e responsável por toda a lógica desde montar cada página com suas datas,
    verificar o usuário e senha, adicionar datas ao index de datas, ter as funções principais de escrever e
    pegar as páginas.
'''
class Agenda:

    '''Começa setando um usuário, senha e ano para a agenda'''
    def __init__(self, usuario, senha, ano):
        self.usuario=usuario
        self.senha=senha
        self.ano=ano

        '''Array com todas as páginas'''
        self.paginas = {}
        self.criar_agenda()

        self.storage = {}
        self.get_dados_bd()
        self.inject_dados_bd()

    '''Função que dá origem a agenda em si'''
    def criar_agenda(self):

        '''Pega todas as datas, verifica ano bissexto e cria as páginas'''
        for mes in range(12):
            mes +=1
            if mes == 2:

                if (self.ano%4==0 or self.ano%400==0) and self.ano%100!=0:
                    dias=29
                else:
                    dias=28
                for dia in range(dias):
                    dia +=1
                    data = dt.date(self.ano, mes, dia)
                    self.paginas[data.strftime('%d/%m/%Y')] = Pagina(data)
            elif mes == 4 or mes == 6 or mes == 9 or mes == 11:
                for dia in range(30):
                    dia +=1
                    data = dt.date(self.ano, mes, dia)
                    self.paginas[data.strftime('%d/%m/%Y')] = Pagina(data)
            else:
                for dia in range(31):
                    dia +=1
                    data = dt.date(self.ano, mes, dia)
                    self.paginas[data.strftime('%d/%m/%Y')] = Pagina(data)

    def get_dados_bd(self):
        file = open('randomjson.json')
        dados = json.load(file)
        for data, texto in dados.items():
            self.storage[data] = texto

    def inject_dados_bd(self):
        for data, texto in self.storage.items():
            self.write(data, texto)

    def write(self, data, conteudo):
        self.paginas[data].set_conteudo(conteudo)

    def get_pg(self, data):
        return self.paginas[data]

    def get_all_pgs(self):
        return self.paginas
    def get_ano(self):
        return self.ano
    


""" agenda = Agenda('Pedro', '123', 2004)
agenda.criar_agenda()
agenda.add_index('19/01/2004', 'Isa')
agenda.write('19/01/2004', 'Aniversário da Isa! <3')
print(agenda.index['Isa'].conteudo)
print(agenda.paginas) """