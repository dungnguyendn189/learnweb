<?php

$a = 10;

echo ($a < 0) ? "A nhỏ hơn không" : "A Lớn hơn không";

$bien1 = 'hienu';
$bien2 = 'hienu2';

define('_AGENCY', 'hienu');
define('_AGENCY2', 'hienu2');

echo $bien1;
var_dump(_AGENCY);
echo '<br>';

var_dump(_AGENCY2);

echo "Tôi là \"Nguyễn Đức Dũng\"";

$chuoi1 = 'Học | Lập | Trình | PHP';

echo '<br>';

$arrz = explode('|', $chuoi1);

var_dump($arrz);

$arrToString = implode(' ', $arrz);
echo '<br>';

echo $arrToString . '<br>';

// Không hỗ trợ tiếng việt

echo strlen($arrToString) . '<br>';

echo str_word_count($arrToString) . '<br>';


// Lặp lại chuỗi với đối số thứ 2
echo str_repeat($arrToString, 3).'<br>';

// str_replace($search , replace , string)

$chuoi4 = 'Học Lập Trình PHP';

echo str_replace(' ', '-', $chuoi4) .'<br>';

$chuoi5 = 'hoclaptrinh';

echo md5($chuoi5).'<br>';
echo sha1($chuoi5).'<br>';

//.'<br>'

//hàm htmlentities;

echo htmlentities('<p>Dũng Đẹp trai</p>');

$bien6 = htmlentities('<p>Dũng Đẹp trai</p>').'<br>';

// html_entity_decode chuỗi html thành html

echo html_entity_decode($bien6);

//substr

$chuoi7 = 'Hoc Lap Trinh Php';

$chuoimoi7 = substr($chuoi7,4,3);
echo '<br>'.$chuoimoi7 .'<br>';

$chuoi8 = 'Toi La Nguyn Duc Dung';
echo strstr($chuoi8,'D').'<br>';

// hàm strpos

$strpos = strpos($chuoi8,'La');

echo $strpos .'<br>';

//Hàm SUB StrRequest

echo substr_replace($chuoi8,'Nguyen' , 7,5).'<br>';

//Hàm strtolower
$chuoi9 = 'HIENnu';
echo strtolower($chuoi9).'<br>';
//hàm strtoupper
echo strtoupper($chuoi9).'<br>';
//ucfirst viết hoa chữ cái đầu tiên
echo ucfirst($chuoi9).'<br>';
//lcfirst ngược lại với ucfirst
echo lcfirst($chuoi8).'<br>';
//hàm ucwords
$chuoi10 = 'Tooi ten aalo';
echo ucwords($chuoi10).'<br>';
//hàm trim
$chuoi11 = '  alomen  ';
echo trim($chuoi11).'<br>';

// hàm json endcode và json_decode

$arr31= [1,2,3,4,5];
echo json_encode($arr31).'<br>';
$jsondecode = json_encode($arr31);
print_r(json_decode($jsondecode,true));