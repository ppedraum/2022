<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<header>
        <br><br>
        <p><a href="../../index.php"> pONG </a>- Adicionar Publicação...</p>
        <br><br>
    </header>
    <div style='display:flex;align-content:space-evenly;width:500px' id='sct_pesquisar_publicacoes'>
        <div style='padding:20px;'>
            <input type="text" name='pesquisar_publicacoes' value='pesquisar...'><br>
            Filtrar por...
            <select name="filtro" id="">
                <option value="null">...</option>
            </select>
            <button name='add_filtros'>+</button>
        </div>
        <a href="pg_add_publicacao.php"><button style='width:100px;height:50px'>Adicionar Publicação...</button></a>
    </div>
    <div id='sct_view_publicacoes'>

        <div style='display:flex;padding:10px;align-items:center' id='publ_1066'>
            <p>04/05/2022</p><p> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>...</button>
        </div>
        <div style='display:flex;padding:10px;align-items:center' id='publ_1066'>
            <p>04/05/2022</p><p> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>...</button>
        </div>
        <div style='display:flex;padding:10px;align-items:center' id='publ_1066'>
            <p>04/05/2022</p><p> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>...</button>
        </div>
        
    </div>

</body>
</html>