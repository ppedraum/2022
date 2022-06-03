<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Página inicial</title>
    <style>
        .flex{
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }
    </style>
    <?php
    require_once('../php/datab.php');
    
    $query_marca = "select * from marca";
    $marcas = mysqli_query($conn, $query_marca);

    $query_modelo = "select * from modelo";
    $modelos = mysqli_query($conn, $query_modelo);

    $query_categoria = "select * from categoria";
    $categorias = mysqli_query($conn, $query_categoria);
    ?>

</head>
<body>
    <div class='flex'>
        <div>
            <form action="../php/pesquisa.php" method="post">
                <div>
                    Pesquisar Carros
                    <input type="text" name="pesquisa" id='txt_pesquisa'>
                    
                    <select name="filtro_ger" id='sel_filtro'>
                        <option value="marca">marca</option>
                        <option value="modelo">modelo</option>
                        <option value="categoria">categoria</option>
                    </select>
                    
                </div>
                <h3>Ou...</h3>
                <div>
                    <select name='filtro_marca'>
                        <?php
                            if(mysqli_num_rows($marcas) == 0){
                                echo "<option value='null' selected='selected'>Selecione uma marca...</option>";
                            }else{
                                while($row = $marcas->fetch_assoc()){
                                    echo "<option value=".$row['nome'].">".$row['nome']."</option>";
                                }
                            }
                        
                        
                        ?>
                    </select>
                    <select name='filtro_modelo'>
                        <?php
                            $marca = $_POST['filtro_marca'];
                            echo $marca;
                            /* $query_modelo = "select * from modelo, marca 
                                             where marca.nome = '$marca'
                                             and modelo.codmarca = marca.codmarca"; */
                                             /* and categoria.nome = '$categoria' */
                                             /* and modelo.codcategoria = categoria.codcategoria */

                            /* $modelos = mysqli_query($conn, $query_modelo); */


                            if(mysqli_num_rows($modelos) == 0){
                                echo "<option value='null' selected='selected'>Selecione um modelo...</option>";
                            }else{
                                while($row = $modelos->fetch_assoc()){
                                    echo "<option value=".$row['nome'].">".$row['nome']."</option>";
                                }
                            }
                        
                        
                        ?>
                    </select>

                    <!--CATEGORIA JÁ LIGADA AO MODELO -->
                    <!-- <select name='filtro_categoria'>
                        <?php
                            /* if(mysqli_num_rows($categorias) == 0){
                                echo "<option value='null' selected='selected'>Selecione uma categoria...</option>";
                            }else{
                                while($row = $categorias->fetch_assoc()){
                                    echo "<option value=".$row['nome'].">".$row['nome']."</option>";
                                }
                            } */
                        
                        
                        ?>
                    </select> -->
                </div>
                <div>
                    <input type="submit" value="pesquisar" name="bt_pesquisar" id='bt_pesquisar'>
                </div>
        
            </form>
        </div>
        <div>
            <!-- CONECTAR: <a href="../html/login.html"><button>Login</button></a> -->
        </div>
    </div>
    
    
</body>
</html>