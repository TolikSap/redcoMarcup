// eslint-disable-next-line no-unused-vars
import Swiper, { Navigation, Autoplay } from "swiper";
Swiper.use([Navigation, Autoplay]);

const initializeSlider = () => new Swiper(".swiper-container", {
    speed: 2000,
    loop: true,
    slidesPerView: 1,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    preventClicks: false,
    preventClicksPropagation: false,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel: {
        invert: true,
    },
    autoplay:{
        delay: 6000,
    },
});


initializeSlider();

const showMapDescr = () => {
    const mapCities = document.querySelectorAll("circle[data-city]");
    const mapLists = document.getElementsByClassName("map__list");
    const mapImg = document.getElementById("map__img");
    const mapDistrictActive = document.getElementById("startedPath");

    mapCities.forEach((element) => {
        element.addEventListener("mouseover", function () {
            for (let i = 0; i < mapLists.length; i++) {
                mapLists[i].classList.remove("active");

                if (element.attributes["data-city"].value == mapLists[i].attributes["data-city"].value) {
                    mapLists[i].classList.add("active");
                }
            }
        }, false);
        element.addEventListener("click", function () {
            for (let i = 0; i < mapLists.length; i++) {
                mapLists[i].classList.remove("active");

                if (element.attributes["data-city"].value == mapLists[i].attributes["data-city"].value) {
                    mapLists[i].classList.add("active");
                }
            }
        }, false);
        element.addEventListener("touchstart", function () {
            for (let i = 0; i < mapLists.length; i++) {
                mapLists[i].classList.remove("active");

                if (element.attributes["data-city"].value == mapLists[i].attributes["data-city"].value) {
                    mapLists[i].classList.add("active");
                }
            }
        }, false);
    });

    mapImg.addEventListener("mouseover", function () {
        mapDistrictActive.classList.remove("active");
    });
};

showMapDescr();
