<?php

//Khai báo mảng

$arrayName = array('Dung Map', 'Pona','Tai Do','Nam Nac');

echo '<pre>';
print_r($arrayName);
echo '</pre>';

//Thêm Phần tử vào mảng

array_push($arrayName, 'Nguyen Van A');

echo '<pre>';
print_r($arrayName);
echo '</pre>';

echo '<pre>';
echo $arrayName[2];
if(!empty($arrayName))
{
    for($i=0;$i < count($arrayName);$i++){
        echo $arrayName[$i].'<br>';
    }
}

if(!empty($arrayName)){
    foreach($arrayName as $key => $value){
        echo $value.'<br>';
    }
}

//edit array

$arrayName[0] = 'Dung Map Dep Trai';

echo '<pre>';
print_r($arrayName);
echo '</pre>';

//xoa phần tử mảng

unset($arrayName[0]);
echo '<pre>';
print_r($arrayName);
echo '<pre>';

echo '<pre>';
print_r($arrayName);
echo '</pre>';