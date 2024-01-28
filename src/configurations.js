const dotenv = require("dotenv");
dotenv.config();

const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  database: process.env.DATABASE || "db",
  port: process.env.PORT || 5432,
  user: process.env.USER  || "user",
  PASSWORD: process.env.PASSWORD,
});

module.exports = { pool };
