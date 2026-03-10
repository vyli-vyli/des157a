(function() {

    "use strict"; 
    console.log("reading js"); 

    //basics 
    const audio = new Audio("music/backgroundmusic.mp3"); 
        audio.loop = true; 

    const start = document.querySelector("#startbutton"); 

    //repeating buttons 
    const help = document.querySelectorAll(".help");
    const music = document.querySelectorAll(".sound"); 
    const overlayback = document.querySelector("#overlayreturn"); 
    const sourcesback = document.querySelector("#sourcesreturn"); 
    const quit = document.querySelectorAll(".quit"); 
    const sources = document.querySelectorAll(".sourcesbutton");
    
    help.forEach(function(button) {
        button.addEventListener("click", function() {
            document.querySelector("#overlay").classList.remove("hidden");
        }); 
    }); 

    overlayback.addEventListener("click", function() {
        document.querySelector("#overlay").className = "hidden"; 
    }); 

    music.forEach(function(button) {
        button.addEventListener("click", function() {
            if (audio.paused) {
                audio.play(); 
            } else 
                audio.pause(); 
        }); 
    }); 

    sources.forEach(function(button) {
        button.addEventListener("click", function() {
            document.querySelector("#sourcespage").classList.remove("hidden");
        }); 
    }); 

    sourcesback.addEventListener("click", function() {
        document.querySelector("#sourcespage").className = "hidden"; 
    }); 

    quit.forEach(function(button) {
        button.addEventListener("click", function() {
            location.reload(); 
        }); 
    }); 
    
    start.addEventListener("click", function() {
        document.querySelector("#start").className = "hidden"; 
        document.querySelector("#game").classList.remove("hidden");
    }); 

    

    

}) (); 