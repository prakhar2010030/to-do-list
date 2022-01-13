//Add functionality
var add = document.getElementById("btn");

add.addEventListener("click",function(){

     var li = document.createElement("li");
     var note = document.getElementById("note").value;
     var t = document.createTextNode(note);
     li.appendChild(t);

     if(note=="")
     {
         alert("Enter your note!!!");
     }
     else
     {
         document.getElementById("ul").appendChild(li);
    
     }
        document.getElementById("note").value="";
        
        //creating a remove button

        var spa = document.createElement("span");
        var rem = document.createTextNode("remove") ;
        spa.className = "removebtn";
        spa.appendChild(rem);
        li.appendChild(spa);
        
        //delete functionality
        let remove = document.getElementsByTagName("span");
        let l = remove.length;
      for(var i = 0; i < l; i++)
{
    remove[i].onclick = function()
     {
        var del = this.parentElement;
        del.style.display ="none";
     }      
}
});
