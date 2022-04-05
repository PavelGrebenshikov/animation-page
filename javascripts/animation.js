window.onload = function() {

    let text = document.querySelector(".element")
    let element_anim = document.querySelector(".element");
    let hrefs = document.querySelectorAll(".href_loc");
    
    (function loop() {
        if (getComputedStyle(text).backgroundColor == "rgb(255, 255, 255)") {
            text.innerHTML = "Welcome my friend"
        }
        if (getComputedStyle(text).backgroundColor == "rgb(9, 5, 37)") {
             element_anim.addEventListener("click", repeat);
        }
        requestAnimationFrame(loop);
    })();

    function repeat() {
        element_anim.style.animationIterationCount = "infinite";
        setTimeout(thanks(), 1000);
    }
    
    function thanks() {
        text.innerHTML = "Thank you.";
        element_anim.style.animationIterationCount = 2;
    }

    //   redirect location
    
    hrefs[0].addEventListener("click", home);
    hrefs[1].addEventListener("click", github);
    hrefs[2].addEventListener("click", base);

    function home() {
        window.location.href = "/"
    }
    function github() {
        window.location.href  = "https://github.com/PavelGrebenshikov"
    }
    function base() {
        window.location.href = "https://pavgrebens.ru/"
    }

}