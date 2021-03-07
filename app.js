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
    // Make selected link active
    e.target.classList.toggle("active-link");
    
    // Add or remove incative link overlay
    for(let i = mainNavLinks.length-1; i >= 0; i--){
        if(e.target.classList.contains("active-link")){
            if(mainNavLinks[i].firstElementChild === e.target){
                mainNavLinks[i].firstElementChild.classList.remove("nav-overlay");
            } else {
                mainNavLinks[i].firstElementChild.classList.add("nav-overlay");
                mainNavLinks[i].firstElementChild.classList.remove("active-link");
            }
        } else {
                mainNavLinks[i].firstElementChild.classList.remove("nav-overlay");
        }
    }

    // Open Submenus
    if(e.target.id === "games-menu-button"){
        mainNavGamesMenu.classList.toggle("toggle-visibility");
        mainNavEsportsMenu.classList.remove("toggle-visibility")
    } else if (e.target.id === "esports-menu-button"){
        mainNavEsportsMenu.classList.toggle("toggle-visibility")
        mainNavGamesMenu.classList.remove("toggle-visibility");
    } else {
        mainNavAccMenu.classList.toggle("toggle-visibility");
    }
}