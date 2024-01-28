const { visitorQueries } = require("../helper-objects/databaseQueries");
const { pool } = require("../configurations");
const { errorMessage } = require("../helper-objects/error-messages");

const queryFunctions = async (query, values = []) => {
  try {
    if (query === undefined) throw new Error(errorMessage.emptyQuery);
    const { rows } = await pool.query(query, values);
    return rows;
  } catch (error) {
    console.log("Error executing query:", error.message);
    throw error;
  }
};

const createTable = async () => {
  console.log("create table attempted");
  return await queryFunctions(visitorQueries.createVisitorsTable);
};

const addANewVisitor = async (
  firstName,
  lastName,
  dateOfVisit,
  timeOfVisit,
  emailAddress,
  message
) => {
  return queryFunctions(visitorQueries.addAVisitor, [
    firstName,
    lastName,
    dateOfVisit,
    timeOfVisit,
    emailAddress,
    message,
  ]);
};

module.exports = { createTable, addANewVisitor };
