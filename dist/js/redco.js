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

            window.onscroll = () => {
                checkHeaderPosition();
            };
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
                countNumber = function() {
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
                    else {
                        return;
                    }
                };

                window.onscroll = () => {
                    countNumber();
                };
            }
        });
    };

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
    animationCounter();
    stickyHeader();
    btn404BackFunction();
})();




