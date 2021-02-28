// Body
let body = document.querySelector("body");

// Navbars
let mainNavLinks = document.querySelectorAll(".main-nav li");
let mainNavGamesMenu = document.querySelector(".main-nav-games");
let mainNavEsportsMenu = document.querySelector(".main-nav-esports");
let mobileMainNav = document.querySelector(".mobile-main-nav");
let hamburgerMenu = document.querySelector(".mobile-hamburger-nav");
let mobileAccMenu = document.querySelector(".mobile-account-nav");

// Overlay
let menuBgOverlay = document.querySelector(".background-overlay");

// Buttons
let mainNavGamesBtn = document.getElementById("games-menu-button");
let mainNavEsportsBtn = document.getElementById("esports-menu-button");
let hamburgerBtn = document.getElementById("main-hamburger-button");
let mobileAccBtn = document.getElementById("mobile-account-button");
let hamburgerCloseBtn = document.getElementById("mobile-hamburger-close-button");
let mobileAccCloseBtn = document.getElementById("mobile-account-close-button");

// Event Listeners
mainNavGamesBtn.addEventListener("click", toggleMainSubMenus);
mainNavEsportsBtn.addEventListener("click", toggleMainSubMenus);
hamburgerBtn.addEventListener("click", toggleSideMenu);
mobileAccBtn.addEventListener("click", toggleSideMenu);
hamburgerCloseBtn.addEventListener("click", toggleSideMenu);
mobileAccCloseBtn.addEventListener("click", toggleSideMenu);

// Open Menus
function toggleSideMenu(e) {
    body.style.overflowY = "hidden";
    menuBgOverlay.classList.add("toggle-visibility");
        
    if(e.target.id === "main-hamburger-button"){
        mobileMainNav.classList.add("nav-overlay");
        hamburgerMenu.classList.add("hmbg-mobile-menu-open");
        mobileAccMenu.classList.remove("acc-mobile-menu-open");
    } else if(e.target.id === "mobile-account-button"){
        mobileMainNav.classList.add("nav-overlay");
        mobileAccMenu.classList.add("acc-mobile-menu-open");
        hamburgerMenu.classList.remove("hmbg-mobile-menu-open"); 
    } else {
        hamburgerMenu.classList.remove("hmbg-mobile-menu-open");
        mobileAccMenu.classList.remove("acc-mobile-menu-open");
        mobileMainNav.classList.remove("nav-overlay");
        menuBgOverlay.classList.remove("toggle-visibility");

        body.style.overflowY = "visible";
    }
}

function toggleMainSubMenus(e){
    e.target.firstElementChild.classList.toggle("navbar-arrow-rotation")
    console.log("WE'RE IN");
    if(e.target.id === "games-menu-button"){
        navOverlay(e);
        mainNavGamesMenu.classList.toggle("toggle-visibility");
        mainNavEsportsMenu.classList.remove("toggle-visibility")
        mainNavEsportsBtn.firstElementChild.classList.remove("navbar-arrow-rotation");
    } else if (e.target.id === "esports-menu-button"){
        console.log("ESPORTS!");
        navOverlay(e);
        mainNavEsportsMenu.classList.toggle("toggle-visibility")
        mainNavGamesMenu.classList.remove("toggle-visibility");
        mainNavGamesBtn.firstElementChild.classList.remove("navbar-arrow-rotation");
    } else {
        mainNavAccMenu.classList.toggle("toggle-visibility");
    }
}

function navOverlay(e){
    for(let i = mainNavLinks.length-1; i >= 0; i--){
        if(mainNavLinks[i].firstElementChild === e.target){
            continue;
        } else {
            mainNavLinks[i].classList.toggle("nav-overlay");
        }
    }
}