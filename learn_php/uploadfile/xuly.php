<?php
if(!empty($_SERVER['REQUEST_METHOD'])){
    echo '<pre>';
    print_r($_FILES);
    echo '</pre>';
}

$result = move_uploaded_file($_FILES['dungupload']['tmp_name'],'C:\xampp\htdocs\learn_php\uploadfile\upload\uploads'.$_FILES['dungupload']['name']);
var_dump($result);