<?php
function makeTotal ($a, $b) {
    return $a + $b .'<br>';
}

echo makeTotal(3,4);
echo makeTotal(4,5);

if( 
!function_exists('makeTotal'))
{
    function makeTotal ($a, $b) {
        echo 'Hàm Này được chấp nhận';
        return $a + $b .'<br>';
    }
}else{
    echo  'Hàm Này đã tồn tại rồi';
}