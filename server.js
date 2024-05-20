//inq node package, 

// Import and require mysql2
const mysql = require('mysql2');

const inquirer = require("inquirer");

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

  //user questions/prompts
inquirer.prompt([
  // {
  //     type: 'input',
  //     message: 'What is your project title?',
  //     name: 'pName',
  // }, 

  // {
  //     type: 'input',
  //     message: 'What is your project description?',
  //     name: 'pDescription',
  // }, 
  //Licensing options
  {
      type: 'list',
      choices: ['MIT View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
      message: 'What would you like to do? (please use the arrow keys to select)',
      name: 'main-action-list',
  },

  // {
  //     type: 'input',
  //     message: 'What are your installation instructions?',
  //     name: 'pInstall',
  // }, 

  // {
  //     type: 'input',
  //     message: 'What are your usage instructions?',
  //     name: 'pUsage',
  // }, 

  // {
  //     type: 'input',
  //     message: 'What are your contribution guidelines?',
  //     name: 'pContribution',
  // }, 

  // {
  //     type: 'input',
  //     message: 'What kinds of testing would you like to do for this project?',
  //     name: 'pTest',
  // }, 

  // {
  //     type: 'input',
  //     message: 'What is your GitHub username?',
  //     name: 'githubUsername',
  // }, 

  // {
  //     type: 'input',
  //     message: 'What email address would you like associated and published with this project?',
  //     name: 'pEmail',
  // }, 
])
// .then((data) => {
  console.log(data);