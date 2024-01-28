// const dotenv = require("dotenv");
require("dotenv").config();

const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  database: process.env.DATABASE,
  port: process.env.PORT,
  user: process.env.USER,
  PASSWORD: process.env.PASSWORD,
});

module.exports = { pool };
