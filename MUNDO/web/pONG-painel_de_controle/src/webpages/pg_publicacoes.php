<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <?php
    require_once('../php_stuff/datab.php');

    $inst = mysqli_query($conn, 'select nome_fantasia, id from ONG');

    ?>

    <script type="text/javascript" src="../scripts/pg_publicacoes.js"></script>
</head>
<body>
    <header>
        <br><br>
        <p><a href="../../menu.php"> pONG </a>- Adicionar Publicação...</p>
        <br><br>
    </header>

    <div id='sct_ger_publicacoes' style="display:flex;" >
        <form method='post'>
            <div id='sct_txt_pesquisa'>
                Pesquisar Publicações <input type="text" name='txt_pesquisar_publicacoes' id='txt_pesquisar_publicacoes'>
                <input type="submit" value="Pesquisar" name='bt_pesquisar_publicacao' id='bt_pesquisar_publicacao'>
            </div>

            <div id='sct_filtros_pesquisa' style='display:flex;align-items:center;'>

                <p style='padding-right:20px;' >Filtrar Por...</p>

                <div id='filtro_tipo' style="display:flex;align-items:center;padding-right: 20px;" >

                    <label for="ch_filtro_tipo">Tipo</label>
                    <input type="checkbox" name="ch_filtro_tipo" id="ch_filtro_tipo" onclick="isFiltroChecked( this['id'], 'sel_tipo_publicacao')">

                    <select name="sel_tipo_publicacao" id="sel_tipo_publicacao" hidden>

                        <option value="PUBLICACAO">PUBLICAÇÃO</option>
                        <option value="REQUISICAO">REQUISIÇÃO</option>
                        <option value="EVENTO">EVENTO</option>

                    </select>

                </div>
                <div id='filtro_data' style="display:flex;align-items:center;padding-right: 20px;">

                    <div>

                        <label for="ch_filtro_data">Data</label>
                        <input type="checkbox" name="ch_filtro_data" id="ch_filtro_data" onclick="isFiltroChecked('ch_filtro_data', 'dt_publicacao')">
                        Depois de...<input type="date" name="dt_publicacao" id="dt_publicacao" hidden><br>

                    </div>

                    
                </div>
            </div>
            
        </form>
        <a href="pg_add_publicacao.php"><button style='width:100px;height:50px'>Adicionar Publicação...</button></a>
    </div>
    <div id='sct_view_publicacoes' style='padding-top:20px;'>

        <?php
            
            if(!isset($_POST['bt_pesquisar_publicacao'])){
                $query = mysqli_query($conn, "select * from Publicacao order by datetime_publicacao desc");
                
                while($row = $query->fetch_assoc()){
                    echo "<div name='publi-".$row['id']."' id='publi".$row['id']."'>".$row['titulo']." - ".$row['datetime_publicacao']."</div><br>";
                }
            }
            else{
                $txt_titulo = $_POST['txt_pesquisar_publicacoes'];
                $query = "select * from Publicacao where titulo like '%$txt_titulo%' ";
                $ch_filtro_tipo = isset($_POST['ch_filtro_tipo']) ? true : false ;
                $ch_filtro_data = isset($_POST['ch_filtro_data']) ? true : false ;
                
                $sel_tipo_publicacao = $_POST['sel_tipo_publicacao'];
                $dt_publicacao = $_POST['dt_publicacao'];

                if($dt_publicacao == ''){
                    $dt_publicacao = date('0000-00-00');
                }

                if($ch_filtro_tipo and $ch_filtro_data){
                    $query .= "and tipo_publicacao like '$sel_tipo_publicacao' and datetime_publicacao > '$dt_publicacao'";
            
                }
                elseif($ch_filtro_tipo){
                    $query .= "and tipo_publicacao like '$sel_tipo_publicacao'";
                }
                elseif($ch_filtro_data){
                    $query .= "and datetime_publicacao > '$dt_publicacao'";
                }
                $query .= "order by datetime_publicacao DESC";
                $query = mysqli_query($conn, $query);
            
                while($row = $query->fetch_assoc()){
                    echo "<div name='publi-".$row['id']."' id='publi-".$row['id']."'>".$row['titulo']." - ".$row['datetime_publicacao']."</div><br>";
                }
            }
            
            
        ?>
    </div>



    <script>keyBindAll()</script>
</body>
</html>