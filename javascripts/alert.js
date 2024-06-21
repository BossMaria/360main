document.addEventListener("DOMContentLoaded", function() {

    let close1 = document.querySelector(".close1");
    let close2 = document.querySelector(".close2");
    let allertyellow = document.querySelector(".allertyellow");
    let allertblue = document.querySelector(".allertblue");
    
    close1.addEventListener("click",function(){
        allertyellow.style.display = "none";
    });
    
    close2.addEventListener("click",function(){
        allertblue.style.display = "none";
    });

});   
    