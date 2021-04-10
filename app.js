// Body
let body = document.querySelector("body");

// Navbars
let mainNavLinks = document.querySelectorAll(".main-nav li");
let mainNavGamesMenu = document.querySelector(".main-nav-games");
let mainNavEsportsMenu = document.querySelector(".main-nav-esports");
let mainNavAccMenu = document.querySelector(".main-nav-account");
let mobileMainNav = document.querySelector(".mobile-main-nav");
let hamburgerMenu = document.querySelector(".mobile-hamburger-nav");
let mobileAccMenu = document.querySelector(".mobile-account-nav");

// Overlay
let menuBgOverlay = document.querySelector(".background-overlay");

// Buttons
let mainNavGamesBtn = document.getElementById("games-menu-button");
let mainNavEsportsBtn = document.getElementById("esports-menu-button");
let mainNavAccBtn = document.getElementById("account-menu-button");
let hamburgerBtn = document.getElementById("main-hamburger-button");
let mobileAccBtn = document.getElementById("mobile-account-button");
let hamburgerCloseBtn = document.getElementById("mobile-hamburger-close-button");
let mobileAccCloseBtn = document.getElementById("mobile-account-close-button");

// Lists & footers
const gamesNavItems = document.querySelectorAll(".main-nav-games-item");
const gamesNavFooter = document.querySelector(".main-nav-games-footer"); 
const esportsNavItems = document.querySelectorAll(".main-nav-esports-content-competitions li");
const esportsNavFooter = document.querySelector(".main-nav-esports-footer"); 

// Variables
const subMenus = [mainNavGamesMenu, mainNavEsportsMenu, mainNavAccMenu];
let slideshowCounter = 0;


//Open or close games, esports or account menus 
const toggleMainSubMenus = e => {
    // Set selected link as active
    setActiveLink(e);

    // Add overlay to inactive links
    navOverlay(e);

    // Toggle animation for menu items
    handleMenuAnimation(e);

    // Open Submenus
    if(e.target.id === "games-menu-button" || e.target.parentElement.id === "games-menu-button"){
        // Toggle visibility of games menu
        toggleMenuVisibility(mainNavGamesMenu, mainNavEsportsMenu, mainNavAccMenu);
    } else if (e.target.id === "esports-menu-button"|| e.target.parentElement.id === "esports-menu-button"){
        // Toggle visibility of esports menu
        toggleMenuVisibility(mainNavEsportsMenu, mainNavGamesMenu, mainNavAccMenu);
    } else {
        toggleMenuVisibility(mainNavAccMenu, mainNavEsportsMenu, mainNavGamesMenu);
    }
}

// Set selected link as active
const setActiveLink = e => {
    // Check for text or arrow selection
    if(e.target.id === "games-menu-button" || e.target.id === "esports-menu-button" || e.target.id === "account-menu-button"){
        // Make selected link active
        e.target.classList.toggle("active-link");

    } else if(e.target.parentElement.id === "games-menu-button" || e.target.parentElement.id === "esports-menu-button" || e.target.parentElement.id === "account-menu-button"){
        // Make selected link active
        e.target.parentElement.classList.toggle("active-link");
    }
}

// Add or remove incative link overlay
const navOverlay = e => {
    if(e){
        mainNavLinks.forEach(link => {
            if(e.target.classList.contains("active-link") || e.target.parentElement.classList.contains("active-link")){
                // Add BG overlay
                menuBgOverlay.classList.add("toggle-visibility");
                if(link.firstElementChild === e.target || link.firstElementChild === e.target.parentElement){
                    // Remove overlay from active link
                    link.firstElementChild.classList.remove("nav-overlay");
                } else {
                    // Add overlay to all inactive links
                    link.firstElementChild.classList.add("nav-overlay");
                    link.firstElementChild.classList.remove("active-link");
                }
            } else {
                    // Remove all overlays
                    menuBgOverlay.classList.remove("toggle-visibility");   
                    link.firstElementChild.classList.remove("nav-overlay");
            }
        });
    } else {
        menuBgOverlay.classList.remove("toggle-visibility"); 
        mainNavLinks.forEach(link => {
            link.firstElementChild.classList.remove("active-link");
            link.firstElementChild.classList.remove("nav-overlay");
        })
    }
}

