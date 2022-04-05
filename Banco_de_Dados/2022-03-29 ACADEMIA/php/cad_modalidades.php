<?php
require_once('datab.php');

$cod_modalidade=$_POST['cod_modalidade'];
$nome_modalidade=$_POST['nome_modalidade'];



/* function connect($metodo, $tabela, array $valores){
    
} */

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Erro de conexão: " . mysqli_connect_error());
}
echo "Conectado com sucesso! <br>";
    
// Query baseada no botão apertado
if(isset($_POST['bt_enviar'])){
    $query="insert into modalidade values ('$cod_modalidade', '$nome_modalidade')";
    echo 'enviado';
}elseif(isset($_POST['bt_excluir'])){
    $query='delete from modalidade where codigo = '.$cod_modalidade;
    echo 'excluido';
}
/* elseif(isset($_POST['bt_del_tudo'])){
    $query="delete from cursos";
    echo ' SOCORRO <br>';
} */

    
if (mysqli_query($conn, $query)) {
    echo "Valores alterados com sucesso!";
} else {
    echo "Erro: ".$query."<br>".mysqli_error($conn);
}
mysqli_close($conn);  


?>