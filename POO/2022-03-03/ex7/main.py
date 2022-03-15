from aluno import Aluno
from equipe import Equipe, Ger_Equipe


li_alunos=[[Aluno('Pedro', 123), Aluno('Marcos', 234)], [Aluno('João', 345), Aluno('Marla', 456)], [Aluno('Ana', 678), Aluno('Débora', 890)]]

#equipe_1=[alunos[0], alunos[1]]
#Ger_Equipe().add_equipe([alunos[0], alunos[2]], '#1')

ger=Ger_Equipe()

ger.add_equipe(li_alunos[0], '#1')

ger.add_equipe(li_alunos[1], '#2')

print(ger.li_equipes['#1'].get_nome_alunos())