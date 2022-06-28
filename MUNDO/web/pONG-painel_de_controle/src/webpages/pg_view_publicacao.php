<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste view</title>
    <?php
    require_once('../php_stuff/datab.php');
    $url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] 
                === 'on' ? "https" : "http") . 
                "://" . $_SERVER['HTTP_HOST'] . 
                $_SERVER['REQUEST_URI'];

    $params = parse_url($url);
    parse_str($url['query'], $params);
    echo($params['n']);
    ?>

</head>
<body>
</body>
</html>