// const initializeLazyLoading = () =>{
//     // lazy loading for all images with toogling classList and change src key in images
//     document.addEventListener("DOMContentLoaded", function (event) {
//         const images = document.querySelectorAll('img'); 
//         // getting all site`s images
    
//         const options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.1
//         }

//         //  BrowserAPI settings for IntersectionObserver. If threshold`s value more then 0, it means that viewport catch images on screen
    
//         function handleImg(myImg, observer) {
//             myImg.forEach(myImgSingle => {
//                 if (myImgSingle.intersectionRatio > 0) { // check if images in viewport
//                     loadImage(myImgSingle.target);
//                 }
//             })
//         }
    
//         function loadImage(image) {
//             image.src = image.getAttribute('data-image'); // getting src from data-image attribute
//             image.classList.add('visible'); // add class for animation
//         }
    
//         const observer = new IntersectionObserver(handleImg, options);
    
//         images.forEach(img => {
//             observer.observe(img);
//         })

//         // For all images running observer function
//     });
// };

// const initializePopUp = () =>{
//     document.addEventListener("DOMContentLoaded", function (event) {
//         const mainContent = document.getElementById("main"),
//             modal = document.getElementById("modal"),
//             modalClose = document.getElementById("modal__close"),
//             modalWrapper = document.getElementById("modal__wrapper");
    
//         // buttons for show pop-up
//         const btnModalTerms = document.getElementById("btnModalTerms");
//         const arrayDisclaimerBtns = Array.from(document.getElementsByClassName("btnModalDisclaimer"));
//         const overlay = document.getElementById("overlay");
    
//         for (let i = 0; i < arrayDisclaimerBtns.length; i++) {
//             arrayDisclaimerBtns[i].addEventListener("click", function () {
//                 modal.classList.add("active");
//                 overlay.classList.add("active");
//                 mainContent.style.filter = "blur(4px)";
//                 (function () {
//                     let xhttp = new XMLHttpRequest();
//                     xhttp.onreadystatechange = function () {
//                         if (this.readyState == 4 && this.status == 200) {
//                             modalWrapper.innerHTML = this.responseText;
//                         }
//                     };
//                     xhttp.open("GET", "../info/disclaimer.txt", true);
//                     xhttp.send();
//                 }());
//             });
//         }
    
//         btnModalTerms.addEventListener("click", function () {
//             modal.classList.add("active");
//             overlay.classList.add("active");
//             mainContent.style.filter = "blur(4px)";
//             (function () {
//                 let xhttp = new XMLHttpRequest();
//                 xhttp.onreadystatechange = function () {
//                     if (this.readyState == 4 && this.status == 200) {
//                         modalWrapper.innerHTML = this.responseText;
//                     }
//                 };
//                 xhttp.open("GET", "../info/algemeneVoorwaarden.txt", true);
//                 xhttp.send();
//             }());
//         });
    
//         modalClose.addEventListener("click", function () {
//             mainContent.style.filter = "initial";
//             overlay.classList.remove("active");
//             modal.classList.remove("active");
//             modalWrapper.innerHTML = "";
//         });
    
//         overlay.addEventListener("click", function () {
//             mainContent.style.filter = "initial";
//             modal.classList.remove("active");
//             overlay.classList.remove("active");
//             modalWrapper.innerHTML = "";
//         })
//     });
// };

// const initializeSmoothlyScroll = () =>{
//     document.addEventListener("DOMContentLoaded", function (event) {
//         const headerCardsBtn = document.getElementById('header__cards');
//         const headerBrandsBtn = document.getElementById('header__brands');
//         const headerReviewsBtn = document.getElementById('header__reviews');
//         const headerContactBtn = document.getElementById('header__contact');
//         // nav menu items
    
//         const blockCards = document.getElementById('cards');
//         const blockBrands = document.getElementById('brands');
//         const blockReviews = document.getElementById('reviews');
//         const blockContact = document.getElementById('footer');
//         // html section of site
    
//         function scrollToCards() {
//             blockCards.scrollIntoView({ block: "start", behavior: "smooth" });
//         };
    
//         function scrollToBrands() {
//             blockBrands.scrollIntoView({ block: "start", behavior: "smooth" });
//         };
    
//         function scrollToReviews() {
//             blockReviews.scrollIntoView({ block: "start", behavior: "smooth" });
//         };
    
//         function scrollToContact() {
//             blockContact.scrollIntoView({ block: "start", behavior: "smooth" });
//         };
    
//         // scroll functions
    
//         headerCardsBtn.addEventListener('click', scrollToCards);
//         headerBrandsBtn.addEventListener('click', scrollToBrands);
//         headerReviewsBtn.addEventListener('click', scrollToReviews);
//         headerContactBtn.addEventListener('click', scrollToContact);
    
//         // adding eventListeners for buttons on click for smooth-scroll effect;
//     });
// };

// const initializePartnersBlockAnimation = () =>{
//     document.addEventListener("DOMContentLoaded", function (event) {
//         const partnersBtn = document.getElementById("partners__btn");
//         const partnersList = document.getElementsByClassName("partners__list");
//         const partnersListArray = Array.from(partnersList);
//         const partnersToggleElements = partnersListArray.slice(2, 11);

