const express = require("express");
const router = express.Router();
const path = require("path");

const publicPath = path.join(__dirname, "../../index.html");

const { addANewVisitor } = require("../js/new-visitor");

const {
  validateFirstName,
  validateLastName,
  validateEmail,
} = require("../helper-functions/new-visitor-utilities");

router.use(express.static(publicPath));

const sendFileHandler = (fileName) => (request, response) => {
  response.sendFile(fileName, { root: publicPath });
};

router.get("/", sendFileHandler("index.html"));

router.post("/submit", async (request, response) => {
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

  await addANewVisitor({
    firstName,
    lastName,
    dateOfVisit,
    timeOfVisit,
    message,
    emailAddress,
  })
    .then((result) => {
      const message = {
        success: true,
        data: JSON.stringify(result),
      };

      response.status(201).json(message);
    })
    .catch((error) => {
      response.status(500).json({
        success: false,
        message: "Failed to create contact (visitor)",
        error: error.message,
      });
    });
});

module.exports = router;
