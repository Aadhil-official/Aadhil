function clic(){
    var x = document.getElementById("div");
    if(x.style.display === "block"){
       x.style.display = "none"
       document.getElementById("uom").innerHTML="more information";
       
    }else
    {
       x.style.display = "block"
       document.getElementById("uom").innerHTML="If you haven't anything press again";
    }
}