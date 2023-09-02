const Pool = require('pg-pool')

require('dotenv').config() ;

console.log(process.env.DATABASE)
console.log(process.env.USERNAME)
console.log(process.env.PASSWORD)
console.log(process.env.HOST)
console.log(process.env.DB_PORT)

const pool = new Pool({
  database: process.env.DATABASE,
  user: process.env.USERNAME,
  password:process.env.PASSWORD ,
  host: process.env.HOST,
  port: process.env.DB_PORT
  // database: 'slbapykv',
  // user: 'slbapykv',
  // password:'tZ9Tp7OlYfINVHKD5Cfm6YKCwvSAOSTH' ,
  // host: 'kandula.db.elephantsql.com',
  // port: 5432
});

module.exports = pool;

