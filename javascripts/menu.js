document.addEventListener("DOMContentLoaded", function() {
        let menu = document.querySelector(".menu");
        let menuopen = document.querySelector(".menuopen");
        let menuclose = document.querySelector(".menuclose");
    
    
        menu.addEventListener("click", function() {
            menuopen.style.display = "block";
            });
        
            menuclose.addEventListener("click", function() {
                menuopen.style.display = "none";
            });   
    });
    