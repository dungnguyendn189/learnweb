<?php
date_default_timezone_set('Asia/Ho_Chi_Minh');
$date = date('Y:m:d H:i:s');
echo $date;
echo '<br>';
echo date_default_timezone_get();
echo '<br>';
echo time();
echo '<br>';

//str to time
echo strtotime('now').'<br>';
echo strtotime('21 March 1996').'<br>';
echo strtotime('Next Monday').'<br>';