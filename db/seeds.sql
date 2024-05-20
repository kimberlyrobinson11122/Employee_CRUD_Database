-- This is data that gets seeds the department table
INSERT INTO department (id, department_name)
VALUES  
  (1, "IT"),
  (2, "Operations"),
  (3, "Human Resources"),
  (4, "Legal"),
  (5, "Consulting Services"),
  (6, "Billing"),
  (7, "Marketing"),
  (8, "Sales"),
  (9, "Administration");

-- This is data that gets seeds the role table
INSERT INTO role (id, title, salary, department_id)
VALUES  
  ("ADMN", "Administrative Assistant", 40000.00, 9),
  ("ADMGR", "Administrative Manager", 85000.00, 9),
  ("HRMGR", "Human Resources Manager", 75000.00, 3),
  ("ITMGR", "IT Manager", 80000.00, 1),
  ("ITDEV", "IT Developer", 70000.00, 1),
  ("ITQA", "IT Quality Assurance", 65000.00, 1),
  ("ITSUP", "IT Support", 55000.00, 1),
  ("LGMGR", "Legal Manager", 95000.00, 4),
  ("LGR", "Legal Representative", 75000.00, 4),
  ("OPMGR", "Operations Manager", 90000.00, 2),
  ("OPR", "Operations Representative", 60000.00, 2),
  ("CONS", "Consultant", 85000.00, 5),
  ("MKTG", "Marketing Specialist", 65000.00, 7),
  ("MKTMGR", "Marketing Manager", 85000.00, 7),
  ("SALES", "Sales Representative", 70000.00, 8),
  ("SALEMGR", "Sales Manager", 100000.00, 8),
  ("BILL", "Billing Specialist", 50000.00, 6);

-- This is data that gets seeds the employee table
INSERT INTO employee (first_name, last_name, role_id, department_id)
VALUES  
  ("John Doe", "ITMGR", 80000.00, 1),
  ("Jane Smith", "HRMGR", 75000.00, 3),
  ("Alice Johnson", "CONS", 85000.00, 5),
  ("Snow White", "CONS", 95000.00, 5),
  ("Reditharm Andles", "ADMN", 40000.00, 9),
  ("Chris Evans", "ITDEV", 70000.00, 1),
  ("Samuel Lee", "ITSUP", 55000.00, 1),
  ("Laura Brown", "ITQA", 65000.00, 1),
  ("Peter Parker", "OPMGR", 90000.00, 2),
  ("Bruce Wayne", "OPR", 60000.00, 2),
  ("Clark Kent", "LGMGR", 95000.00, 4),
  ("Diana Prince", "LGR", 75000.00, 4),
  ("Steve Rogers", "MKTMGR", 85000.00, 7),
  ("Natasha Romanoff", "MKTG", 65000.00, 7),
  ("Tony Stark", "SALEMGR", 100000.00, 8),
  ("Pepper Potts", "SALES", 70000.00, 8),
  ("Wanda Maximoff", "HRMGR", 75000.00, 3),
  ("Vision", "ITDEV", 80000.00, 1),
  ("Thor Odinson", "OPMGR", 95000.00, 2),
  ("Bruce Banner", "CONS", 90000.00, 5),
  ("Peter Quill", "ITQA", 65000.00, 1),
  ("Gamora", "ITSUP", 55000.00, 1),
  ("Scott Lang", "BILL", 50000.00, 6),
  ("Hope Van Dyne", "BILL", 52000.00, 6),
  ("Stephen Strange", "LGMGR", 95000.00, 4),
  ("Bucky Barnes", "LGR", 75000.00, 4),
  ("T'Challa", "ADMGR", 85000.00, 9),
  ("Shuri", "ADMN", 40000.00, 9);
