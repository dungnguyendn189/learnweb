<?php
setcookie('user','Hoc lap trinh php',time()+'86400','/learn_php','',false,true);


// echo $_COOKIE['user'];

//xoá cookie

setcookie('user','Hoc lap trinh php',time() - '60','/learn_php','',false,true);