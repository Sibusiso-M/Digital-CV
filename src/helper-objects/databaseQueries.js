const databaseQuery = {
  createDatabase: "CREATE DATABASE 'DigitalCVAppDatabase'",
  createAdminTable:
    "CREATE TABLE IF NOT EXISTS administrator (adminId SERIAL, password varchar(256)",
};

const visitorQueries = {
  createVisitorsTable:
    "CREATE TABLE IF NOT EXISTS visitors (visitorId SERIAL, firstName varchar(256), lastName varchar(256), dateOfVisit DATE, timeOfVisit TIME, message varchar(256), PRIMARY KEY(visitorId)",
  addAVisitor:
    "INSERT INTO visitors(firstName, lastName, dateOfVisit, timeOfVisit, email, message) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
};

const adminQueries = {};

module.exports = { databaseQuery, visitorQueries, adminQueries };
