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

    inquirer.prompt([
        {
            type: 'list',
            choices: ['View ALL Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
            message: 'What would you like to do?',
            name: 'mainActionList'
        }
    ]).then(async (answers) => {
        switch (answers.mainActionList) {
            case 'View All Roles':
                const rolesData = await fetchRoles();
                displayRolesTable(rolesData);
                break;
            case 'Add Role':
                // FIgure out how to do/add this code for adding a new role
                break;
            default:
                console.log('Invalid action selected.');
        }

        // else statement? or another prompt?
    });
});

async function fetchRoles() {
    const dbConnection = await connection.getConnection();
    try {
        const [rows] = await dbConnection.query('SELECT * FROM role'); // Update to 'role' table
        return rows;
    } catch (error) {
        console.error('Error fetching roles:', error);
        return [];
    } finally {
        dbConnection.release();
    }
}

function displayRolesTable(rolesData) {
    const table = new Table({
        head: ['ID', 'Title', 'Salary', 'Department'],
        colWidths: [10, 30, 15, 20]
    });

    rolesData.forEach(role => {
        table.push([role.id, role.title, role.salary, role.department_id]);
    });

    console.log('\x1b[34m' + table.toString() + '\x1b[0m'); // Output in blue color
}

// async function fetchEmployees() {
//     const dbConnection = await connection.getConnection();
//     try {
//         const [rows] = await dbConnection.query('SELECT * FROM employee'); // Update to 'employee' table
//         return rows;
//     } catch (error) {
//         console.error('Error fetching employees:', error);
//         return [];
//     } finally {
//         dbConnection.release();
//     }
// }

// function displayEmployeesTable(employeeData) {
//     const table = new Table({
//         head: ['ID', 'First Name', 'Last Name', 'Role', 'Manager'],
//         colWidths: [10, 30, 15, 30]
//     });

//     employeeData.forEach(employee => {
//         table.push([employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id]);
//     });

//     console.log('\x1b[34m' + table.toString() + '\x1b[0m'); // Output in blue color
// }