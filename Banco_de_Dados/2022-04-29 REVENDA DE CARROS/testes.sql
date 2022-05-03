select marca.nome as marca_nome, modelo.nome as modelo_nome, automovel.descricao, categoria.nome as categoria_nome from automovel, modelo, marca, categoria where 
(marca.nome like '$pesquisa' or modelo.nome like '$pesquisa'  or categoria.nome like '$pesquisa'
or marca.nome + ' ' + modelo.nome like '$pesquisa' or modelo.nome + ' ' + marca.nome like '$pesquisa') 
and modelo.codmarca = marca.codmarca and automovel.codmodelo = modelo.codmodelo and automovel.codcategoria = categoria.codcategoria;