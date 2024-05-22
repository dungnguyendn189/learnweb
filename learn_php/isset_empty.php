<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);

$bien1 = 'DungMap';

if(isset($bien1)){
    echo $bien1;
}

//empty

echo empty($bien2);