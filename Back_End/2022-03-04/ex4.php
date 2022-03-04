<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ex2</title>
</head>
<body>
    <form method='post'>
        <h3>
        4) Tendo como dado de entrada a altura (h) de uma pessoa, construa um script que calcule seu<br>
        peso ideal, utilizando as seguintes fórmulas:<br>
        Para homens: (72.7*h) - 58<br>
        Para mulheres: (62.1*h) - 44.7
        </h3>
        Digite a sua altura:<input type='text' name='h'><br>
        Selecione seu gênero:<select name="sel_genero" id="">
            <option value="masc">M</option>
            <option value="fem">F</option>
        </select><br>
        <input type="submit" name='submit'><br><br><br>
    </form>
<?php


?>
</body>
</html>