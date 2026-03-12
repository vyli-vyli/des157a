(function() {

    "use strict"; 
    console.log("reading js"); 

    //audio 
    const backgroundmusic = new Audio("music/backgroundmusic.mp3"); 
        backgroundmusic.loop = true; 

    const soundfx= new Audio("music/soundeffect.mp3"); 

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
            if (backgroundmusic.paused) {
                backgroundmusic.play(); 
            } else 
                backgroundmusic.pause(); 
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

    //game data 
    const gameData = {
        dice: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"], 
        players: ["player 1", "player 2"], 
        score: [100, 100], 
        roll1: 0, 
        roll2: 0, 
        rollSum: 0, 
        index: 0, 
        gameEnd: 1
    }; 

    //game mechanics 
    const start = document.querySelector("#startbutton"); 

    start.addEventListener("click", function() {
        document.querySelector("#start").className = "hidden"; 
        document.querySelector("#game").classList.remove("hidden");

        gameData.index = Math.round(Math.random()); 
    }); 

    const rollButton = document.querySelector("#roll"); 
    rollButton.addEventListener("click", function() {
            soundfx.currentTime = 0;
            soundfx.play(); 
            throwDice(); 
    }); 

    const diceArea = document.querySelector("#dice"); 

    function throwDice() {

        //dice roll 
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; 
        gameData.roll2 = Math.floor(Math.random() * 6) + 1; 

        diceArea.innerHTML = `<p>${gameData.players[gameData.index]} rolled...</p>`; 
        diceArea.innerHTML += `
        <div id="diceimg">
            <img src="images/${gameData.dice[gameData.roll1 - 1]}">
            <img src="images/${gameData.dice[gameData.roll2 - 1]}">
        </div>`; 

        gameData.rollSum = gameData.roll1 + gameData.roll2; 

        //roll conditions 
        if (gameData.rollSum === 2) {

            diceArea.innerHTML += `<p>Snake eyes! Your opponent's critter is healed to full health!</p>`; 
            gameData.score[gameData.index] = 100; 
            switchPlayer(); 
            showCurrentScore();

        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            
            diceArea.innerHTML += `<p>Sorry, one of your rolls was a 1! Your turn is negated... 0 dmg! </p>`; 
            showCurrentScore(); 
            switchPlayer(); 

        } else {
            gameData.score[gameData.index] = gameData.score[gameData.index] - gameData.rollSum; 
            diceArea.innerHTML += `<p>-${gameData.rollSum} HP!</p>`
            showCurrentScore(); 
            checkWinningCondition(); 
            switchPlayer(); 
        }; 

    }; 

    function switchPlayer() {
        gameData.index ? (gameData.index = 0) : (gameData.index = 1); 
    }

    function showCurrentScore() {
        document.querySelector("#score").innerHTML = `<h3>HP: ${gameData.score[1]}</h3><h3>HP: ${gameData.score[0]}</h3>`; 
    }; 

    function checkWinningCondition() {
        if (gameData.score[gameData.index] < gameData.gameEnd) {
            document.querySelector("#game").className = "hidden"; 
            document.querySelector("#win").classList.remove("hidden");

            document.querySelector("#winner").innerHTML = 
            `<h3>${gameData.players[gameData.index]} wins!</h3>`; 

        } else {
            showCurrentScore(); 
        }; 
    }; 
    document.querySelector("#again").addEventListener("click", function() {
        location.reload(); 
    });  

}) (); 