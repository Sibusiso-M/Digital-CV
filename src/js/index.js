// Get all the elements for the hamburger
const hamburgerBar = document.getElementById("hamburger-bar");
const hamburgerBarCross = document.getElementById("hamburger-bar-cross");
const navMenu = document.getElementById("nav-menu");

// On click toggle the class on the hamburger

hamburgerBar.classList.add("open");
hamburgerBarCross.classList.add("close");
navMenu.classList.add("close");

hamburgerBar.onclick = () => {
  hamburgerBar.classList.remove("open");
  hamburgerBar.classList.add("close");
  hamburgerBarCross.classList.add("open");
  navMenu.classList.add("open");
};

hamburgerBarCross.onclick = () => {
  hamburgerBarCross.classList.add("close");
  hamburgerBarCross.classList.remove("open");
  hamburgerBar.classList.remove("close");
  hamburgerBar.classList.add("open");
  navMenu.classList.remove("open");
};
