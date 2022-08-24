let nav_bar = document.querySelector(".navbar");
window.onscroll = () => {
    if(window.scrollY > 10){
        nav_bar.classList.add("active")
    }else{
        nav_bar.classList.remove("active")
    }
};

let btn_chnage = document.getElementById("custom-switch");
let icon_them = document.getElementById("icon_them");
let body_site = document.getElementById("body");

const switchTheme = () => {
    body_site.classList.add(localStorage.getItem("theme"));
    if(localStorage.getItem("theme") === "dark"){
      icon_them.classList.add("fa-sun")
    }else {
      icon_them.classList.add("fa-moon")

    }
    if(window.scrollY > 10){
        nav_bar.classList.add("active")
    }else{
        nav_bar.classList.remove("active")
    }
    
}
switchTheme();

btn_chnage.addEventListener("click", () => {
    if (body_site.classList.contains("light")) {
        body_site.classList.toggle("dark");
        body_site.classList.toggle("light");
        localStorage.setItem("theme", "dark");
        
        icon_them.classList.add("fa-sun");
        icon_them.classList.remove("fa-moon");

    } else {
        body_site.classList.toggle("light");
        body_site.classList.toggle("dark");
        localStorage.setItem("theme", "light");
        icon_them.classList.remove("fa-sun");
        icon_them.classList.add("fa-moon");
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
