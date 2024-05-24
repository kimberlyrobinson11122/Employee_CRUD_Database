// Import and require mysql2
const mysql = require('mysql2');

// inquirer for user prompts (req)
const inquirer = require("inquirer"); 

// Create a connection pool using mysql2 (multiple connections for each query, I think that is how it is supposed to work)
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'changeme',
    database: 'employee_db'
});

// Get a connection from the pool
const getConnection = pool.promise();

module.exports = getConnection;