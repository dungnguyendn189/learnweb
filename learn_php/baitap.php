<?php
//bài 1 viết chươgn trình lấy 5 ký tự cuối của chuỗi là tiếng việt - tiếng việt không dấu

$str = 'Hoc Lap Trinh';

$newStr = substr($str, -5);

echo $newStr.'<br>';

$str2 = 'Học Lập trình';
$newStr2 = mb_substr($str2,-5,null,'UTF-8');
echo $newStr2.'<br>';

$strName = 'Nguyen Duc Dung';
$posSpace = strpos($strName, ' ');
echo $posSpace.'<br>';
echo substr($strName,6).'<br>';

$strName2 = 'Nguyễn Đức Dũng';
$posSpace2 = mb_strpos($strName2,' ',0,'UTF-8');
echo $posSpace2.'<br>';
$strLeng = mb_strlen($strName2,'UTF-8') - $posSpace2;
echo $strLeng.'<br>';
$subStrEnd = mb_substr($strName2,$posSpace2,$strLeng,'UTF-8');
echo $subStrEnd.'<br>';