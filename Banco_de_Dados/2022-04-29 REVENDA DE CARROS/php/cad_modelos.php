<?php
require_once('datab.php');

$cod_modelo = $_POST['cod_modelo'];
$nome = $_POST['nome'];
$cod_marca = $_POST['cod_marca'];

$query = "insert into modelo values ($cod_modelo, '$nome', $cod_marca)";

if (!$conn) {
    die("Erro de conexão: " . mysqli_connect_error());
}
echo "Conectado com sucesso! <br>";

if (mysqli_query($conn, $query)) {
    echo "Valores alterados com sucesso!";
} else {
    echo "Erro: ".$query."<br>".mysqli_error($conn);
}
mysqli_close($conn);  


?>