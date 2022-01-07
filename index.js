 function Add(){
     var li=document.createElement("li");
     var note=document.getElementById("note").value;
     var t=document.createTextNode(note);
     li.appendChild(t);
     if(note==""){
         alert("Enter your note!!!");
     }
     else{
         document.getElementById("ul").appendChild(li);
    
        }
        document.getElementById("note").value="";
        
        var span = document.createElement("SPAN");
        var rem=document.createTextNode("remove") ;
        span.className="removebtn";
        span.appendChild(rem);
        li.appendChild(span);
        
}
remove.addEvent
