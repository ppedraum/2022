<?php
require_once('datab.php');

$cod_usuario=$_POST['cod_usuario'];
$nome_usuario=$_POST['nome_usuario'];
$login_usuario=$_POST['login_usuario'];
$senha_usuario=$_POST['senha_usuario'];
$form=$_POST['formularios'];
$query='';

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
    

if($form=='cad_usuarios'){
    // Query baseada no botão apertado
    if(isset($_POST['bt_enviar'])){
        $query="insert into usuario values ('$cod_usuario', '$nome_usuario', '$login_usuario', '$senha_usuario')";
        echo 'enviado';
    }elseif(isset($_POST['bt_excluir'])){
        $query="delete from usuario where codigo = $cod_usuario";
        echo '<br>excluido';
    }elseif(isset($_POST['bt_alterar'])){
        //Forma menos burra de concatenar (tem que usar aspas duplas)
        $query="update usuario set login = '$login_usuario', senha = '$senha_usuario' where codigo = $cod_usuario";
        echo '<br>update';
    }elseif(isset($_POST['bt_del_tudo'])){
        $query="delete from cursos";
        echo '<br>SOCORRO';
    }
}elseif($form=='cad_turmas'){
    if(isset($_POST['bt_enviar'])){
        $query="insert into usuario values ('$cod_usuario', '$nome_usuario', '$login_usuario', '$senha_usuario')";
        echo 'enviado';
    }elseif(isset($_POST['bt_excluir'])){
        $query='delete from usuario where codigo = '.$cod_usuario;
        echo 'excluido';
    }
}elseif($form=='cad_modalidades'){
    if(isset($_POST['bt_enviar'])){
        $query="insert into usuario values ('$cod_usuario', '$nome_usuario', '$login_usuario', '$senha_usuario')";
        echo 'enviado';
    }elseif(isset($_POST['bt_excluir'])){
        $query='delete from usuario where codigo = '.$cod_usuario;
        echo 'excluido';
    }
}elseif($form=='cad_instrutores'){
    if(isset($_POST['bt_enviar'])){
        $query="insert into instrutor values 
        ('$cod_instrutor', '$nome_instrutor', '$dtnasc_instrutor', '$titul_instrutor', '$sexo_instrutor')";
        echo 'enviado';
    }elseif(isset($_POST['bt_excluir'])){
        $query='delete from instrutor where codigo = '.$cod_instrutor;
        echo 'excluido';
    }
}elseif($form=='cad_alunos'){
    if(isset($_POST['bt_enviar'])){
        $query="insert into usuario values ('$cod_usuario', '$nome_usuario', '$login_usuario', '$senha_usuario')";
        echo 'enviado';
    }elseif(isset($_POST['bt_excluir'])){
        $query='delete from usuario where codigo = '.$cod_usuario;
        echo 'excluido';
    }
}else{
    echo 'Cadastro não reconhecido!'
}



function query_maker($tabela, $valores){
    $query_string=''
    foreach ($valores as $valor){
        switch(gettype($valor)){
            case "integer":
                if(end($valores)==$valor){
                    echo "shit"
                }
        }
    }
    "insert into $tabela values ($valores)"
}

    
if (mysqli_query($conn, $query)) {
    echo "Valores alterados com sucesso!";
} else {
    echo "Erro: ".$query."<br>".mysqli_error($conn);
}
mysqli_close($conn);  


?>