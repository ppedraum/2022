<?php
require_once('datab.php');

$cod_usuario=$_POST['cod_usuario'];
$nome_usuario=$_POST['nome_usuario'];
$login_usuario=$_POST['login_usuario'];
$senha_usuario=$_POST['senha_usuario'];


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
    $query="insert into usuario values ('$cod_usuario', '$nome_usuario', '$login_usuario', '$senha_usuario')";
    echo 'enviado';
}elseif(isset($_POST['bt_excluir'])){
    $query='delete from usuario where codigo = '.$cod_usuario;
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