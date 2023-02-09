<?php
if (isset($_COOKIE['password'])&&isset($_COOKIE['user-id'])) {
    $conn = new mysqli("127.0.0.1", "root", "", "notes");
    $result = $conn->query("select * from user{$_COOKIE['user-id']}")->fetch_all();
    foreach($result as $i){
        $xml = new DOMDocument("1.0", "UTF-8");
        $xml->formatOutput = true;
        $root = $xml->createElement("div");
        $root->setAttributeNode(new DOMAttr("noteId", $i[0]));
        $title = $xml->createElement("h3", $i[1]);
        $noteContent = $xml->createElement("p", $i[2]);
        $root->appendChild($title);
        $root->appendChild($noteContent);
        $xml->appendChild($root);
        $xml->save('note.xml');
        $file = file_get_contents("note.xml");
        echo $file.'<br>';
        unlink('note.xml');
    }
}else{
    echo 'false';
}
?>