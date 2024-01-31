const visitorQueries = {
  createVisitorsTable:
    "CREATE TABLE IF NOT EXISTS visitors (visitorId SERIAL PRIMARY KEY, firstName varchar(256), lastName varchar(256), dateOfVisit DATE, timeOfVisit TIME, message varchar(256), emailAddress varchar(320));",
  addAVisitor:
    "INSERT INTO visitors(firstName, lastName, dateOfVisit, timeOfVisit, emailAddress, message) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
};

const adminQueries = {};

module.exports = { databaseQuery, visitorQueries, adminQueries };
