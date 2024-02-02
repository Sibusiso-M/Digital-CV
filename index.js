document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-me-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      submitForm();
      // resetFormFields();
    });

  document.getElementById("successMessage").style.display = "none";
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

  const navMenuHide = () => {
    hamburgerBarCross.classList.add("close");
    hamburgerBarCross.classList.remove("open");
    hamburgerBar.classList.remove("close");
    hamburgerBar.classList.add("open");
    navMenu.classList.remove("open");
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

  function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const message = document.getElementById("message").value;

    const currentDateAndTime = new Date();

    const year = currentDateAndTime.getFullYear();
    const month = currentDateAndTime.getMonth() + 1;
    const day = currentDateAndTime.getDate();

    const hours = currentDateAndTime.getHours();
    const minutes = currentDateAndTime.getMinutes();
    const seconds = currentDateAndTime.getSeconds();
    const dateOfVisit = `${year}-${month}-${day}`;
    const timeOfVisit = `${hours}:${minutes}:${seconds}`;

    // const formData = {
    //   firstName,
    //   lastName,
    //   emailAddress,
    //   message,
    //   dateOfVisit,
    //   timeOfVisit
    // };

    const formData = new FormData(document.querySelector("#contact-me-form"));
    formData.append("dateOfVisit", dateOfVisit);
    formData.append("timeOfVisit", timeOfVisit);

    console.log("form submit fn");
    console.log(formData.entries());

    fetch("https://sibusiso-mdlovu-digital-cv.netlify.app/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData.entries(),
    })
      .then((response) => response.json())
      .then((data) => {
        const successMessage = (document.getElementById(
          "successMessage"
        ).style.display = "flex");
        console.log("data sum");
        if (data.success) {
          successMessage.innerHTML =
            "Form submitted successfully!⚡ We will be in touch. 🤝🏼";
        } else {
          successMessage.innerHTML =
            "❌ Form submission failed, please try again.";
          console.error(`Form submission failed: ${data.message}`);
        }

        setTimeout(() => {
          successMessage.innerHTML = "";
        }, 4000);
      })
      .catch((error) => {
        console.error(`Contact Form submission failed: ${error}`);
      });
  }

  const digitalCVMenu = document.getElementById("digital-cv-nav");

  let digitalCVMenuHeight = digitalCVMenu.offsetHeight;

  const digitalCVBody = document.getElementById("digital-cv-body");
  digitalCVBody.style.position = "relative";

  digitalCVBody.style.top = digitalCVMenuHeight + "px";

  const visitorClearFieldsButton = document.getElementById(
    "visitorClearFieldsButton"
  );

  visitorClearFieldsButton.onclick = () => {
    resetFormFields();
  };

  function resetFormFields() {
    document.getElementById("contact-me-form").reset();
  }
});
