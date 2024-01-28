const express = require("express");
const router = express.Router();
const path = require("path");

const publicPath = path.join(__dirname, "./../../public");

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

router.post("/new_visitor_post", async (request, response) => {
  console.log("new visitor post attempted");
  console.log(request.body);

  const { firstName, lastName, message, emailAddress } = request.body;

  const date = new Date().toLocaleString([], { hour12: false });
  const [dateOfVisit, timeOfVisit] = date
    .split(",")
    .map((dateValues) => dateValues.trim());

  validateFirstName(firstName);
  validateLastName(lastName);
  validateEmail(emailAddress);

  const newVisitor = await addANewVisitor(
    firstName,
    lastName,
    dateOfVisit,
    timeOfVisit,
    message,
    emailAddress
  );

  newVisitor
    .then((result) => {
      response.status(201).send({
        success: "true",
        message: "stored contact (visitor) successfully",
        result: result[0],
      });
    })
    .catch((error) => {
      response.status(500).send({
        success: false,
        message: "Failed to create contact (visitor)",
        error: error.message,
      });
    });

  response.send("hello");
});

module.exports = router;
