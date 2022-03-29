<?php
require_once('datab.php');

$cod_instrutor=$_POST['cod_instrutor'];
$nome_instrutor=$_POST['nome_instrutor'];
$dtnasc_instrutor=date( "Y-m-d", strtotime($_POST['dtnasc_instrutor']));
$titul_instrutor=$_POST['titul_instrutor'];
$sexo_instrutor=$_POST['sexo_instrutor'];



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
    $query="insert into instrutor values 
    ('$cod_instrutor', '$nome_instrutor', '$dtnasc_instrutor', '$titul_instrutor', '$sexo_instrutor')";
    echo 'enviado';
}elseif(isset($_POST['bt_excluir'])){
    $query='delete from instrutor where codigo = '.$cod_instrutor;
    echo 'excluido';
}
/* elseif(isset($_POST['bt_del_tudo'])){
    $query="delete from instrutor";
    echo ' SOCORRO <br>';
} */

    
if (mysqli_query($conn, $query)) {
    echo "Valores alterados com sucesso!";
} else {
    echo "Erro: ".$query."<br>".mysqli_error($conn);
}
mysqli_close($conn);  


?>