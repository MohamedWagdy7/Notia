// Add Note Button Handling
document.getElementById("addNote").onclick=function(){
    var title = prompt("Enter the title");
    if(title.length!=0){
        var note = prompt("Enter Your note");
    }
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200 && this.responseText == 'flase'){
            window.location.href = "index.html";
        }
    }
    req.open("GET",`main.php?title=${title}&note=${note}`)
    req.send();
}

// Read Notes Button Handling
document.getElementById("readNotes").onclick = function (){
    window.location.href = "read.html";
}

window.onload = function(){
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 && this.responseText != 'true'){
            window.location.href = "index.html";
        }
    }
    xml.open("POST","login.php");
    xml.send();
}