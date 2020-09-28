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

