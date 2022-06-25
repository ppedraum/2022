<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../styles.css">
    <?php
    require_once('../php_stuff/datab.php');

    $inst = mysqli_query($conn, 'select nome_fantasia, id from ONG');

    ?>

    <script type="text/javascript" src="../scripts/pg_publicacoes.js"></script>
</head>
<body>

    <header class='header' >
        <p class='txt_title' ><a href="../../menu.php"> pONG </a>- Gerenciar Publicações...</p>
        <div id="profile">
            <img src="../images/satc.jpg" class='logo_ong' alt="logo da ONG">
            <p class='txt_default' >SATC</p>
            <a href="#"><p>Gerenciar perfil...</p></a>
        </div>
        
    </header>

    <div id='sct_ger_publicacoes' class='flexed' >
        <form method='get'>
            <div id='sct_txt_pesquisa'>
                <input type="text" name='txt_pesquisar_publicacoes' id='txt_pesquisar_publicacoes' placeholder="Pesquisar publicação..." >
                <input type="submit" value="Pesquisar" name='bt_pesquisar_publicacao' id='bt_pesquisar_publicacao'>
            </div>

            <div id='sct_filtros_pesquisa' class='filtros'>

                <div id='filtro_tipo' class='div_filtros' >

                    <label for="ch_filtro_tipo">Tipo</label>
                    <input type="checkbox" name="ch_filtro_tipo" id="ch_filtro_tipo" onclick="isFiltroChecked( this['id'], 'sel_tipo_publicacao')">

                    <select name="sel_tipo_publicacao" id="sel_tipo_publicacao" hidden>

                        <option value="PUBLICACAO">PUBLICAÇÃO</option>
                        <option value="REQUISICAO">REQUISIÇÃO</option>
                        <option value="EVENTO">EVENTO</option>

                    </select>

                </div>
                <div id='filtro_data' class='div_filtros'">

                    <label for="ch_filtro_data">Data</label>
                    <input type="checkbox" name="ch_filtro_data" id="ch_filtro_data" onclick="isFiltroChecked('ch_filtro_data', 'dt_publicacao')">
                    <input type="date" name="dt_publicacao" id="dt_publicacao" hidden><br>

                    
                </div>
            </div>
            
        </form>
        <a href="pg_add_publicacao.php"><button><p class='bt_text' >Adicionar Publicação...</p></button></a>
    </div>
    <div id='sct_view_publicacoes'>

        <?php
            
            if(!isset($_GET['bt_pesquisar_publicacao'])){
                $query = mysqli_query($conn, "select * from Publicacao order by datetime_publicacao desc");
                
                while($row = $query->fetch_assoc()){

                    echo "<div name='publi-".$row['id']."' id='publi-".$row['id']."' class='publi_item' >
                    <div>".$row['titulo']."</div><div>".$row['datetime_publicacao']."</div></div><br>";
                }
            }
            else{
                $txt_titulo = $_GET['txt_pesquisar_publicacoes'];
                $query = "select * from Publicacao where titulo like '%$txt_titulo%' ";
                $ch_filtro_tipo = isset($_GET['ch_filtro_tipo']) ? true : false ;
                $ch_filtro_data = isset($_GET['ch_filtro_data']) ? true : false ;
                
                $sel_tipo_publicacao = $_GET['sel_tipo_publicacao'];
                $dt_publicacao = $_GET['dt_publicacao'];

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
                    echo "<div name='publi-".$row['id']."' id='publi-".$row['id']."' class='publi_item' >
                    <p>".$row['titulo']."</p><p>".$row['datetime_publicacao']."</p></div><br>";
                }
            }
            
            
        ?>
    </div>



    <script>keyBindAll()</script>
</body>
</html>