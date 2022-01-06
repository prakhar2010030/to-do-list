 function Add(){
     var note=document.getElementById("note").value;
     if(note==""){
         alert("Enter your note!!!");
     }
     else{
         var li=document.createElement("li");
        var t=document.createTextNode(note);
         li.appendChild(t);
        }
        document.getElementById("ul").appendChild(li);
       
        
}
