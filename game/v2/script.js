(function() {

    "use strict"; 
    console.log("reading js"); 

    //start page 
    const help = document.querySelector(".help");
    const music = document.querySelector(".sound"); 
    const back = document.querySelector(".return"); 

    help.addEventListener("click", function() {
        document.querySelector("#overlay").className = "showing";

        back.addEventListener("click", function() {
            document.querySelector("#overlay").className = "hidden";
        }); 
    }); 

    document.querySelector("#startbutton").addEventListener("click", function() {
        document.querySelector("#start").className = "hidden"; 
        document.querySelector("#game").className = "showing";
    }); 
}) (); 