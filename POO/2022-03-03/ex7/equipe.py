from aluno import Aluno

class Equipe:

    def __init__(self, projeto, participantes):
        self.alunos=participantes
        self.projeto=projeto

    def add_part(self, aluno):
        self.alunos.append(aluno)

    def mudar_projeto(self, novo_projeto):
        self.projeto=novo_projeto

    def listar_part(self):
        for i in self.alunos:
            print(self.alunos[i].get_nome())
            

aluno=Aluno('pedro', 1)
a=Equipe('Pedro', [aluno])

a.listar_part()