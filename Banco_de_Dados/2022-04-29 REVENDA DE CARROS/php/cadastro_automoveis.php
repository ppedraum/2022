<?php
require_once('datab.php');

$descricao = $_POST['descricao'];
$cod_modelo = $_POST['cod_modelo'];
$cod_categoria = $_POST['cod_categoria'];
$ano = $_POST['ano'];
$cor = $_POST['cor'];
$placa = $_POST['placa'];
$localizacao = $_POST['localizacao'];
$tipo_combustivel = $_POST['tipo_combustivel'];
$opcionais = $_POST['opcionais'];
$valor = $_POST['valor'];


//setando o diretório pras fotos e criando uma pasta 'fotos' caso ela não exista
$pasta_dir = "../fotos/";
if(!file_exists($pasta_dir)){
    mkdir($pasta_dir);
}

//--------------------------------------------------//
$foto1 = $_FILES['foto1'];

if($foto1 != null)
    $foto1_path = $pasta_dir.$foto1["name"];
else
    $foto1_path = 'no_photo';

move_uploaded_file($foto1["tmp_name"],$foto1_path);

//----------------------------------------------------//

//--------------------------------------------------//
$foto2 = $_FILES['foto2'];

if($foto2 != null)
    $foto2_path = $pasta_dir.$foto2["name"];
else
    $foto2_path = 'no_photo';


 move_uploaded_file($foto2["tmp_name"],$foto2_path);

//----------------------------------------------------//


$query = "insert into automovel(descricao, codmodelo, codcategoria, ano, cor, placa, localizacao,
                                tipocombustivel, opcionais, valor, foto1, foto2) 
                                values (
                                    '$descricao',
                                    $cod_modelo,
                                    $cod_categoria,
                                    $ano,
                                    '$cor',
                                    '$placa', 
                                    '$localizacao',
                                    '$tipo_combustivel',
                                    '$opcionais',
                                    '$valor',
                                    '$foto1_path',
                                    '$foto2_path'
                                )";

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