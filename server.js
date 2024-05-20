//inq node package, 

// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'changeme',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);



  // Execute SQL queries in seeds.sql file
  db.query(data, (err, results) => {
    if (err) {
      console.error('Failed to execute seeds.sql queries:', err);
      return;
    }
    console.log('Seed data inserted successfully.');
  });
