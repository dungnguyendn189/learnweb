<?php

$i  =0 ;

while($i <= 10) {
    echo $i .'<br>';
    $i++;
    if($i == 5) {
        continue;
    }
}