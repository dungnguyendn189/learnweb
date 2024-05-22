<?php
//is_numeric() : Kiểm tra kiểu số nguyên và số thực;

$bien1 = 6;
$bien2 = 1.4;
var_dump(is_numeric($bien1));

// is_int Kiểm tra kiểu số nguyên 
echo '<br>';

var_dump(is_int($bien2));
echo '<br>';

var_dump(is_float($bien2));

// ép kiểu số nguyên

$bien3 = (int)$bien2;
echo '<br>';
var_dump(is_int($bien3));