const express = require("express");
const app = express();
const port = 3000;

const digitalCV = require("./src/routes/digital-cv");
const administrator = require("./src/routes/administrator");

const path = require("path");

//Static Files

// it’s safer to use the absolute path of the directory that you want to serve:

app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/digital-cv", digitalCV );
app.use("/digital-cv", administrator );

app.get("*", (req, res) => {
  res.status(404).send("Sorry page not found.");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
