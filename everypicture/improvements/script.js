(function() {

    "use strict"; 

    let postTops = []; 
    let pageTop; 
    let counter = 0;
    let prevCounter = 0; 
    const posts = document.querySelectorAll("section"); 

    window.addEventListener("load", function() {
        
        resetPagePosition(); 

        window.addEventListener("scroll", function() {
            pageTop = window.pageYOffset + 150; 

            if (counter < posts.length - 1 && pageTop > postTops[counter + 1]) {
                counter++; 
                console.log(`This is counter ${counter}`)
            } else if (counter > 1 && pageTop < postTops[counter - 1]) {
                counter--;
                console.log(`This is counter ${counter}`)
            }; 

            if (counter != prevCounter) {

                //remove wiggle from last post 
                const prevH1 = posts[prevCounter].querySelector("h1"); 
                prevH1.classList.remove("wiggle"); 

                //restart wiggle animation
                const H1 = posts[counter].querySelector("h1"); 
                H1.classList.remove("wiggle");
                void H1.offsetWidth;  
                H1.classList.add("wiggle"); 
            }

            if (counter !== prevCounter && counter > 0) {
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