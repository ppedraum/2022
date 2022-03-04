<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ex2</title>
</head>
<body>
    <form method='post'>
        <h3>
        3) Faça um script que peça a temperatura em graus Farenheit, transforme e mostre a temperatura<br>
         em graus Celsius.    C = (5 * (F-32) / 9).
        </h3>
        Digite a temperatura em ºK:<input type='text' name='kelvin'><br>
        <input type="submit" name='submit'><br><br><br>
    </form>
<?php
$kelvin=$_POST['kelvin'];
$celsius=5*($kelvin-32)/9;
echo 'A temperatura em ºC é: '.number_format($celsius, 2).'ºC'

?>
</body>
</html>