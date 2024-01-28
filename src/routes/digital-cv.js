const express = require("express");
const router = express.Router();
const path = require("path");

const publicPath = path.join(__dirname, "./../../public");

const addANewVisitor = require("../helper-functions/new-visitor-utilities");

router.use(express.static(publicPath));

const sendFileHandler = (fileName) => (request, response) => {
  response.sendFile(fileName, { root: publicPath });
};

router.get("/", sendFileHandler("index.html"));

router.post("/new_visitor_post", async (request, response) => {
  console.log("new visitor post attempted");

  const {
    firstName,
    lastName,
    dateOfVisit,
    timeOfVisit,
    message,
    emailAddress,
  } = request.body;

  await addANewVisitor({
    firstName,
    lastName,
    dateOfVisit,
    timeOfVisit,
    message,
    emailAddress,
  })
    .then(() => {
      response.status(201).send({
        success: "true",
        message: "stored contact (visitor) successfully",
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
