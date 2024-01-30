document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBar = document.getElementById("hamburger-bar");
  const hamburgerBarCross = document.getElementById("hamburger-bar-cross");
  const navMenu = document.getElementById("nav-menu");

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
    navMenuHide();
  };

  let navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenuHide();
    });
  });

  const navMenuHide = () => {
    hamburgerBarCross.classList.add("close");
    hamburgerBarCross.classList.remove("open");
    hamburgerBar.classList.remove("close");
    hamburgerBar.classList.add("open");
    navMenu.classList.remove("open");
  };

  const visitorSubmitButton = document.getElementById("visitorSubmitButton");

  visitorSubmitButton.onclick = () => {
    // showInfoProcessingSection();
    // hideFormSection();
    // postData();
  };

  const showInfoProcessingSection = () => {
    document.getElementById("info-processing-section").style.display = "flex";
  };

  const hideFormSection = () => {
    document.getElementById("form-section").style.display = "none";
  };

  const showFormSection = () => {
    document.getElementById("form-section").style.display = "flex";
  };

  const visitorClearFieldsButton = document.getElementById(
    "visitorClearFieldsButton"
  );

  function scrollToSection(event, sectionId) {
    event.preventDefault();
    const navHeight = document.querySelector("nav-menu").offsetHeight;
    console.log(navHeight);
    const section = document.getElementById(sectionId);
    const sectionTop = section.offsetTop - navHeight;
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }

  // window.onload = function () {
  //   // Prevent default form submission on window load
  //   document.getElementById("contact-me-form").onsubmit(function (event) {
  //     event.preventDefault();
  //   });

  //   // Attach click event to the submit button
  //   document
  //     .getElementById("visitorSubmitButton")
  //     .addEventListener("click", function () {

  //     });

  //   // Add any other event listeners or logic as needed
  // };

  //hide nave when scrolling

  const digitalCVMenu = document.getElementById("digital-cv-nav");

  const digitalCVMenuHeight = digitalCVMenu.offsetHeight;

  let lastScrollY = window.scrollY;

  window.onscroll = function () {
    const currentScrollY = window.scrollY;

    if (lastScrollY < currentScrollY) {
      digitalCVMenu.classList.add("hide");
    } else {
      digitalCVMenu.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
  };

  const digitalCVBody = document.getElementById("digital-cv-body");
  digitalCVBody.style.position = "relative";

  digitalCVBody.style.top = digitalCVMenuHeight + "px";
});
