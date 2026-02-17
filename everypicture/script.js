(function() {

    "use strict"; 

    let postTops = []; 
    let pageTop; 
    let counter = 1;
    let prevCounter = 1; 
    const posts = document.querySelectorAll("p"); 

    window.addEventListener("load", function() {
        
        resetPagePosition(); 

        window.addEventListener("scroll", function() {
            pageTop = window.pageYOffset + 300; 

            if (pageTop > postTops[counter]) {
                counter++; 
            } else if (counter > 1 && pageTop < postTops[counter - 1]) {
                counter--;
            }; 

            if (counter != prevCounter) {
                document.querySelector("img").className = "zoom" + counter; 
                prevCounter = counter; 
            }; 
        }); 
    }); 

    function resetPagePosition() {
        postTops = []; 
        posts.forEach(function(post) {
            postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset); 
        }); 

        const pagePosition = window.pageYOffset + 300; 
        counter = 0; 

        postTops.forEach(function(post) {
            if (pagePosition > post) {
                counter++; 
            }; 
        }); 
    }

})(); 