(function() {

    "use strict"; 

    document.querySelector("#start").addEventListener("click", function() {
        document.querySelector("#homepage").className = "hidden"; 
        document.querySelector("#madlibs-questions").classList.remove("hidden"); 
        document.querySelector("#background").src = "images/blanktemplate.png"
    }); 

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        const word1Data = document.querySelector("#input1").value.trim();
        const capitalizedWord1 = word1Data.charAt(0).toUpperCase() + word1Data.slice(1); 
        const word2Data = document.querySelector("#input2").value; 
        const word3Data= document.querySelector("#input3").value; 
        const word4Data = document.querySelector("#input4").value; 
        const word5Data = document.querySelector("#input5").value; 
        const word6Data = document.querySelector("#input6").value; 
        const word7Data = document.querySelector("#input7").value; 
        const word8Data = document.querySelector("#input8").value.trim(); 
        const capitalizedWord8 = word8Data.charAt(0).toUpperCase() + word8Data.slice(1); 
        const word9Data = document.querySelector("#input9").value; 
        const word10Data = document.querySelector("#input10").value; 
        const word11Data = document.querySelector("#input11").value; 
        const word12Data = document.querySelector("#input12").value; 

        let myText; 

        if (word1Data == "") {
            document.querySelector("#input1").focus(); 
        } else if (word2Data == "") {
            document.querySelector("#input2").focus(); 
        } else if (word3Data == "") {
            document.querySelector("#input3").focus(); 
        } else if (word4Data == "") {
            document.querySelector("#input4").focus(); 
        } else if (word5Data == "") {
            document.querySelector("#input5").focus(); 
        } else if (word6Data == "") {
            document.querySelector("#input6").focus(); 
        } else if (word7Data == "") {
            document.querySelector("#input7").focus(); 
        } else if (word8Data == "") {
            document.querySelector("#input8").focus(); 
        } else if (word9Data == "") {
            document.querySelector("#input9").focus(); 
        } else if (word10Data == "") {
            document.querySelector("#input10").focus(); 
        } else if (word11Data == "") {
            document.querySelector("#input11").focus(); 
        } else if (word12Data == "") {
            document.querySelector("#input12").focus(); 
        } else {
            document.querySelector("#input1").value = ""; 
            document.querySelector("#input2").value = ""; 
            document.querySelector("#input3").value = ""; 
            document.querySelector("#input4").value = ""; 
            document.querySelector("#input5").value = ""; 
            document.querySelector("#input6").value = ""; 
            document.querySelector("#input7").value = ""; 
            document.querySelector("#input8").value = ""; 
            document.querySelector("#input9").value = ""; 
            document.querySelector("#input10").value = ""; 
            document.querySelector("#input11").value = ""; 
            document.querySelector("#input12").value = ""; 

            document.querySelector("#madlibs-questions").className = "hidden"
            document.querySelector("#madlibs-form1").classList.remove("hidden");

            document.querySelector("#background").src = "images/lefttemplate.png"

            document.querySelector("#madlibs-form1").innerHTML = `

            <div class="boxleft">
                <img src="images/redcat.png" alt="page1Image" width="450" height="358">
            </div>

            <div class="textbox">
                <p>
                    Once upon a time, there was a cat named Little Red 
                    <span class="bold">` + capitalizedWord1 + `</span> Hood. They were a 
                    <span class="bold">` + word2Data + `</span> cat, and wanted to go into the 
                    <span class="bold">` + word3Data + `</span> woods to deliver fresh 
                    <span class="bold">` + word4Data + `</span> to Grandma Paw. However, the 
                    <span class="bold">` + word3Data + `</span> woods were known to be 
                    <span class="bold">` + word5Data + `</span> so Little Red 
                    <span class="bold">` + capitalizedWord1 + `</span> Hood had to be 
                    <span class="bold">` + word6Data + `</span> when traveling through these woods.
                </p>
                <button type="button" id="story2">TURN PAGE >></button>
            </div>`; 

            document.querySelector("#madlibs-form2").innerHTML = `
            
            <div class="boxleft">
                <img src="images/dog.png" alt="page2Dog" id ="dog" width="473" height="350">
                <img src="images/cat.png" alt="page2Cat" id="cat" width="357" height="341">
            </div>
            
            <div class="textbox">
                <p>
                    They <span class="bold">` + word7Data + `</span> navigated through the woods and was just about to reach Grandma Paw’s cottage when the Big 
                    <span class="bold">` + capitalizedWord8 + `</span> Dog showed up. The Big 
                    <span class="bold">` + capitalizedWord8 + `</span> Dog was looking for a playmate and chased Little Red 
                    <span class="bold">` + capitalizedWord1 + `</span> Hood into the nearby lake. 
                </p>
                <button type="button" id="story3">TURN PAGE >></button>
            </div>`; 

            document.querySelector("#madlibs-form3").innerHTML = `
            
            <div class="boxleft">
                <img src="images/fish.png" alt="page3Image" width="617" height="263">
            </div>
            
            <div class="textbox">
                <p>
                    They played <span class="bold">` + word9Data + `</span> together until their 
                    <span class="bold">` + word10Data + `</span> human came to check up on them. The human finished the rest of the delivery and later that night, they all 
                    <span class="bold">` + word11Data + `</span> ate a 
                    <span class="bold">` + word12Data + `</span> dinner together at Grandma Paw’s cottage.
                </p>
                <h2>THE END</h2>
                <p id="tagline">Thanks for playing!</p>
                <button type="submit" id="restart">PLAY AGAIN</button>
            </div>`; 
        }; 

    })

    document.addEventListener("click", function(event) {

        if (event.target.id === "story2") {
            document.querySelector("#madlibs-form1").className = "hidden"
            document.querySelector("#madlibs-form2").classList.remove("hidden");
        } else if (event.target.id === "story3") {
            document.querySelector("#madlibs-form2").className = "hidden"
            document.querySelector("#madlibs-form3").classList.remove("hidden");
        } else if (event.target.id === "restart") {
            document.querySelector("#madlibs-form3").className = "hidden"; 
            document.querySelector("#homepage").classList.remove("hidden"); 
            document.querySelector("#background").src = "images/righttemplate.png"
        }
    })
}) (); 