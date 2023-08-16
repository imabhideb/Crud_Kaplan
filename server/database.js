import mysql from 'mysql2/promise';

// Create a connection 
const db = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: 'Dilip@adt354', 
  database: 'bug_schema', 
});

export default db;
