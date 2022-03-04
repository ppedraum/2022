<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ex2</title>
</head>
<body>
    <form method='post'>
        <h3>
        Escreva um script php que leia nome aluno e três números nas variáveis Val1, Val2 e Val3, calcule<br>
        a média na variável media e exiba para o usuário o resultado nome e média final.
        </h3>
        Digite seu nome:<input type='text' name='nome'><br>
        Digite 3 números: 
        <input type="text" name='val1' size=2>
        <input type="text" name='val2' size=2>
        <input type="text" name='val3' size=2><br>
        <input type="submit" name='submit'><br><br><br>
    </form>
<?php

$nome=$_POST['nome'];
$val1=$_POST['val1'];
$val2=$_POST['val2'];
$val3=$_POST['val3'];

echo 'Olá, '.$nome.'! <br>';
echo number_format(($val1+$val2+$val3)/3, 2);

?>
</body>
</html>