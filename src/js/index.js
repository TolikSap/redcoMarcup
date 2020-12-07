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
    // const mapSvg = document.getElementById("map__img");
     const mapCities = document.querySelectorAll("circle[data-city]");


    // function checkCompliance(element) {
    //     // let dataCity = element.attributes["data-city"].value;
        

    //     // mapLists.forEach((list) => {
    //     //     if (list.attributes["data-city"].value == dataCity){
                
    //     //     }
    //     // });

    //     // for (let i = 0; i <= mapLists.length; i++) {
    //     //     let descrList = mapLists[i];
    //     //     descrList.classList.remove("active");
            
    //     //     if (dataCity == descrList.attributes["data-city"].value) {
                
    //     //         descrList.classList.add("active");
    //     //     }
    //     // }


    // }

    // function addMultipleEventListeners (element) {
    //     ["click", "ontouchstart", "mouseover"].forEach(evt => {
    //         element.addEventListener(evt, checkCompliance(element), false);
    //     });
    // }

    mapCities.forEach((element) => {
        element.addEventListener("mouseover", function(element){
            console.log(element);
        }, false);
    });


};

showMapDescr();
// const tbilisi = document.getElementById("tbilisi");
// const mapInfoMziuri = document.getElementById("mziuri");

// tbilisi.addEventListener("mouseover", function(){
//     mapInfoMziuri.classList.toggle("active");
// });

// tbilisi.addEventListener("click touchstart", function(){
//     mapInfoMziuri.classList.toggle("active");
// });



