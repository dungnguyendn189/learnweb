<?php
$arrayName = array('Dung Map', 'Pona','Tai Do','Nam Nac');

$arrayTutorial = ['lang1' => 'html','lang2'=>'C#', 'lang3'=>'C++' ];

echo count($arrayTutorial);

$arrNew = array_values($arrayTutorial);

echo '<pre>';

print_r($arrNew);
echo '</pre>';

$arrNew2 = array_keys($arrayTutorial);

echo '<pre>';
print_r($arrNew2);
echo '</pre>';

echo array_pop($arrNew);

//hàm arraypussh;

array_push($arrayName,'CR7','Ronaldo');

echo '<pre>';

print_r($arrayName);
echo '</pre>';

array_shift($arrayName);
echo '<pre>';

print_r($arrayName);
echo '</pre>';

//thêm phần tử vào đầu mảng

array_unshift($arrayName, 'Messi');

echo '<pre>';

print_r($arrayName);

echo '</pre>';

$inArr = in_array('CR7',$arrayName);
echo $inArr.'<br>';

echo array_search('CR7',$arrayName);

// array Slice

echo '<pre>';

print_r(array_slice($arrayName,1,2));

echo '</pre>';

// hầm array unit

$newArr3 = ['Degea','Degea','CR7','Messi','Bruno'];

$unitArr = array_unique($newArr3);

echo '<pre>';
print_r($unitArr);
echo '</pre>';

//hàm array_keyexcits

$arrKeyExists = array_key_exists('lang1' , $arrayTutorial);
var_dump($arrKeyExists);