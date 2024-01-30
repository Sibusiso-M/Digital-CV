const { visitorQueries } = require("../helper-objects/databaseQueries");
const { pool } = require("../configurations");
const { errorMessage } = require("../helper-objects/error-messages");

const queryFunctions = async (query, values) => {
  let visitors;
  if (query !== undefined) {
    if (values === undefined) {
      visitors = await pool.query(query);
    } else {
      visitors = await pool.query(query, values);
    }
    return visitors.rows;
  } else {
    throw new Error(errorMessage.emptyQuery);
  }
};

const createTable = async () => {
  console.log("create table attempted");
  return await queryFunctions(visitorQueries.createVisitorsTable);
};

const addANewVisitor = async ({
  firstName,
  lastName,
  dateOfVisit,
  timeOfVisit,
  emailAddress,
  message,
}) => {
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
