// Links
const mainNavGamesBtn = document.getElementById("games-menu-button");
const mainNavEsportsBtn = document.getElementById("esports-menu-button");
const mainNavAccBtn = document.getElementById("account-menu-button");
const hamburgerBtn = document.getElementById("main-hamburger-button");
const mobileAccBtn = document.getElementById("mobile-account-button");
const hamburgerCloseBtn = document.getElementById("mobile-hamburger-close-button");
const mobileAccCloseBtn = document.getElementById("mobile-account-close-button");
const locationSelect = document.querySelector(".location-selector");
let bgOverlay = document.querySelector(".background-overlay");
let mainNavLinks = document.querySelectorAll(".main-nav-item-link");


// Transition Bars
const barItems = document.querySelectorAll(".transition-bar-item");

// Variables
let slideIndex = 0;
let mobile;

// Add BG Overlay
const toggleBgOverlay = (e) => {
    if(e && (e.target.classList.contains("active") || e.target.closest("a").classList.toString().indexOf("active") !== -1)){
        bgOverlay.classList.add("toggle-visibility");
    } else {
        bgOverlay.classList.remove("toggle-visibility");
    }
}

// Open desktop sub menus (games/esports/acc)
const toggleSubMenus = (e) => {

    // Set selected link as active
    const setActiveLink = e => {
        e.target.closest("a").classList.toggle("active-link");
        e.target.closest("a").classList.remove("inactive-link");
    }

    // Set unselected links a inactive
    const setInactiveLinks = (e) => {
        mainNavLinks.forEach(link => {
            if(e && e.target.closest("a").classList.contains("active-link")){
                if(link === e.target.closest("a")){
                    // Remove inactive class from active link
                    link.classList.remove("inactive-link");
                } else{
                    // Remove active link from previous active link
                    link.classList.add("inactive-link");
                    link.classList.remove("active-link");
                }
            } else {
                // Remove all classes  
                link.classList.remove("inactive-link");
                link.classList.remove("active-link");
            }
        })
    }

    const handleMenuAnimation = e => {
        // Lists & footers
        const gamesNavItems = document.querySelectorAll(".main-nav-games-item");
        const gamesNavFooter = document.querySelector(".main-nav-games-footer ul"); 
        const esportsNavItems = document.querySelectorAll(".main-nav-esports-content-competitions li");
        const esportsNavFooter = document.querySelector(".main-nav-esports-footer a"); 

        // games & esport nav item animation
        const navItemAnimation = e => {
            if(e.target.closest("#games-menu-button")){
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
        if(e.target.closest("a").classList.contains("active-link")){
            navItemAnimation(e);
            if(e.target.closest("#games-menu-button")){
                removeAnimation(esportsNavItems, esportsNavFooter);
            } else {
                removeAnimation(gamesNavItems, gamesNavFooter);
            }
        } else {
            removeAnimation(gamesNavItems, gamesNavFooter);
            removeAnimation(esportsNavItems, esportsNavFooter);
        }
    }

    // Open Submenus
    const openCloseMenus = (e) => {
        const subMenus = document.querySelectorAll(".sub-menu-nav-item nav");

        subMenus.forEach(menu => {
            if(e && menu === e.target.closest("a").nextElementSibling){
                if(!mobile){
                    menu.classList.toggle("toggle-visibility");
                } else{
                    menu.classList.toggle("mobile-nav-submenu-open");
                }
            } else{
                if(!mobile){
                    menu.classList.remove("toggle-visibility");
                } else {
                    menu.classList.remove("mobile-nav-submenu-open");
                }
            }
        })
    }

    if(e){    
        // Set selected link as active
        setActiveLink(e);

        if(!mobile){
            // Toggle animation for menu items
            handleMenuAnimation(e);
        }

    } else{       
        // Remove bg overlay if screen resized
        toggleBgOverlay(false);
    }

    // Set non-selected links as inactive
    setInactiveLinks(e);

    if(!mobile){
        // Add bg overlay
        toggleBgOverlay(e);
    }

    // Open submenu
    openCloseMenus(e);
}

const toggleMobileMenus = (e) => {
    let body = document.querySelector("body");
    let mainNav = document.querySelector(".main-nav");
    let mobileMainNav = document.querySelector(".mobile-main-nav");

    // Open mobile modal menus (hamburger / account menu)
        body.style.overflowY = "hidden";
        mobileMainNav.classList.add("mobile-navbar-overlay");

        if(e && e.target.id === "main-hamburger-button"){
            mainNav.classList.add("hmbg-main-menu-open");
            mainNav.classList.remove("acc-main-menu-open");
            hamburgerBtn.classList.add("active");
            toggleBgOverlay(e);
        } else if(e && e.target.id === "mobile-account-button"){
            mainNav.classList.add("acc-main-menu-open");
            mainNav.classList.remove("hmbg-main-menu-open"); 
            mobileAccBtn.classList.add("active");
            toggleBgOverlay(e);
        } else {
            // close buttons
            mainNav.classList.remove("hmbg-main-menu-open");
            mainNav.classList.remove("acc-main-menu-open");
            mobileMainNav.classList.remove("mobile-navbar-overlay");
            hamburgerBtn.classList.remove("active");
            mobileAccBtn.classList.remove("active");
            toggleBgOverlay(false);

            body.style.overflowY = "visible";
        }
}

const careerSlideshow = () => {
    const careerSlides = ["/images/careers-banner/careers-1.jpeg","/images/careers-banner/careers-2.jpeg","/images/careers-banner/careers-3.jpeg","/images/careers-banner/careers-4.jpeg","/images/careers-banner/careers-5.jpeg"];
    const careerSection = document.querySelector(".careers-section");
   
    careerSlides.forEach((slide, index) => {
        setTimeout(() => {
            careerSection.style.backgroundImage = `url('${slide}')`;
        }, index * 6000);
    })
}

const plusSlides = n => {
    showSlideshow(slideIndex+n, true);
    clearTimeout(slideshowTimeout);
    
    // Remove previous progession bar when slide selected
    if(slideIndex === 0){
        barItems[barItems.length-1].firstElementChild.style.display = "none";
        barItems[slideIndex].nextElementSibling.firstElementChild.style.display = "none";
    } else if (slideIndex === barItems.length-1) {
        barItems[slideIndex].previousElementSibling.firstElementChild.style.display = "none";
        barItems[0].firstElementChild.style.display = "none";
    } else {
        barItems[slideIndex].previousElementSibling.firstElementChild.style.display = "none";
        barItems[slideIndex].nextElementSibling.firstElementChild.style.display = "none";
    }
}

const currentSlide = n => {
    showSlideshow(slideIndex = n, true);
    clearTimeout(slideshowTimeout);
    // Remove previous progession bar when slide selected
    barItems[slideIndex].firstElementChild.style.display = "none";
}

const showSlideshow = (n, slideSelected) => {
    const slides = document.querySelectorAll(".main-hero-slide");

    // Hide All Slides
    slides.forEach(slide => {
        slide.style.display = "none";
    })

    // Remove Active Class from all items on the transition bar
    barItems.forEach(bar => {
        if(bar.classList.contains("active-trans-bar")){
            bar.classList.remove("active-trans-bar");
        }
    })

    // Change Slide Index for start & end of list
    if(n > slides.length-1){
        slideIndex = 0;
        n = 0;
    } else if (n < 0){
        slideIndex = slides.length-1;
        n = slides.length-1;
    }

    // Set Slide Index
    if(slideSelected === false){
        // Recall showSlideshow for continous loop
        slideshowTimeout = setTimeout(function() {
            slideIndex++;
            showSlideshow(slideIndex, false);
        }, 6000);
    } else {
        slideIndex = n;
    }

    // Display Active Slide & Add Img Animation
    slides[slideIndex].style.display = "block";
    slides[slideIndex].firstElementChild.firstElementChild.classList.add("hero-img-animation");

    // Active Transition Bar
    barItems[slideIndex].classList.add("active-trans-bar");

    // Add Animation to Slide Text
    const childArry = Array.from(slides[slideIndex].lastElementChild.firstElementChild.children)
    childArry.forEach((child, index) => {
        child.style.animation = `heroTextAnimation 6s ${index / 2.25}s forwards`;
        child.classList.add("hero-text-fade-out");
    })
}

// Toggle location selection menu
const toggleLocationMenu = (e) => {
    const locations = document.querySelectorAll(".location-options li span");

    // Set active location
    locations.forEach(location => {
        if(location.innerHTML.indexOf(locationSelect.firstElementChild.innerHTML) != -1){
            location.parentElement.classList.toggle("active-location");
        }
    })

    // Open and close menu
    document.querySelector(".location-options").classList.toggle("toggle-visibility");
    locationSelect.classList.toggle("location-selection-active");
    toggleBgOverlay(e);
}

const setWindowSize = () => {
    if(window.innerWidth <= 760){
        mobile = true;
    } else {
        mobile = false;
    }
}


// Start hero slideshow on page load
window.onload = function() {
    showSlideshow(slideIndex, false);
    setWindowSize();
    careerSlideshow();
    setInterval(careerSlideshow, 30500);
}

window.addEventListener("resize", function(){
    toggleSubMenus();
    setWindowSize();

    if(mobile){
        toggleMobileMenus();
    }
})

// Event Listeners
mainNavGamesBtn.addEventListener("click", toggleSubMenus);
mainNavEsportsBtn.addEventListener("click", toggleSubMenus);
mainNavAccBtn.addEventListener("click", toggleSubMenus);
hamburgerBtn.addEventListener("click", toggleMobileMenus);
mobileAccBtn.addEventListener("click", toggleMobileMenus);
hamburgerCloseBtn.addEventListener("click", toggleMobileMenus);
mobileAccCloseBtn.addEventListener("click", toggleMobileMenus);
locationSelect.addEventListener("click", toggleLocationMenu);
bgOverlay.addEventListener("click", function(e){
    if(mobile){
        toggleMobileMenus();
    }

    mainNavLinks.forEach(link => {
        if(link.classList.contains("active-link")){
            toggleSubMenus();
        }
    })

    if(locationSelect.classList.contains("location-selection-active")){
        toggleLocationMenu();
    }
})
