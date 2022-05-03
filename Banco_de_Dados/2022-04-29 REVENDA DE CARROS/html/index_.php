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
            flex-wrap: wrap;
        }
    </style>
    <?php require_once('../php/pesquisa.php')?>
</head>
<body>
    <div class='flex'>
        <div>
            <form action="../php/pesquisa.php" method="post">
                Pesquisar Carros
                <input type="text" name="pesquisa" id='txt_pesquisa'>
                <input type="submit" value="pesquisar" name="bt_pesquisar" id='bt_pesquisar'>
                <select name="filtro" id='sel_filtro'>
                    <option value="marca">marca</option>
                    <option value="modelo">modelo</option>
                    <option value="categoria">categoria</option>
                </select>
                Usar Filtros: <input type="checkbox" name="ch_filtros" value="true">
        
            </form>
        </div>
        <div>
            CONECTAR: <a href="../html/login.html"><button>Login</button></a>
        </div>
    </div>
    <div class='flex'>
        <select name="sel_marcas" id="">
            <?php
            
            
            ?>
        </select>
    </div>
    
    
</body>
</html>