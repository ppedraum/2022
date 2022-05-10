<?php
// conectar com servidor e o banco de dados
$conectar = mysql_connect('localhost','root','') ;
$banco    = mysql_select_db("revenda3190");

// se o botao CADASTRAR foi escolhido
if (isset($_POST['cadastrar']))
{
$codmarca      = $_POST['codmarca'];
$nome          = $_POST['nome'];

$sql = mysql_query("insert into marca (codmarca,nome)
                    values ('$codmarca','$nome')");
                    
$resultado = mysql_query($sql);

if ($resultado)
{  echo "Falha ao gravar dados informados";  }
else
{  echo "Dados cadastrados com sucesso"; }
}

// se o botao EXCLUIR foi escolhido
if (isset($_POST['excluir']))
{
$codmarca  = $_POST['codmarca'];
$nome      = $_POST['nome'];

$sql = mysql_query("delete from marca where codmarca = $codmarca");

$resultado = mysql_query($sql);
if ($resultado)
        {
		echo "Falha ao EXCLUIR dados informados";
        }
else
	{
		echo "Dados excluidos com sucesso";
	}
}

// se o botao ALTERAR foi escolhido
if (isset($_POST['alterar']))
{
$codmarca  = $_POST['codmarca'];
$nome      = $_POST['nome'];

$sql = mysql_query("update marca set nome='$nome'
                    where codmarca = $codmarca");
                    
$resultado = mysql_query($sql);
if ($resultado)
        {
		echo "Falha ao ALTERAR dados informados";
        }
else
	{
		echo "Dados alterados com sucesso";
	}
}

// se o botao PESQUISAR foi escolhido
if (isset($_POST['pesquisar']))
{
	$sql = mysql_query("select * from marca");
	
	if (mysql_num_rows($sql) == 0)
		{ echo "Desculpe, mas sua pesquisa nao retornou resultados ";
		}
	else
		{
		echo "Resultado da Pesquisa das Marcas  - Revenda Carros: "."<br>";
			while($resultado = mysql_fetch_array($sql))
			{
			echo "Codigo   : ".utf8_encode($resultado['codmarca'])."<br>".
                 "Nome     : ".utf8_encode($resultado['nome'])."<br><br>";
			}
		}
}


?>

