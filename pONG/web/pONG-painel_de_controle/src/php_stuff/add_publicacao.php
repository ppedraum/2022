
<?php

date_default_timezone_set('America/Sao_Paulo');

require_once ('datab.php');

$id_ong = 1;

$titulo = $_POST['txt_titulo'];
$descricao = $_POST['txt_descricao'];

$rd_tipo_publicacao = $_POST['rd_tipo_publicacao'];
$datetime_atual = date("Y-m-d H:i:s");

$query_publicacao = '';

if (!$conn) {
    die("Erro de conexão: " . mysqli_connect_error());
}
echo "Conectado com sucesso! <br>";


if(isset($_POST['bt_submit_publicacao'])){

    if($rd_tipo_publicacao == 'publicacao'){
        $query_publicacao = "insert into Publicacao (
            titulo, descricao, qtd_likes, qtd_compartilhamentos, datetime_publicacao,
            tipo_publicacao, id_ONG
        ) values (
            '$titulo',
            '$descricao',
            0,
            0,
            '$datetime_atual',
            'PUBLICACAO',
            $id_ong
        )";

    }elseif($rd_tipo_publicacao == 'evento'){

        $endereco_evento = $_POST['txt_endereco_evento'];
        $cidade_evento = $_POST['txt_cidade_evento'];
        $estado_evento = $_POST['sel_estado_evento'];
        $date_inicio_evento = $_POST['date_inicio_evento'];
        $date_fim_evento = $_POST['date_fim_evento'];
        $hor_inicio_evento = $_POST['time_inicio_evento'];
        $hor_fim_evento = $_POST['time_fim_evento'];


        $blob_evento = '';

        if(validateImage($_FILES['blob_evento'])){

            $blob_evento = addslashes(file_get_contents($_FILES['blob_evento']['tmp_name']));
            echo('Arquivo suportado!');
        }else{
            echo('Arquivo não suportado!');
        }


        $id_ONG = 1;
        $id_tipo_evento = $_POST['sel_tipo_evento'];

        $query_evento = "insert into Evento 
        (endereco, cidade, UF, datetime_inicio, datetime_fim,
        qtd_inscricoes, foto, id_ONG, id_tipo_evento )

        values (
            '$endereco_evento',
            '$cidade_evento',
            '$estado_evento',
            '$date_inicio_evento $hor_inicio_evento ',
            '$date_fim_evento $hor_fim_evento',
            0,
            $blob_evento,
            $id_ONG,
            $id_tipo_evento
        ) ";

        if (mysqli_query($conn, $query_evento)) {
            echo "Evento criado!";
        } else {
            echo "Erro: ".$query_evento."<br>".mysqli_error($conn);
        }

        $id_evento = $conn->insert_id;

        $query_publicacao = "insert into Publicacao (
            titulo, descricao, qtd_likes, qtd_compartilhamentos, datetime_publicacao,
            tipo_publicacao, id_ONG, id_evento
        ) values (
            $titulo,
            $descricao,
            0,
            0,
            $datetime_atual,
            'EVENTO',
            $id_ONG,
            $id_evento
        )";
        
    }elseif($rd_tipo_publicacao == 'requisicao'){
        echo('requisição');
    }
}


if (mysqli_query($conn, $query_publicacao)) {
    echo "Valores alterados com sucesso!";
} else {
    echo "Erro: ".$query_publicacao."<br>".mysqli_error($conn);
}
mysqli_close($conn); 

function validateImage($img){
    $isallowed = false;
    $allowed_types = array('image/jpg', 'image/jpeg', 'image/png');
    if(in_array($img['type'], $allowed_types)){
        $isallowed = true;
    }
    return $isallowed;
}


?>

