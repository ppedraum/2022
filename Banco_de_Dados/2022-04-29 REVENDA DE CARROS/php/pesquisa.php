<?php

require_once('datab.php');

$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
    die("Erro de conexão: " . mysqli_connect_error());
}
echo "Conectado com sucesso! <br>";

$filtro = $_POST['filtro'];
$pesquisa = $_POST['pesquisa'];

$query="select * from automovel, $filtro, modelo
where $filtro.nome = '$pesquisa' 
and modelo.cod$filtro = $filtro.cod$filtro
and automovel.codmodelo = modelo.codmodelo";

$resultados = mysqli_query($conn, $query);

if(mysqli_num_rows($resultados)!=0){
    while($row = $resultados->fetch_assoc()){
        echo "$row <br>";
    }
}else{
    echo $resultados;
    echo "Nenhum resultado encontrado!";
}



?>