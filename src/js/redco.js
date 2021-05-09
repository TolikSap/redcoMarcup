var $ = jQuery.noConflict();

$(document).ready(function () {
    // jQuery code is in here
});

// eslint-disable-next-line no-unused-vars
import Swiper, { Navigation, Autoplay } from "swiper";
Swiper.use([Navigation, Autoplay]);

(() => {
    const stickyHeader = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const header = document.getElementById("header");
            const body = document.body;
            let lastScroll = 0;
            let sticky = header.offsetTop;

            function checkHeaderPosition() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }

            window.addEventListener("scroll", () => {
                const currentScroll = window.pageYOffset;

                if (currentScroll == 0 || currentScroll < 0) {
                    body.classList.remove("scroll-up");
                    body.classList.add("default-state");
                    return;
                }

                if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                    // down
                    body.classList.remove("scroll-up");
                    body.classList.remove("default-state");
                    body.classList.add("scroll-down");
                } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
                    // up
                    body.classList.remove("scroll-down");
                    body.classList.remove("default-state");
                    body.classList.add("scroll-up");
                }
                lastScroll = currentScroll;
            });

            window.addEventListener("scroll", () => {
                checkHeaderPosition();
            });
        });
    };

    const faq = () => {
        let faqItem = document.getElementsByClassName("faq__list_item");

        if (typeof (faqItem) != "undefined" && faqItem != null) {
            for (let i = 0; i < faqItem.length; i++) {
                faqItem[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                });
            }
        }
    };

    const progressBar = () => {
        const progressBarItems = Array.from(document.getElementsByClassName("progressBar__list_item"));
        let changeProgressBarSize;

        if (typeof (progressBarItems) != "undefined" && progressBarItems != null) {
            changeProgressBarSize = function () {
                $(".progressBar__list_item.active").removeClass("active");
                $(this).addClass("active");
                let step;

                if ($(window).width() > 767) {
                    if ($(this).index() > 3 && $(this).index() <= 0) {
                        return;
                    } else if ($(this).index() > 0) {
                        step = $(this).index() * 20 + "%";
                        $(".progressBar__line").css("width", step);
                    }
                } else {
                    if ($(this).index() > 3 && $(this).index() <= 0) {
                        return;
                    } else if ($(this).index() > 0) {
                        step = $(this).index() * 20 + "%";
                        $(".progressBar__line").css("height", step);
                    }
                }
            };

            progressBarItems.forEach(function (el) {
                el.addEventListener("touchstart", changeProgressBarSize, { passive: true });
                el.addEventListener("mousedown", changeProgressBarSize, { passive: true });
                el.addEventListener("touchmove", changeProgressBarSize, { passive: true });
                el.addEventListener("mousemove", changeProgressBarSize, { passive: true });
            });
        }
    };

    const initializeHeaderMobileMenu = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const headerContainer = document.getElementById("header__container"),
                headerMenuBtn = document.getElementById("header__menu_mob-btn"),
                headerNavList = document.getElementById("nav__list"),
                headerMenuBtnWrap = document.getElementById("header__menu_mob");

            headerMenuBtn.addEventListener("click", function (ev) {
                ev.preventDefault();

                if (headerNavList.classList.contains("active")) {
                    headerNavList.classList.remove("active");
                } else {
                    headerNavList.classList.add("active");
                }

                if (headerMenuBtnWrap.classList.contains("active")) {
                    headerMenuBtnWrap.classList.remove("active");
                } else {
                    headerMenuBtnWrap.classList.add("active");
                }

                if (headerMenuBtn.classList.contains("active")) {
                    headerMenuBtn.classList.remove("active");
                } else {
                    headerMenuBtn.classList.add("active");
                }

                if (headerContainer.classList.contains("active")) {
                    headerContainer.classList.remove("active");
                } else {
                    headerContainer.classList.add("active");
                }
            });
        });
    };

    const animationCounter = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const counterContainer = document.getElementById("counterContainer");
            let countNumber;

            if (typeof (counterContainer) != "undefined" && counterContainer != null) {
                countNumber = function () {
                    let counter = 0;
                    let offsetToTop = $("#counterContainer").offset().top - window.innerHeight;

                    if (counter == 0 && $(window).scrollTop() > offsetToTop) {
                        $(".counterValue").each(function () {
                            var $this = $(this),
                                countTo = $this.attr("data-count");
                            $({
                                countNum: $this.text()
                            }).animate({
                                countNum: countTo
                            },
                                {
                                    duration: 3000,
                                    easing: "swing",
                                    step: function () {
                                        $this.text(Math.floor(this.countNum));
                                    },
                                    complete: function () {
                                        $this.text(this.countNum);
                                    }

                                });
                        });
                        counter = 1;
                    }
                };

                window.addEventListener("scroll", () => {
                    countNumber();
                });
            }
        });
    };
    animationCounter();

    const btn404BackFunction = () => {
        document.addEventListener("DOMContentLoaded", function (event) {
            const btnBack = document.getElementById("pageNotFound__nav_btn-back");

            if (typeof (btnBack) != "undefined" && btnBack != null) {
                event.preventDefault();
                btnBack.addEventListener("click", function () {
                    window.history.back();
                });
            }
            else {
                return;
            }
        });
    };

    faq();
    progressBar();
    initializeHeaderMobileMenu();
    stickyHeader();
    btn404BackFunction();
})();

