class Aluno:
    def __init__(self, nome, cpf):
        self.nome=nome
        self.cpf=cpf
    
    def get_nome(self):
        return self.nome
    


class Equipe:
    def __init__(self, projeto, participantes):
        self.projeto=projeto
        self.part=participantes

    def list_part(self):
        print(self.part[i].get_nome() for i in self.part)


class Ger_Equipes:
    def __init__():
        pass
