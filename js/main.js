const header = document.querySelector(".header-loopstudios");
const btnHamburger = document.querySelector(".header-loopstudios__hamburger");
const subMenu = document.querySelector(".header-loopstudios-sub-menu");
const wrapper = document.querySelector(".wrapper-header");
let windowWidth = window.innerWidth;

subMenu.style.display = "none";
header.style.backgroundColor = "transparent";

btnHamburger.addEventListener("click", () => {
  anime({
    targets: ".header-loopstudios-sub-menu",
    translateY: [-300, 0],
    easing: "easeInOutExpo",
  });

  if (header.style.backgroundColor == "transparent") {
    header.style.backgroundColor = "black";
  } else {
    header.style.backgroundColor = "transparent";
  }

  if (subMenu.style.display == "none") {
    subMenu.style.display = "flex";
  } else {
    subMenu.style.display = "none";
  }

  if (btnHamburger.classList.contains("close")) {
    btnHamburger.classList.remove("close");
  } else {
    btnHamburger.classList.add("close");
  }
});

window.onresize = () => {
  windowWidth = window.innerWidth;
  // console.log("win:", windowWidth);
  if (windowWidth >= 767) {
    header.style.backgroundColor = "transparent";
    btnHamburger.style.display = "none";
    subMenu.style.display = "none";
    btnHamburger.classList.remove("close");
  } else {
    btnHamburger.style.display = "block";
  }
};
