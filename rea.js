// read notes
window.onload = function(){
    var read = new XMLHttpRequest();
    read.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            if(this.responseText=='false'){
                window.location.href = "index.html";
            }else{
                document.getElementById("notes").innerHTML = this.response;
            }
        }
    }
    read.open("GET","read.php");
    read.send();
}