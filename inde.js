// Check login page
function checkCred(){
    this.event.preventDefault();
    if(document.getElementById("email").value.length==0){
        document.getElementById("span-p").innerHTML = "<h2>Enter a valid username or email</h2>"
    }else if(document.getElementById("password").value.length==0){
        document.getElementById("span-p").innerHTML= "<h2>Enter a valid password</h2>";
    }else{
        var xml = new XMLHttpRequest();
        var data = new FormData();
        xml.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200 && this.responseText == 'true'){
                window.location.href = "main.html";
            }
        }
        data.set("username",document.getElementById("email").value)
        data.set("password",document.getElementById("password").value)
        xml.open("POST","login.php");
        xml.send(data);
    }
}
window.onload = function(){
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 && this.responseText == 'true'){
            window.location.href = "main.html";
        }
    }
    xml.open("POST","login.php");
    xml.send();
}