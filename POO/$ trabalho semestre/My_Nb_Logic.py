import datetime as dt


class Pagina:
    def __init__(self, data : dt.date):
        self.data=data
        self.conteudo = ''

    def get_data_string(self):
        return self.data.strftime('%d/%m/%Y')

    def get_conteudo(self):
        return self.conteudo

    def set_conteudo(self, novo_conteudo):
        self.conteudo = novo_conteudo

class Agenda:
    def __init__(self, usuario, senha, ano):
        self.usuario=usuario
        self.senha=senha
        self.ano=ano

        
        self.paginas = {}
        self.criar_agenda()

        self.titulos = {
            1:self.get_pg('20/02/2022'),
            2:self.get_pg('21/02/2022')
        }
    def criar_agenda(self):

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

    def add_titulo(self, data, titulo):
        self.titulos[titulo] = self.paginas[data]

    def del_titulo(self, titulo):
        del self.titulos[titulo]

    def get_titulos(self):
        return self.titulos
        
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