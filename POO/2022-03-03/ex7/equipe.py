
class Equipe():
    def __init__(self, projeto):
        self.projeto=projeto
        self.li_alunos=[]

    def get_projeto(self):
        return self.projeto

    def get_nome_alunos(self):
        nomes=[]
        for i in range(len(self.li_alunos)):
            nomes.append(self.li_alunos[i].nome)
        return nomes


class Ger_Equipe():
    def __init__(self):
        self.li_equipes={}
    
    def add_equipe(self, alunos, projeto):
        self.li_equipes.update({projeto:Equipe(projeto)})
        print('Equipe criada!')
        for i in alunos:
            self.li_equipes[projeto].li_alunos.append(i)
        print('Alunos cadastrados com sucesso!')

        """ for i in range(len(self.li_equipes[-1].li_alunos)):
            print(f'alunos: {self.li_equipes[-1].li_alunos[i].nome}') """