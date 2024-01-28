// const dotenv = require("dotenv");
require("dotenv").config();

const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  database: process.env.DATABASE,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

module.exports = { pool };
