const express = require("express");
const app = express();
const port = 3000;

const digitalCV = require("./src/routes/digital-cv");
const administrator = require("./src/routes/administrator");

const path = require("path");

const bodyParser = require("body-parser");
const { createTable } = require("./src/js/new-visitor");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));
app.use("", express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "src")));
app.use(express.json());

app.use("/digital-cv", digitalCV);
app.use("/digital-cv", administrator);

app.get("*", (request, response) => {
  res.status(404).send("Sorry page not found.");
});

createTable();
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
