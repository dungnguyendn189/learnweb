<?php

session_start();

$_SESSION['username'] = 'Dũng Mập';
$_SESSION['user'] = 'marketing';
$_SESSION['login'] = 'dungnguyendn189';

unset($_SESSION['user']);

session_destroy();

echo '<pre>';
print_r($_SESSION['username']);
echo '</pre>';

echo '<pre>';
print_r($_SESSION['user']);
echo '</pre>';

echo '<pre>';
print_r($_SESSION['login']);
echo '</pre>';


unset($_SESSION['user']);