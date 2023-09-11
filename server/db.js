const Pool = require("pg").Pool;

const pool = new Pool({
  user: "anums",
  password: "Awalsari10",
  host: "localhost",
  port: 5432,
  database: "list_employe",
});

module.exports = pool;
