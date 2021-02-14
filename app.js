// Body
let body = document.querySelector("body");

// Navbars
let mainNavGamesMenu = document.getElementById("main-nav-games");
let hamburgerMenu = document.getElementById("mobile-hamburger-nav");
let mobileAccMenu = document.getElementById("mobile-account-nav");

// Overlay
let menuBgOverlay = document.getElementById("menu-background-overlay");

// Buttons
let mainNavGamesBtn = document.getElementById("games-menu-button");
let hamburgerBtn = document.getElementById("main-hamburger-button");
let mobileAccBtn = document.getElementById("mobile-account-button");
let hamburgerCloseBtn = document.getElementById("mobile-hamburger-close-button");
let mobileAccCloseBtn = document.getElementById("mobile-account-close-button");

// Event Listeners
mainNavGamesBtn.addEventListener("click", openMenu);
hamburgerBtn.addEventListener("click", openMenu);
mobileAccBtn.addEventListener("click", openMenu);
hamburgerCloseBtn.addEventListener("click", closeMenu);
mobileAccCloseBtn.addEventListener("click", closeMenu);

// Open Menus
function openMenu(e) {
    body.style.overflow = "hidden";
    menuBgOverlay.style.visibility = "visible";

    if(e.target.id === "games-menu-button"){
        mainNavGamesMenu.style.visibility = "visible";
        e.target.firstElementChild.classList.add("navbar-arrow-rotation");
    } else if(e.target.id === "main-hamburger-button"){
        hamburgerMenu.style.left = "0";
        mobileAccMenu.style.right = "-35rem";
    } else {
        mobileAccMenu.style.right = "0";
        hamburgerMenu.style.left = "-35rem";
    }
}

// Close Menus
function closeMenu(e){
    body.style.overflow = "visible";
    mobileNavOverlay.style.visibility = "hidden";
    
    if(e.target.id === "mobile-hamburger-close-button"){
        hamburgerMenu.style.left = "-35rem";
    } else {
        mobileAccMenu.style.right = "-35rem";
    }
}
