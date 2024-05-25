const inquirer = require("inquirer");
const figlet = require('figlet');
const Table = require('cli-table');
const connection = require('./db/connection.js');

figlet('Employee Database', function(err, data) {
    if (err) {
        console.log('Error occurred while generating ASCII art.');
        console.dir(err);
        return;
    }
    console.log(data);
    mainAction();
});

function mainAction() {
    inquirer.prompt([
        {
            type: 'list',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
            message: 'What would you like to do?',
            name: 'mainActionList'
        }
    ]).then(async (answers) => {
        switch (answers.mainActionList) {
            case 'View All Employees':
                const employeesData = await fetchEmployees();
                displayEmployeesTable(employeesData);
                break;
            case 'Add Employee':
                const newEmployeeData = await addEmployee();
                displayEmployeesTable(newEmployeeData);
                break;
            case 'Update Employee Role':
                const updatedEmployeeData = await updateRole();
                displayEmployeesTable(updatedEmployeeData);
                break;
            case 'View All Roles':
                const rolesData = await fetchRoles();
                displayRolesTable(rolesData);
                break;
            case 'Add Role':
                const newRoleData = await addRole();
                displayRolesTable(newRoleData);
                break;
            case 'View All Departments':
                const departmentsData = await fetchDepartments();
                displayDepartmentsTable(departmentsData);
                break;
            case 'Add Department':
                const newDepartmentName ='New Department Name';
                const newDepartmentData = await addDepartment(newDepartmentName);
                displayDepartmentsTable(newDepartmentData);
                break;
            default:
                console.log('Invalid action selected.');
                break;
        }
        mainAction();
    });
}

// ---------------- ROLE -------------------- //

// Fetch 'role' table
async function fetchRoles() {
    const dbConnection = await connection.getConnection();
    try {
        const [rows] = await dbConnection.query('SELECT * FROM role'); 
        return rows;
    } catch (error) {
        console.error('Error fetching roles:', error);
        return [];
    } finally {
        dbConnection.release();
    }
}

// Add Role
async function addRole() {
    const dbConnection = await connection.getConnection();
    try {
        // Update to 'role' table
        const [rows] = await dbConnection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]);
        return rows;
    } catch (error) {
        console.error('Error fetching roles:', error);
        return [];
    } finally {
        dbConnection.release();
    }
}

// Display 'role' table
function displayRolesTable(rolesData) {
    const table = new Table({
        head: ['ID', 'Title', 'Salary', 'Department'],
        colWidths: [10, 30, 15, 20]
    });

    rolesData.forEach(role => {
        table.push([role.id, role.title, role.salary, role.department_id]);
    });

    console.log('\x1b[34m' + table.toString() + '\x1b[0m'); // Output in blue color

    mainAction();
}

// ---------------- DEPARTMENT -------------------- //

// Fetch 'department' table
async function fetchDepartments() {
    const dbConnection = await connection.getConnection();
    try {
        const [rows] = await dbConnection.query('SELECT * FROM department'); // Fetch'department' table
        return rows;
    } catch (error) {
        console.error('Error fetching department:', error);
        return [];
    } finally {
        dbConnection.release();
    }
}

// Display 'department' table
function displayDepartmentsTable(departmentData) { 
    const table = new Table({
        head: ['ID', 'Department Name'],
        colWidths: [10, 30] // Do I need to adjust the width?
    });

   departmentData.forEach(department => {
        table.push([department.id, department.name]);
    });

    console.log('\x1b[34m' + table.toString() + '\x1b[0m'); // Output in blue color

    mainAction(); // Call mainAction() to prompt the user for the next action
}

// Add Department
async function addDepartment() {
    const dbConnection = await connection.getConnection();
    try {
        // Add to 'department' table
        const [rows] = await dbConnection.query('INSERT INTO department (name) VALUES (?)', [department_name]);
        return rows;
    } catch (error) {
        console.error('Error fetching departments:', error);
        return [];
    } finally {
        dbConnection.release();
    }
}