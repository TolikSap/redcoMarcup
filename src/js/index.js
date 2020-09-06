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

initializeSlider();

const tbilisi = document.getElementById('tbilisi');
const mapInfoMziuri = document.getElementById('mziuri');

tbilisi.addEventListener("mouseover", function(event){
    mapInfoMziuri.classList.toggle('active');
});

tbilisi.addEventListener('click touchstart', function(event){
    mapInfoMziuri.classList.toggle('active');
})

$(document).on('touchstart', function() {
    documentClick = true;
});
$(document).on('touchmove', function() {
    documentClick = false;
});
$('#tbilisi').on('click touchend', function(event) {
    if (event.type == "click") documentClick = true;
    if (documentClick){
        console.log(this)
    }
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

const headerContainer = document.getElementById('header__container'),
      headerMenuBtnClose = document.getElementById('header__menu_mob-btn'),
      headerNav = document.getElementById('header__nav'),
      headerLogo = document.getElementById('header__logo'),
      headerMenuBtnWrap = document.getElementById('header__menu_mob');


const initializeHeaderMobileMenu = () =>{
    document.addEventListener("DOMContentLoaded", function (event) {

        headerMenuBtnClose.addEventListener('click', function (ev) {
            ev.preventDefault();
    
            if (headerNav.classList.contains('active')) {
                headerNav.classList.remove('active');
            } else {
                headerNav.classList.add('active');
            };
    
            if (headerMenuBtnWrap.classList.contains('active')) {
                headerMenuBtnWrap.classList.remove('active');
            } else {
                headerMenuBtnWrap.classList.add('active');
            };
    
            if (headerMenuBtnClose.classList.contains('active')) {
                headerMenuBtnClose.classList.remove('active');
            } else {
                headerMenuBtnClose.classList.add('active');
            };
    
            if (headerLogo.classList.contains('active')) {
                headerLogo.classList.remove('active');
            } else {
                headerLogo.classList.add('active');
            }
    
            if (headerContainer.classList.contains('active')) {
                headerContainer.classList.remove('active');
            } else {
                headerContainer.classList.add('active');
            }
        });
    });
};

initializeHeaderMobileMenu();