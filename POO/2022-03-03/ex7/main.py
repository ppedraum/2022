from gerenciador_equipes import Ger_Equip
from aluno import Aluno
from equipe import Equipe

nomes=['Jonas', 'Joaquim', 'Jorge', 'Carlos', 'Carlitos', 'José', 'Omar']

ger=Ger_Equip()


equipe=Equipe('#1', [Aluno('Pedro', 123)])

equipe.listar_part()