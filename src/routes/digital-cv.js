const express = require("express");
const router = express.Router();
const path = require("path");

const publicPath = path.join(__dirname, "../../index.html");

const VisitorsModel = require("../../model/visitorModel.js");

const {
  validateFirstName,
  validateLastName,
  validateEmail,
} = require("../helper-functions/new-visitor-utilities");

router.use(express.static(publicPath));

const sendFileHandler = (fileName) => (request, response) => {
  response.sendFile(fileName, { root: publicPath });
};

router.get("https://sibusiso-mdlovu-digital-cv.netlify.app/", sendFileHandler("index.html"));

router.post("https://sibusiso-mdlovu-digital-cv.netlify.app/submit", async (request, response) => {
  const {
    firstName,
    lastName,
    message,
    emailAddress,
    dateOfVisit,
    timeOfVisit,
  } = request.body;

  validateFirstName(firstName);
  validateLastName(lastName);
  validateEmail(emailAddress);

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
});

module.exports = router;
