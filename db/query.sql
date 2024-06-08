SELECT employee_db_table
    employee.first_name AS first_name,
    employee.last_name AS last_name,
    role.title AS role,
    department.department_name AS department
FROM employee
LEFT JOIN role ON employee.role_id = role_id
LEFT JOIN department ON role.department_id = department_id
ORDER BY department.department_name, role.title, employee_id;