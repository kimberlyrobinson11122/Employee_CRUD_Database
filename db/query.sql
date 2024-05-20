SELECT employee.employee_name AS employee,
       role.title AS role,
       department.department_name AS department
FROM employee
LEFT JOIN role ON employee.role_id = role.role_id
LEFT JOIN department ON employee.department_id = department.department_id
ORDER BY department.department_name, role.title, employee.employee_name;