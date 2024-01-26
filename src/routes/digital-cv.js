const express = require("express");
const router = express.Router();
const path = require("path");

const publicPath = path.join(__dirname, "./../../public");

router.use(express.static(publicPath));

const sendFileHandler = (fileName) => (request, response) => {
  response.sendFile(fileName, { root: publicPath });
};

router.get("/", sendFileHandler("index.html"));
router.post("/new_visitor_post", (request, response) => {
  console.log("new visitor post attempted");
  response.send("hello");
});

module.exports = router;
