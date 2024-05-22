<?php
    define('_DUNG',10);
    echo _DUNG;

    //khai báo kiểu số thực
$bien4 = 12.5;
$bien4 = (float) $bien4;
var_dump($bien4);

echo is_float($bien4);

$bien6 = '1,2,3';

$bien6 = (array)$bien6;

var_dump($bien6);

echo is_array($bien6);

// khai báo kiểu null biên 7

echo '<br>';
$bien7 = null;

var_dump($bien7);

echo is_null($bien7) .'<br>';

// Hàm mã hoá MD5

