<?php
if (isset($_COOKIE['user-id'])) {
    $conn = new mysqli("127.0.0.1", "root", "", "notes");
    $conn->query("create table if not exists user{$_COOKIE['user-id']}(id INT,title VARCHAR(30),note TEXT)");
    $count = count($conn->query("select * from user{$_COOKIE['user-id']}")->fetch_all());
    if (isset($_GET['title']) && isset($_GET['note'])) {
        $conn->query("insert into user{$_COOKIE['user-id']}(id,title,note) values({$count},'{$_GET['title']}','{$_GET['note']}');");
    }
}else{
    echo 'false';
}
?>