const databaseQuery = {
  createDatabase: "",
  createTable:
    "CREATE TABLE IF NOT EXISTS visitors (visitorId SERIAL, firstName varchar(256), lastName varchar(256), date_of_visit DATE, time_of_visit TIME, message varchar(256), PRIMARY KEY(visitorId)",
};

const contactQueries = {};

const adminQueries = {};
