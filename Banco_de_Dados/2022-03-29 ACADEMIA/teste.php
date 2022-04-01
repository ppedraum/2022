<?php



function query_maker($query, $tipo, $tabela, $elementos, $valores, $pkey, $pkeyvalue){
    $query_set=array();
    foreach ($valores as $valor){
        if (gettype("$valor")=="string"){
            $valor=="'$valor'";
        }
    }
    $query_string=implode(",", $valores);
    /* foreach ($valores as $valor){
        switch(gettype($valor)){
            case "integer":
                if(end($valores)==$valor){
                    $query_string+=strval("$valor");
                    echo "$query_string<br>";
                }else{
                    $query_string+=strval("$valor, ");
                    echo "$query_string<br>";
                }
            break;
            default:
                echo "gay";
                break;
        }
    }
    //echo $query_string; */
    if ($tipo=="insert"){
        $query="insert into $tabela values($query_string)";
    }/* elseif($tipo=="update"){
        foreach ($valores as $valor){
            foreach($elementos as $el){
                array_push($query_set, "$el=$valor");
                
            }
        } */
        /* $query_set=implode(",", $query_set);
        $query_set+="where $pkey=$pkeyvalue"; */
        /* echo($query_set[4]); */
        /* $query="update $tabela set " */
    }
    return $query_string;
}

$array=array(1,2,3,4,"aosjdnaidbn");

query_maker($array, "update", "seila", array(1,2,3,4,5), array(5,4,3,2,1), "bunda", "bund" );

?>



