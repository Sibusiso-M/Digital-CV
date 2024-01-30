const express = require("express");
const app = express();
const port = 3000;

const digitalCV = require("./src/routes/digital-cv");
const administrator = require("./src/routes/administrator");

const path = require("path");

const bodyParser = require("body-parser");
const { createTable } = require("./src/js/new-visitor");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("."));
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

app.use("", digitalCV);
app.use("", administrator);

app.get("*", (request, response) => {
  response.status(404).send("Sorry page not found.");
});

// createTable();
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
