
const stickyHeader = () =>{
    document.addEventListener("DOMContentLoaded", function (event) {
        window.onscroll = e => {
            checkHeaderPosition();
        };

        const body = document.body;
        let lastScroll = 0;
        let sticky = header.offsetTop;
        
        function checkHeaderPosition (){
            if (window.pageYOffset > sticky){
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
    });
}

stickyHeader();

function faq(){
    let faqItem = document.getElementsByClassName("faq__list_item");

    for (let i = 0; i < faqItem.length; i++) {
        faqItem[i].addEventListener("click", function() {
        this.classList.toggle("active");
        });
    }
}
faq();