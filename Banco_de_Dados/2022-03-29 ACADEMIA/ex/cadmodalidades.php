<?php
// conectar com servidor e o banco de dados
$conectar = mysql_connect('localhost','root','') ;
$banco    = mysql_select_db("academia");

// se o botao CADASTRAR foi escolhido
if (isset($_POST['cadastrar']))
{
$codigo  = $_POST['codigo'];
$nome    = $_POST['nome'];
$sql = mysql_query("insert into modalidade (codigo,nome)
                    values ('$codigo','$nome')");
$resultado = mysql_query($sql);
if ($resultado)
{  echo "Falha ao gravar dados informados";  }
else
{  echo "Dados cadastrados com sucesso"; }
}

// se o botao EXCLUIR foi escolhido
if (isset($_POST['excluir']))
{
$codigo = $_POST['codigo'];
$nome   = $_POST['nome'];
$sql = mysql_query("delete from modalidade where codigo = $codigo");
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
$codigo  = $_POST['codigo'];
$nome    = $_POST['nome'];
$sql = mysql_query("update modalidade set nome='$nome'
                    where codigo = $codigo");
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
	$sql = mysql_query("select * from modalidade");
	if (mysql_num_rows($sql) == 0)
		{ echo "Desculpe, mas sua pesquisa nao retornou resultados ";
		}
	else
		{
		echo "Resultado da Pesquisa das Modalidades: "."<br>";
			while($resultado = mysql_fetch_array($sql))
			{
			echo "Codigo   : ".utf8_encode($resultado['codigo'])."<br>".
                 "Nome     : ".utf8_encode($resultado['nome'])."<br><br>";
			}
		}
}


?>

