const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If you want pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: true,
});
const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  slidesPerView: "auto",
  spaceBetween: 0,
  slidesPerView: 1,
  breakpoints: {
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },

  autoplay: true,
});

const services = document.getElementsByClassName("service-btn");
const icons = document.getElementsByClassName("service-icon");
const text = document.getElementsByClassName("service-text");
const menu = document.getElementsByClassName("menu");
const links = document.getElementsByClassName("link");
for (let i = 0; i < services.length; i++) {
  services[i].addEventListener("click", function (e) {
    if (icons[i].classList.contains("fa-plus")) {
      icons[i].classList.remove("fa-plus");
      icons[i].classList.remove("bg-white");
      icons[i].classList.add("fa-minus");
      icons[i].classList.add("text-white");
      text[i].classList.remove("none");
      text[i].classList.add("block");
    } else {
      icons[i].classList.add("fa-plus");
      icons[i].classList.add("bg-white");
      icons[i].classList.remove("fa-minus");
      icons[i].classList.remove("text-white");
      text[i].classList.add("none");
      text[i].classList.remove("block");
    }
  });
}
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    navList[0].classList.remove("flex");
    navList[0].classList.add("none");
  });
}
const navList = document.getElementsByClassName("nav-list");
menu[0].addEventListener("click", () => {
  if (navList[0].classList.contains("none")) {
    navList[0].classList.remove("none");
    navList[0].classList.add("flex");
  } else {
    navList[0].classList.remove("flex");
    navList[0].classList.add("none");
  }
});
