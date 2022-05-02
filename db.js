const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mutasi',
  password: 'deven',
  port: 5432,
});

module.exports = pool;
