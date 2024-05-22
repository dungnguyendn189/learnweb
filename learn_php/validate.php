<!-- //validate form client : HTML ,JS
//validate form server : PHP -->

<?php
    if(!empty($_POST)){

        $errors =[];
        if(empty($_POST['fullname'])){
            $errors['fullname']['require'] ='Ho Va Ten La Bat Buoc';
        }elseif(strlen($_POST['fullname']) <= 5) {
            $errors['fullname']['min_name'] = 'Tối thiểu là 5 ký tự';
        }
        if(empty($_POST['email'])){
            $errors['email']['require'] ='Email phải nhập bắt buộc';
        }else {
            if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
                $errors['email']['invalid'] ='Email Không đúng định dạng';
            }
        }
        if(empty($errors)){
            echo 'Validate thành công';
        }else{
            echo 'Có bug';
        }
        echo '<pre>';
        print_r($errors);
        echo '</pre>';
    }

   
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="post" action="">
        <p>Họ Và Tên :
            <input type="text" name="fullname" placeholder="Họ Tên">
            <?php 
        echo  !empty($errors['fullname']['require']) ? '<p style="color:red">'.$errors['fullname']['require'].'</p>' : '';
        ?>
            <?php 
        echo  !empty($errors['fullname']['min_name']) ? $errors['fullname']['min_name'] : '';
        ?>
        </p>
        <p>Email :
            <input type="text" name="email" placeholder="Email">
            <?php 
        echo  !empty($errors['email']['require']) ? $errors['email']['require'] : '';
        ?>
            <?php 
        echo  !empty($errors['email']['invalid']) ? $errors['email']['invalid'] : '';
        ?>
        </p>
        <button type="submit">Submit</button>

    </form>
    <!-- <?php
     if(!empty($_POST)){
 
         echo '<pre>';
             print_r($_POST);
             echo '</pre>';
     }else{
         echo 'Không hợp lệ';
     }
?> -->
</body>

</html>