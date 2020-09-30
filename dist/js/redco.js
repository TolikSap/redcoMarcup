(() => {
    const stickyHeader = () => {
        document.addEventListener("DOMContentLoaded", function (event) {
            const body = document.body;
            let lastScroll = 0;
            let sticky = header.offsetTop;

            function checkHeaderPosition() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            };

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

            window.onscroll = e => {
                checkHeaderPosition();
            };
        });
    };
    stickyHeader();

    const faq = () => {
        let faqItem = document.getElementsByClassName("faq__list_item");

        if (typeof (faqItem) != 'undefined' && faqItem != null) {
            for (let i = 0; i < faqItem.length; i++) {
                faqItem[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                });
            }
        }
    };
    faq();

    const progressBar = () => {
        const progressBarItems = Array.from(document.getElementsByClassName('progressBar__list_item'));

        if (typeof (progressBarItems) != 'undefined' && progressBarItems != null) {
            function changeProgressBarSize() {
                $('.progressBar__list_item.active').removeClass("active");
                $(this).addClass("active");
                let step;

                if ($(window).width() > 767) {
                    if ($(this).index() > 3 && $(this).index() <= 0) {
                        return;
                    } else if ($(this).index() > 0) {
                        step = $(this).index() * 20 + '%';
                        $('.progressBar__line').css('width', step);
                    }
                } else {
                    if ($(this).index() > 3 && $(this).index() <= 0) {
                        return;
                    } else if ($(this).index() > 0) {
                        step = $(this).index() * 20 + '%';
                        $('.progressBar__line').css('height', step);
                    }
                }
            }

            progressBarItems.forEach(function (el) {
                el.addEventListener("touchstart", changeProgressBarSize, { passive: true });
                el.addEventListener("mousedown", changeProgressBarSize, { passive: true });
                el.addEventListener("touchmove", changeProgressBarSize, { passive: true });
                el.addEventListener("mousemove", changeProgressBarSize, { passive: true });
            });
        }
    }
    progressBar();

    const initializeHeaderMobileMenu = () => {
        document.addEventListener("DOMContentLoaded", function (event) {
            const headerContainer = document.getElementById('header__container'),
                  headerMenuBtn = document.getElementById('header__menu_mob-btn'),
                  headerNav = document.getElementById('header__nav'),
                  headerLogo = document.getElementById('header__logo'),
                  headerMenuBtnWrap = document.getElementById('header__menu_mob');

            headerMenuBtn.addEventListener('click', function (ev) {
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

                if (headerMenuBtn.classList.contains('active')) {
                    headerMenuBtn.classList.remove('active');
                } else {
                    headerMenuBtn.classList.add('active');
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

    const animationCounter = () => {
        document.addEventListener("DOMContentLoaded", function (event) {
            const counterContainer = document.getElementById('counterContainer');

            if (typeof (counterContainer) != 'undefined' && counterContainer != null) {
                function countNumber(){
                    let counter = 0;
                let offsetToTop = $('#counterContainer').offset().top - window.innerHeight;

                if (counter == 0 && $(window).scrollTop() > offsetToTop) {
                    $('.counterValue').each(function() {
                      var $this = $(this),
                        countTo = $this.attr('data-count');
                      $({
                        countNum: $this.text()
                      }).animate({
                          countNum: countTo
                        },
                        {
                          duration: 3000,
                          easing: 'swing',
                          step: function() {
                            $this.text(Math.floor(this.countNum));
                          },
                          complete: function() {
                            $this.text(this.countNum);
                          }
                
                        });
                    });
                    counter = 1;
                }
                }

                window.onscroll = e => {
                    countNumber();
                };
            }
        });
    };
    animationCounter();
})();
