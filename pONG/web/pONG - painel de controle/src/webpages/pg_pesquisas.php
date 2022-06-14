<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <title>Pesquisa - pONG</title>

    <?php
    
    require_once('../php_stuff/datab.php');

    $ongs = mysqli_query($conn, 'select * from ONG')


    ?>
</head>
<body>
    <form method="post">

        ONG
        <select name="sel_ong" id="">
            <?php
            if(mysqli_num_rows($ongs) == 0){
                echo "<option value='null' selected='selected'>Selecione...</option>";
            }else{
                while($row = $ongs->fetch_assoc()){
                echo "<option value=".$row['id'].">".$row['nome_fantasia']."</option>";
                }
            }
            ?>
        </select><br>
        Data de Publicação
        <input type="date" name="data_publicacao" id=""><br>
        <input type="submit" name = 'bt_form' value="bt_enviar">
        <?php
        
        if($_POST['bt_form'] = 'bt_enviar'){
            $query = "select * from publicacao where id_ong = ".$_POST['sel_ong']." and datetime_publicacao > '"
            .$_POST['data_publicacao']."'";
    
            $publicacoes = mysqli_query($conn, $query);
    
            if($publicacoes){
                while($row = $publicacoes->fetch_assoc()){
                    echo "<div style='padding: 20px;'>";
                    echo "<br> <b>titulo = </b>".$row['titulo'] ;
                    echo '<br> <b>descrição = </b>'.$row['descricao'];
                    echo "</div>";
                    }
            }
        }

        ?>
    </form>
</body>
</html>