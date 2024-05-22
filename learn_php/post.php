<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="post" action="">
        <input type="text" name="fullname" placeholder="Họ Tên">
        <input type="text" name="email" placeholder="Email">
        <button type="submit">Submit</button>
    </form>
    <?php
    if(!empty($_POST)){

        echo '<pre>';
            print_r($_POST);
            echo '</pre>';
            echo $_POST['fullname'];
    }else{
        echo 'Không hợp lệ';
    }
?>
</body>

</html>