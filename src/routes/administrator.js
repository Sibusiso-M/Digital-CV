const express = require("express");
const router = express.Router();
const path = require("path");

const publicPath = path.join(__dirname, "./../../public");

router.use(express.static(publicPath));

const sendFileHandler = (fileName) => (request, response) => {
  response.sendFile(fileName, { root: publicPath });
};

router.get("/administrator", sendFileHandler("administrator.html"));

router.post("/administrator", (request, response) => {
  console.log("post of Admin");
  response.send("inside post");
});

module.exports = router;
