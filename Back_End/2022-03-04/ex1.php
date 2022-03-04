<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exercícios</title>
</head>
<body>
    <form action="" method="post">
        <h3>
        - Crie um script php que receba um número digitado pelo usuário e verifique se esse valor é positivo,<br> 
        negativo ou igual a zero. A saída deve ser: "Valor Positivo", "Valor Negativo" ou "Igual a Zero".
        </h3>

        Digite seu número:<input type="text" name="numero"><br><br><br>
        <input type="submit" name='submit'><br><br><br>
    </form>

<?php

$valor=$_POST['numero'];
if($valor>0) echo 'Valor é Positivo';
elseif($valor==0) echo 'Valor é Zero';
elseif($valor<0) echo 'Valor é Menor que Zero';
else{}

?>


    

</body>
</html>