//         partnersBtn.addEventListener("click", function () {
//             event.preventDefault();
//             partnersBtn.classList.toggle("active");
    
//             for (let i = 0; i < partnersList.length; i++) {
//                 if (partnersList[i].classList.contains("invisible")) {
//                     partnersList[i].classList.remove("invisible");
//                 }
//             }
    
//             if (partnersBtn.classList.contains("active")) {
//                 partnersBtn.innerHTML = "Minder partners tonen"
//             } else {
//                 partnersBtn.innerHTML = "Alle partners bekijken";
    
//                 for (let i = 0; i < partnersToggleElements.length; i++) {
//                     partnersToggleElements[i].classList.add("invisible");
//                 }
//             }
//         });
//     });
// };

// const initializeAssortmentBlockAnimation = () =>{
//     document.addEventListener("DOMContentLoaded", function (event) {
//         const assortmentBtn = document.getElementById("assortment__btn");
//         const assortmentItems = document.getElementsByClassName("assortment__list_item");
//         const assortmentItemsArray = Array.from(assortmentItems);
//         const lastFiveElementsAssormentList = assortmentItemsArray.slice(10, 15);
    
//         assortmentBtn.addEventListener("click", function () {
//             event.preventDefault();
//             assortmentBtn.classList.toggle("active");
    
//             for (let i = 0; i < assortmentItems.length; i++) {
//                 if (assortmentItems[i].classList.contains("invisible")) {
//                     assortmentItems[i].classList.remove("invisible");
//                 }
//             }
    
//             if (assortmentBtn.classList.contains("active")) {
//                 assortmentBtn.innerHTML = "Minder aanbod tonen"
//             } else {
//                 assortmentBtn.innerHTML = "Bekijk het volledige aanbod";
    
//                 for (let i = 0; i < lastFiveElementsAssormentList.length; i++) {
//                     lastFiveElementsAssormentList[i].classList.add("invisible");
//                 }
//             }
//         });
//     });
// };

// const initializeHeaderMobileMenu = () =>{
//     document.addEventListener("DOMContentLoaded", function (event) {
//         const headerMenuBtnClose = document.getElementById('header__menu_mob-btn'),
//             headerNav = document.getElementById('header__nav'),
//             headerLogo = document.getElementById('header__logo'),
//             headerContainer = document.getElementById('header__container'),
//             headerMenuBtnWrap = document.getElementById('header__menu_mob');
    
//         headerMenuBtnClose.addEventListener('click', function (ev) {
//             ev.preventDefault();
    
//             if (headerNav.classList.contains('active')) {
//                 headerNav.classList.remove('active');
//             } else {
//                 headerNav.classList.add('active');
//             };
    
//             if (headerMenuBtnWrap.classList.contains('active')) {
//                 headerMenuBtnWrap.classList.remove('active');
//             } else {
//                 headerMenuBtnWrap.classList.add('active');
//             };
    
//             if (headerMenuBtnClose.classList.contains('active')) {
//                 headerMenuBtnClose.classList.remove('active');
//             } else {
//                 headerMenuBtnClose.classList.add('active');
//             };
    
//             if (headerLogo.classList.contains('active')) {
//                 headerLogo.classList.remove('active');
//             } else {
//                 headerLogo.classList.add('active');
//             }
    
//             if (headerContainer.classList.contains('active')) {
//                 headerContainer.classList.remove('active');
//             } else {
//                 headerContainer.classList.add('active');
//             }
//         });
//     });
// };

const initializeSlider = ()=>{
    // breakpoint where swiper will be destroyed
    let mySwiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 1000,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
        },
        
    });

};

// initializeLazyLoading();
// initializePopUp();
// initializeSmoothlyScroll();
// initializePartnersBlockAnimation();
// initializeAssortmentBlockAnimation();
// initializeHeaderMobileMenu();
initializeSlider();


console.log('work');

// document.getElementsByClassName('contact__form_input-time--input').forEach(e => e.oninput = () => {
//     // Always 2 digits
//     if (e.value.length >= 2) e.value = e.value.slice(0, 2);
//     // 0 on the left (doesn't work on FF)
//     if (e.value.length === 1) e.value = '0' + e.value;
//     // Avoiding letters on FF
//     if (!e.value) e.value = '00';
//   });

const tbilisi = document.getElementById('tbilisi');
const mapInfoMziuri = document.getElementById('mziuri');

tbilisi.addEventListener("mouseover", function(event){
    mapInfoMziuri.classList.toggle('active');
});

let mySwiper = new Swiper('.reviews__list', {
    loop: true,
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 8000,
    },
    pagination: {
        el: '.reviews__list_pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.reviews__list_btnNext',
        prevEl: '.reviews__list_btnPrev',
    },     
});

function faq(){
    let faqItem = document.getElementsByClassName("faq__list_item");

    for (let i = 0; i < faqItem.length; i++) {
        faqItem[i].addEventListener("click", function() {
        this.classList.toggle("active");
        });
    }
}
faq();