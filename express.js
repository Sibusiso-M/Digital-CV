require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const digitalCV = require("./src/routes/digital-cv");

const path = require("path");

const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const connection = mongoose.connection;

connection
  .once("open", function () {
    console.log("connect to the database");
  })
  .on("error", function () {
    console.log("Connect Error:", error);
  });

const { error } = require("console");

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());
app.use(express.static("."));
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());

app.use("", digitalCV);

app.get("*", (request, response) => {
  response.status(404).send("Sorry page not found.");
});

app.listen(port);
