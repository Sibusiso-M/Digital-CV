// Get all the elements for the hamburger
// let navLinks = document.getElementById('.navLinks');
const hamburgerBar = document.getElementById("hamburger-bar");
const hamburgerBarCross = document.getElementById("hamburger-bar-cross");
// let hamburgerBarCross = document.querySelector('#hamburger-bar');
// On click toggle the class on the hamburger

hamburgerBar.classList.add("open");
hamburgerBarCross.classList.add("close");

hamburgerBar.onclick = () => {
  console.log("click hamburgerBar");
  // navLinks.classList.toggle('open');
  hamburgerBar.classList.remove("open");
  hamburgerBar.classList.add("close");
  hamburgerBarCross.classList.add("open");
};

hamburgerBarCross.onclick = () => {
  console.log("click hamburgerBarCross");
  // navLinks.classList.toggle('open');
  hamburgerBarCross.classList.add("close");
  hamburgerBarCross.classList.remove("open");
  hamburgerBar.classList.remove("close");
  hamburgerBar.classList.add("open");
};
