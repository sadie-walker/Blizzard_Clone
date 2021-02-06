// Body
let body = document.querySelector("body");

// Navbars
let hamburgerMenu = document.getElementById("mobile-hamburger-nav");
let mobileAccMenu = document.getElementById("mobile-account-nav");

// Overlay
let mobileNavOverlay = document.getElementById("mobile-navbars-overlay");

// Buttons
let hamburgerBtn = document.getElementById("main-hamburger-button");
let mobileAccBtn = document.getElementById("mobile-account-button");
let hamburgerCloseBtn = document.getElementById("mobile-hamburger-close-button");
let mobileAccCloseBtn = document.getElementById("mobile-account-close-button");


hamburgerBtn.addEventListener("click", openMenu);
mobileAccBtn.addEventListener("click", openMenu);
hamburgerCloseBtn.addEventListener("click", closeMenu);
mobileAccCloseBtn.addEventListener("click", closeMenu);

function openMenu(e) {
    body.style.overflow = "hidden";
    mobileNavOverlay.style.visibility = "visible";

    if(e.target.id === "main-hamburger-button"){
        hamburgerMenu.style.left = "0";
        mobileAccMenu.style.right = "-35rem";
    } else {
        mobileAccMenu.style.right = "0";
        hamburgerMenu.style.left = "-35rem";
    }
}

function closeMenu(e){
    body.style.overflow = "visible";
    mobileNavOverlay.style.visibility = "hidden";
    
    if(e.target.id === "mobile-hamburger-close-button"){
        hamburgerMenu.style.left = "-35rem";
    } else {
        mobileAccMenu.style.right = "-35rem";
    }
}
