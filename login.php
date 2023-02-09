<?php
if(isset($_COOKIE['password'])){
    echo 'true';
}else{
    $conn = new mysqli("127.0.0.1", "root", "", "users");
    $result = $conn->query("Select * from users where username='{$_POST['username']}' and password='{$_POST['password']}';")->fetch_all();
    if (count($result) != 0) {
        setcookie("user-id",$result[0][0]);
        $_SESSION['loged'] = true;
        echo $_SESSION['loged'];
        setcookie("password", rand(), time() + (30 * 24 * 60 * 60 * 1000),"/notia");
    }
}
?>