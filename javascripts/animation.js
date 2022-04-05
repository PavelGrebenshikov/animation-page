window.onload = function() {
    (function loop() {
        let text = document.querySelector(".element")

        if (getComputedStyle(text).backgroundColor == "rgb(255, 255, 255)") {
            text.innerHTML = "Welcome my friend"
        }
        requestAnimationFrame(loop);
      })();

    //   redirect location

    let hrefs = document.querySelectorAll(".href_loc");
    
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