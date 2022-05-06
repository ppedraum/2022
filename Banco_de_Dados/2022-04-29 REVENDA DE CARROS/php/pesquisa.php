<?php

require_once('datab.php');

$filtro = $_POST['filtro'];
$pesquisa = strtoupper($_POST['pesquisa']);

$query="select marca.nome as marca_nome, modelo.nome as modelo_nome, automovel.descricao, categoria.nome as categoria_nome from automovel, modelo, marca, categoria where 
(marca.nome like '$pesquisa' or modelo.nome like '$pesquisa'  or categoria.nome like '$pesquisa'
or CONCAT(marca.nome, ' ', modelo.nome) like '$pesquisa' or CONCAT(modelo.nome, ' ', marca.nome) like '$pesquisa') 
and modelo.codmarca = marca.codmarca and automovel.codmodelo = modelo.codmodelo and automovel.codcategoria = categoria.codcategoria;";

/* if ($filtro == 'marca'){
    $query="select marca.nome as marca_nome, modelo.nome as modelo_nome, automovel.descricao, categoria.nome as categoria_nome from automovel, modelo, marca, categoria where marca.nome like '$pesquisa' and modelo.codmarca = marca.codmarca and automovel.codmodelo = modelo.codmodelo and automovel.codcategoria = categoria.codcategoria";
}else if ($filtro == 'modelo'){
    $query="select marca.nome as marca_nome, modelo.nome as modelo_nome, automovel.descricao, categoria.nome as categoria_nome from automovel, modelo, marca, categoria where modelo.nome like '$pesquisa' and modelo.codmarca = marca.codmarca and automovel.codmodelo = modelo.codmodelo and automovel.codcategoria = categoria.codcategoria";
}else if ($filtro == 'categoria'){
    $query="select marca.nome as marca_nome, modelo.nome as modelo_nome, automovel.descricao, categoria.nome as categoria_nome from automovel, modelo, marca, categoria where categoria.nome like '$pesquisa' and modelo.codmarca = marca.codmarca and automovel.codmodelo = modelo.codmodelo and automovel.codcategoria = categoria.codcategoria";
} */

$resultados = mysqli_query($conn, $query);

if(mysqli_num_rows($resultados)!=0){
    while($row = $resultados->fetch_assoc()){
        echo "<div style='padding:10px;'>";
        echo 'modelo = '.$row['marca_nome'].' '.$row['modelo_nome'].'<br>';
        echo 'descricao = '.$row['descricao'].'<br>';
        echo 'categoria = '.$row['categoria_nome'].'<br>';
        echo '</div>';
    }
}else{
    echo "Nenhum resultado encontrado!";
}
mysqli_close($conn);  


?>