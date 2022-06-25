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
        data = self.get_data().strftime('%d/%m/%Y')
        return data

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

        self.database = Database()

        for data, text in self.database.database_read().items():
            self.write(data, text)

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


    def write(self, data, conteudo):
        self.paginas[data].set_conteudo(conteudo)

    def get_pg(self, data):
        return self.paginas[data]

    def get_all_pgs(self):
        return self.paginas
    def get_ano(self):
        return self.ano

    def get_db(self):
        return self.database

class Database:
    def __init__(self):
        self.resources = {}

    def database_write(self, data):
        db = open('./database.json', 'w', encoding='utf-8')
        with db as db:
            db.write(json.dumps(data))
        db.close()

    def database_read(self):
        db_read = open('./database.json', 'r', encoding='utf-8')
        content = db_read.read()
        self.resources = json.loads(content)
        db_read.close()
        return self.resources

agd = Agenda('pedro', 123, 2022)
agd.write('01/01/2022', 'today i ate lemon')
agd.write('02/01/2022', 'it was good.')
