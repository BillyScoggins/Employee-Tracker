const mysql = require('mysql2');
require('dotenv').config()
const connection = mysql.createConnection({
   host: '127.0.0.1',
  
   user: 'root',
  
   password: '',
   database: 'employee_db'

  // host: DB_LOCALHOST,mysql, 
  
  // user: DB_ROOT,
  
  // password: DB_PASSWORD,
  // database: DB_DATABASE
});
connection.connect(function (err) {
  if (err) throw err;
});
module.exports = connection;







