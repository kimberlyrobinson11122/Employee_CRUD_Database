const inquirer = require("inquirer");
const figlet = require("figlet");
const Table = require("cli-table");
const connection = require("./db/connection.js");

console.log(connection.getConnection);

figlet("Employee Database", function (err, data) {
  if (err) {
    console.log("Error occurred while generating ASCII art.");
    console.dir(err);
    return;
  }
  console.log(data);
  mainAction();
});

async function mainAction() {
  try {
    const answers = await inquirer
      .prompt([
        {
          type: "list",
          choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
          ],
          message: "What would you like to do?",
          name: "mainActionList",
        },
      ])
      .then(async (answers) => {
        switch (answers.mainActionList) {
          case "View All Employees":
            const employeesData = await fetchEmployees();
            displayEmployeesTable(employeesData);
            break;
          case "Add Employee":
            await handleAddEmployee();
            break;
          case "Update Employee Role":
            await handleUpdateRole();
            break;
          case "View All Roles":
            const rolesData = await fetchRoles();
            displayRolesTable(rolesData);
            break;
          case "Add Role":
            await handleAddRole();
            break;
          case "View All Departments":
            const departmentsData = await fetchDepartments();
            displayDepartmentsTable(departmentsData);
            break;
          case "Add Department":
            await handleAddDepartment();
            break;
          default:
            console.log("Invalid action selected.");
        }
      });
  } catch (error) {
    console.error("Error in main action:", error);
  } finally {
    mainAction();
  }
}

// ---------------- EMPLOYEE -------------------- //

async function fetchEmployees() {
  const dbConnection = await connection.getConnection();
  try {
    const [rows] = await dbConnection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;");
    return rows;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  } finally {
    dbConnection.release();
  }
}

async function displayEmployeesTable(employeesData) {
  const table = new Table({
      head: ['ID', 'First Name', 'Last Name', 'Title', 'Department', 'Salary', 'Manager'],
      colWidths: [10, 15, 15, 35, 25, 10, 25]
  });

  employeesData.forEach(employee => {
    //   console.log(employee);
      const id = employee.id !== null ? employee.id : 'N/A';
      const firstName = employee.first_name !== null ? employee.first_name : 'N/A';
      const lastName = employee.last_name !== null ? employee.last_name : 'N/A';
      const title = employee.title !== null ? employee.title: 'N/A';
      const manager = employee.manager !== null ? employee.manager : 'N/A';

      table.push([id, firstName, lastName, title, employee.department, employee.salary, manager]);
  });

  console.log('\x1b[34m' + table.toString() + '\x1b[0m');
}

async function handleAddEmployee() {
  const answers = await inquirer.prompt([
    { type: "input", name: "firstName", message: "First Name:" },
    { type: "input", name: "lastName", message: "Last Name:" },
    { type: "input", name: "roleId", message: "Role ID:" },
    { type: "input", name: "managerId", message: "Manager ID:" },
  ]);

  const { firstName, lastName, roleId, roleTitle, managerId } = answers;
  await addEmployee(firstName, lastName, roleId, managerId);
  const updatedEmployees = await fetchEmployees();
  displayEmployeesTable(updatedEmployees);
}

async function addEmployee(firstName, lastName, roleId, managerId) {
  const dbConnection = await connection.getConnection();
  try {
    await dbConnection.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [firstName, lastName, roleId, managerId]
    );
  } catch (error) {
    console.error("Error adding employee:", error);
  } finally {
    dbConnection.release();
  }
}

// ---------------- ROLE -------------------- //

async function fetchRoles() {
  const dbConnection = await connection.getConnection();
  try {
    const [rows] = await dbConnection.query("SELECT * FROM role");
    return rows;
  } catch (error) {
    console.error("Error fetching roles:", error);
    return [];
  } finally {
    dbConnection.release();
  }
}

function displayRolesTable(rolesData) {
  const table = new Table({
    head: ["ID", "Title", "Salary", "Department"],
    colWidths: [10, 30, 15, 20],
  });

  rolesData.forEach((role) => {
    const id = role.id !== null ? role.id : "N/A";
    const title = role.title !== null ? role.title : "N/A";
    const salary = role.salary !== null ? role.salary : "N/A";
    const departmentId =
      role.department_id !== null ? role.department_id : "N/A";

    table.push([id, title, salary, departmentId]);
  });

  console.log("\x1b[34m" + table.toString() + "\x1b[0m");
}

async function handleAddRole() {
  const answers = await inquirer.prompt([
    { type: "input", name: "title", message: "Role Title:" },
    { type: "input", name: "salary", message: "Salary:" },
    { type: "input", name: "departmentId", message: "Department ID:" },
  ]);

  const { title, salary, departmentId } = answers;
  await addRole(title, salary, departmentId);
  const updatedRoles = await fetchRoles();
  displayRolesTable(updatedRoles);
}

async function addRole(title, salary, departmentId) {
  const dbConnection = await connection.getConnection();
  try {
    await dbConnection.query(
      "INSERT INTO role (title, salary, department_name) VALUES (?, ?, ?)",
      [title, salary, departmentId]
    );
  } catch (error) {
    console.error("Error adding role:", error);
  } finally {
    dbConnection.release();
  }
}

// ---------------- DEPARTMENT -------------------- //

async function fetchDepartments() {
  const dbConnection = await connection.getConnection();
  try {
    const [rows] = await dbConnection.query("SELECT * FROM department");
    return rows;
  } catch (error) {
    console.error("Error fetching departments:", error);
    return [];
  } finally {
    dbConnection.release();
  }
}

function displayDepartmentsTable(departmentData) {
  const table = new Table({
    head: ["ID", "Department Name"],
    colWidths: [10, 30],
  });

  departmentData.forEach((department) => {
    const id = department.id !== null ? department.id : "N/A";
    const name =
      department.department_name !== null ? department.department_name : "N/A";

    table.push([id, name]);
  });

  console.log("\x1b[34m" + table.toString() + "\x1b[0m");
}

async function handleAddDepartment() {
  const answers = await inquirer.prompt([
    { type: "input", name: "departmentName", message: "Department Name:" },
  ]);

  const { departmentName } = answers;
  await addDepartment(departmentName);
  const updatedDepartments = await fetchDepartments();
  displayDepartmentsTable(updatedDepartments);
}

async function addDepartment(departmentName) {
  const dbConnection = await connection.getConnection();
  try {
    await dbConnection.query("INSERT INTO department (department_name) VALUES (?)", [
      departmentName,
    ]);
  } catch (error) {
    console.error("Error adding department:", error);
  } finally {
    dbConnection.release();
  }
}

// ---------------- EMPLOYEE ROLE UPDATE -------------------- //

async function handleUpdateRole() {
  const employees = await fetchEmployees();
  const roles = await fetchRoles();

  const employeeChoices = employees.map((emp) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));
  const roleChoices = roles.map((role) => ({
    name: role.title,
    value: role.id,
  }));

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Select an employee to update:",
      choices: employeeChoices,
    },
    {
      type: "list",
      name: "roleId",
      message: "Select a new role:",
      choices: roleChoices,
    },
  ]);

  const { employeeId, roleId } = answers;
  await updateRole(employeeId, roleId);
  const updatedEmployees = await fetchEmployees();
  displayEmployeesTable(updatedEmployees);
}

async function updateRole(employeeId, roleId) {
  const dbConnection = await connection.getConnection();
  try {
    await dbConnection.query("UPDATE employee SET role_id = ? WHERE id = ?", [
      roleId,
      employeeId,
    ]);
  } catch (error) {
    console.error("Error updating role:", error);
  } finally {
    dbConnection.release();
  }
}
