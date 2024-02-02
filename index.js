document.addEventListener("DOMContentLoaded", function () {
document
  .getElementById("contact-me-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    submitForm();
    resetFormFields();
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

async function submitForm() {
  const currentDateAndTime = new Date();

  const year = currentDateAndTime.getFullYear();
  const month = currentDateAndTime.getMonth() + 1;
  const day = currentDateAndTime.getDate();

  const hours = currentDateAndTime.getHours();
  const minutes = currentDateAndTime.getMinutes();
  const seconds = currentDateAndTime.getSeconds();
  const dateOfVisit = `${year}-${month}-${day}`;
  const timeOfVisit = `${hours}:${minutes}:${seconds}`;
  
  validateFirstName(firstName);
  validateLastName(lastName);
  validateEmail(emailAddress);
  
  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    emailAddress: document.getElementById("emailAddress").value,
    dateOfVisit: dateOfVisit,
    timeOfVisit: timeOfVisit,
  };

  const visitor = new VisitorsModel({
    firstName,
    lastName,
    message,
    emailAddress,
    dateOfVisit,
    timeOfVisit,
  });

  try {
    await visitor.save();

    response.status(201).json({
      success: true,
      message: "Form submission successful",
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: `Form submit unsuccessful ${error.message}`,
    });
  }
  fetch("https://sibusiso-mdlovu-digital-cv.netlify.app/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json)
    .then((data) => {
      const successMessage = (document.getElementById(
        "successMessage"
      ).style.display = "flex");
      if (data.success) {
        successMessage.innerHTML =
          "Form submitted successfully!⚡ We will be in touch. 🤝🏼";
      } else {
        successMessage.innerHTML =
          "❌ Form submission failed, please try again.";
        console.error(`Form submission failed: ${data}`);
      }

      setTimeout(() => {
        successMessage.innerHTML = null;
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
