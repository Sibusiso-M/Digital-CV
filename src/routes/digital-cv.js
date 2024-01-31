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


  // const currentDateAndTime = new Date();

  // const year = currentDateAndTime.getFullYear();
  // const month = currentDateAndTime.getMonth() + 1;
  // const day = currentDateAndTime.getDate();

  // const hours = currentDateAndTime.getHours();
  // const minutes = currentDateAndTime.getMinutes();
  // const seconds = currentDateAndTime.getSeconds();
  // const dateOfVisit = `${year}-${month}-${day}`;
  // const timeOfVisit = `${hours}:${minutes}:${seconds}`;

  // validateFirstName(firstName);
  // validateLastName(lastName);
  // validateEmail(emailAddress);

  await addANewVisitor({
    firstName,
    lastName,
    dateOfVisit,
    timeOfVisit,
    message,
    emailAddress,
  })
    .then((result) => {
      // const row = result[0];
      // response.locals.row = row;
      // response.render("/thank_you", {row});
      // const message = {
      //   success: true,
      //   data: JSON.stringify(result),
      // };

      // response.status(201).send(message);
      response.status(200).send("Data inserted successfully");
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