const handleMenuAnimation = e => {
    // games & esport nav item animation
    const navItemAnimation = e => {
        if(e.target.id === "games-menu-button" || e.target.parentElement.id === "games-menu-button"){
            gamesNavItems.forEach((item, index) => {
                item.style.animation = `navImageFade 0.2s ease-out ${index / 20}s forwards`;
            })
            gamesNavFooter.style.animation = `navImageFade 0.2s ease-out 0.9s forwards`;
        } else {
            esportsNavItems.forEach((item, index) => {
                item.style.animation = `navImageFade 0.2s ease-out ${index / 12.5}s forwards`;
            })
            esportsNavFooter.style.animation = `navImageFade 0.2s ease-out 0.5s forwards`;
        }
    }
    
    // Remove item animation
    const removeAnimation = (itemList, footer) => { 
        itemList.forEach(item => {
            item.style.animation = null;
        })
        footer.style.animation = null;
    }

    // Check for active menu
    if(e.target.classList.contains("active-link") || e.target.parentElement.classList.contains("active-link")){
        navItemAnimation(e);
        if(e.target.id === "games-menu-button" || e.target.parentElement.id === "games-menu-button"){
            removeAnimation(esportsNavItems, esportsNavFooter);
        } else {
            removeAnimation(gamesNavItems, gamesNavFooter);
        }
    } else {
        removeAnimation(gamesNavItems, gamesNavFooter);
        removeAnimation(esportsNavItems, esportsNavFooter);
    }
}

const toggleMenuVisibility = (menuOn, menuOff1, menuOff2) => {
    menuOn.classList.toggle("toggle-visibility");
    menuOff1.classList.remove("toggle-visibility");
    menuOff2.classList.remove("toggle-visibility");
}

const closeSubMenus = () => {
    subMenus.forEach(menu => {
        menu.classList.remove("toggle-visibility");
    })
    navOverlay();
}

// Open mobile modal menus (hamburger or account menu)
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

// const careerSlideshow = () => {
//     console.log(slideshowCounter);
//     const careerSection = document.querySelector(".careers-section");
//     const careerImages = ["careers-1", "careers-2", "careers-3", "careers-4", "careers-5"];

//     careerSection.style.background = `url(/images/careers-banner/${careerImages[slideshowCounter]}.jpeg`;
    
//     if(slideshowCounter < (careerImages.length - 1)){
//         slideshowCounter++;
//     } else {
//         slideshowCounter = 0;
//     }

//     setTimeout("careerSlideshow()", 3000);
// }

// window.onload =  careerSlideshow;

let slideIndex = 0;

const showSlideshow = n => {
    let i;
    const slides = document.querySelectorAll(".main-hero-slide");

    slides.forEach(slide => {
        slide.style.display = "none";
    })

    slides[slideIndex].style.display = "block";
    console.log(slideIndex);
    slideIndex++;
    if(slideIndex > slides.length -1){
        slideIndex = 0;
    }
    setTimeout(showSlideshow, 6000);
}

window.onload = showSlideshow(slideIndex);


// Event Listeners
mainNavGamesBtn.addEventListener("click", toggleMainSubMenus);
mainNavEsportsBtn.addEventListener("click", toggleMainSubMenus);
mainNavAccBtn.addEventListener("click", toggleMainSubMenus);
hamburgerBtn.addEventListener("click", toggleSideMenu);
mobileAccBtn.addEventListener("click", toggleSideMenu);
hamburgerCloseBtn.addEventListener("click", toggleSideMenu);
mobileAccCloseBtn.addEventListener("click", toggleSideMenu);
window.addEventListener("resize", closeSubMenus);