if (document.body.classList.contains("main-page")) {

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
        autoplay: {
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
}

if (document.body.classList.contains("contacts")) {
    (() => {
        // let curLocation;
        /*global google*/
        /* eslint-disable no-unused-vars */
        let map;

        function initMap(lat_ = 0, lng_ = 0) {
            map = new google.maps.Map(document.getElementById("map"), {
                center: {
                    lat: lat_,
                    lng: lng_,
                },
                zoom: 7,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            const marker = new google.maps.Marker({
                center: {
                    lat: lat_,
                    lng: lng_
                },
                map: map,
            });

            const offices = [
                {
                    position: new google.maps.LatLng(41.73263, 44.6984256),
                },
                {
                    position: new google.maps.LatLng(50.4021351, 30.2518243),
                },
                {
                    position: new google.maps.LatLng(41.6223982, 41.5823478),
                },
                {
                    position: new google.maps.LatLng(55.5807419, 36.8237679),
                }
            ];

            // Create markers.
            for (let i = 0; i < offices.length; i++) {
                const marker = new google.maps.Marker({
                    position: offices[i].position,
                    icon: "img/icons/marker.svg",
                    map: map,
                });
            }

            jQuery("#map").show();

            google.maps.event.trigger(map, "resize");
        }

        /* eslint-enable no-unused-vars */

        const btnGeorgia = document.getElementById("contacts__mapController_btn-Georgia");
        const btnUkraine = document.getElementById("contacts__mapController_btn-Ukraine");
        const btnRussia = document.getElementById("contacts__mapController_btn-Russia");


        btnUkraine.addEventListener("click", function () {
            // curLocation = {lat: 50.4016974, lng: 30.2518283};
            initMap(50.4021351, 30.2518243);
            $(".contacts__mapController_btn.active").removeClass("active");
            $(this).addClass("active");
            $(".contacts__info_item.active").removeClass("active");
            $(".contacts__info_item.Ukraine").addClass("active");
            $(".contacts__intro").removeClass("Georgia russia");
            $(".contacts__intro").addClass("Ukraine");
        });

        btnGeorgia.addEventListener("click", function () {
            // curLocation = {lat: 50.4016974, lng: 30.251828};
            initMap(41.73263, 44.6984256);
            $(".contacts__mapController_btn.active").removeClass("active");
            $(this).addClass("active");
            $(".contacts__info_item.active").removeClass("active");
            $(".contacts__info_item.Georgia").addClass("active");
            $(".contacts__intro").removeClass("Ukraine russia");
            $(".contacts__intro").addClass("Georgia");
        });

        btnRussia.addEventListener("click", function () {
            // curLocation = {lat: 55.5807419, lng: 36.8237679};
            initMap(55.5807419, 36.8237679);
            $(".contacts__mapController_btn.active").removeClass("active");
            $(this).addClass("active");
            $(".contacts__info_item.active").removeClass("active");
            $(".contacts__info_item.Russia").addClass("active");
            $(".contacts__intro").removeClass("Ukraine Georgia");
            $(".contacts__intro").addClass("russia");
        });

        jQuery(document).ready(function () {
            // Show google map for first adrress
            initMap(41.73263, 44.6984256);
        });

    })();
}
