import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const initializeSlider = () => new Swiper(".swiper-container", {
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

initializeSlider();

const showMapDescr = () => {
     const mapCities = document.querySelectorAll("circle[data-city]");
     const mapLists = document.getElementsByClassName("map__list");

    mapCities.forEach((element) => {
        element.addEventListener("mouseover", function(){
            for (let i = 0; i < mapLists.length; i++){
                mapLists[i].classList.remove("active");

                if (element.attributes["data-city"].value == mapLists[i].attributes["data-city"].value){
                    mapLists[i].classList.add("active");
                }
            }
        }, false);
        element.addEventListener("click", function(){
            for (let i = 0; i < mapLists.length; i++){
                mapLists[i].classList.remove("active");

                if (element.attributes["data-city"].value == mapLists[i].attributes["data-city"].value){
                    mapLists[i].classList.add("active");
                }
            }
        }, false);
        element.addEventListener("touchstart", function(){
            for (let i = 0; i < mapLists.length; i++){
                mapLists[i].classList.remove("active");

                if (element.attributes["data-city"].value == mapLists[i].attributes["data-city"].value){
                    mapLists[i].classList.add("active");
                }
            }
        }, false);
    });

};

showMapDescr();
