var btnIcon = document.querySelector(".btnIcon");

btnIcon.addEventListener('click', function () {
    var shareLink = document.querySelector(".shareLink");
    var shareIcon = document.querySelector(".shareIcon");
    var sunIcon = document.querySelector(".sunIcon");
    var moonIcon = document.querySelector(".moonIcon");
    var backgroundMode = document.querySelector("body");
    var navdMode = document.querySelector("nav");
    var moon = document.getElementById("moonIcon");
    var sun = document.getElementById("sunIcon");
    if (sunIcon.classList.contains("hidden")) {
        backgroundMode.classList.add("light-background");
        navdMode.classList.add("light-Navbackground");
        shareLink.classList.add("shareLink-light");
        shareIcon.classList.add("shareLink-light");
        moon.style.animation = "moveOuIcon 0.4s ease";

        setTimeout(function () {
            sunIcon.classList.remove("hidden");
            moonIcon.classList.add("hidden");
            sun.style.animation = "moveInIcon 0.4s ease";
        }, 200);


    } else {
        backgroundMode.classList.remove("light-background");
        shareLink.classList.remove("shareLink-light");
        shareIcon.classList.remove("shareLink-light");
        navdMode.classList.remove("light-Navbackground");
        sun.style.animation = "moveOuIcon 0.4s ease";
        setTimeout(function () {
            moonIcon.classList.remove("hidden");
            sunIcon.classList.add("hidden");
            moon.style.animation = "moveInIcon 0.4s ease";
        }, 200);

    }
})