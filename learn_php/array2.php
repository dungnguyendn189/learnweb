<?php

$arrayName = array('Dung Map', 'Pona','Tai Do','Nam Nac');

$arrayTutorial = ['lang1' => 'html','lang2'=>'C#', 'lang3'=>'C++' ];

$arrAddress = [
    'address1' => [
        'name' => [
            'Ho'=>'Nguyen',
            'Ten' => 'Dung'
        ],
        'email' => 'Nguyenducdung.09t6a@gmail.com',
    ],
    'address2' => [
        'name' => 'Tưn',
        'email' => 'Tưnngu',
    ],
    'address3' => 'PHP',
];


echo $arrAddress['address1']['name']['Ho'].' '.$arrAddress['address1']['name']['Ten'].'<br>';


$arr23 = [
    ['mot','sohai','soba'],'PHP','JS'
];

if(!empty($arr23)){
    for($i=0;$i < count($arr23);$i++){
        if(is_array($arr23[$i])){
            for($j=0;$j < count($arr23[$i]);$j++){
                echo $arr23[$i][$j] .'<br>';
            }
        }
        echo $arr23[$i].'<br>';
    }
}
echo '<pre>';

print_r($arr23);
echo '</pre>';


if(!empty($arrAddress)) {
    foreach($arrAddress as $item){
        if(is_array($item)){
            foreach($item as $item1){
                if(is_array($item1)){
                    foreach($item1 as $item2){
                        echo $item2.'<br>';

                    }
                }else{
                    echo $item1.'<br>';
    
                }
            } 
        }else{
            echo $item.'<br>';
    
        }
    }
}


echo '<pre>';
print_r($arrAddress);
echo '</pre>';