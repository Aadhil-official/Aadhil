function clic(){
    var x = document.getElementById("div");
    var y=document.getElementById("msm");
    if(y.style.display==="block" && x.style.display === "block"){
       x.style.display = "none";
       y.style.display="none";
       document.getElementById("uom").innerHTML="more information";
       
    }else
    {
       x.style.display = "block";
       y.style.display="block";
       document.getElementById("uom").innerHTML="If you haven't anything press again";
    }
}