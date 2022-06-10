
<?php

date_default_timezone_set('America/Sao_Paulo');

require_once ('datab.php');

$id_ong = 1;

$titulo = $_POST['txt_titulo'];
$descricao = $_POST['txt_descricao'];

$rd_tipo_publicacao = $_POST['rd_tipo_publicacao'];
$datetime_atual = date("Y-m-d H:i:s");

$query = '';

if (!$conn) {
    die("Erro de conexão: " . mysqli_connect_error());
}
echo "Conectado com sucesso! <br>";



if($rd_tipo_publicacao == 'publicacao'){
    $query = "insert into Publicacao values (
        $titulo,
        $descricao,
        0,
        0,
        'publicacao',
        $datetime_atual,
        $id_ong,
        '',
        ''
    )";

}



/* $query = "";


if (mysqli_query($conn, $query)) {
    echo "Valores alterados com sucesso!";
} else {
    echo "Erro: ".$query."<br>".mysqli_error($conn);
} */
mysqli_close($conn); 

?>

