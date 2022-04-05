<?php
require_once('datab.php');

$cod_aluno=$_POST['cod_aluno'];
$nome_aluno=$_POST['nome_aluno'];
$endereco=$_POST['endereco'];
$telefone=$_POST['telefone'];
$sexo=$_POST['sexo'];
$dt_matricula=date( "Y-m-d", strtotime($_POST['dt_matricula']));
$dt_nascimento=date( "Y-m-d", strtotime($_POST['dt_nascimento']));
$altura=$_POST['altura'];
$peso=$_POST['peso'];

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
    $query="insert into aluno values ('$cod_aluno', '$nome_aluno', '$endereco', '$telefone', '$sexo',
                                      '$dt_matricula', '$dt_nascimento', '$altura', '$peso')";
    echo 'enviado';
}elseif(isset($_POST['bt_excluir'])){
    $query='delete from aluno where codigo = '.$cod_aluno;
    echo 'excluido';
}elseif(isset($_POST['bt_alterar'])){
        //Forma menos burra de concatenar (tem que usar aspas duplas)
        $query="update aluno set nome = '$nome_aluno' where codigo = $cod_aluno";
        echo '<br>update';
    }elseif(isset($_POST['bt_del_tudo'])){
        $query="delete from alunos";
        echo '<br>SOCORRO';
    }

    
if (mysqli_query($conn, $query)) {
    echo "Valores alterados com sucesso!";
} else {
    echo "Erro: ".$query."<br>".mysqli_error($conn);
}
mysqli_close($conn);  


?>