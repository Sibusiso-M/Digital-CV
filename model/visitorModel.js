const mongoose = require("mongoose");

const visitorScheme = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfVisit: { type: String, required: true },
  timeOfVisit: { type: String, required: true },
  emailAddress: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("VisitorsModel", visitorScheme);
