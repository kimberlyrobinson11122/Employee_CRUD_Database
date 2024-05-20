-- Seed data for the department table
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

-- Seed data for the role table
INSERT INTO role (id, title, salary, department_id)
VALUES  
  (1, "Administrative Assistant", 40000.00, 9),
  (2, "Administrative Manager", 85000.00, 9),
  (3, "Human Resources Manager", 75000.00, 3),
  (4, "IT Manager", 80000.00, 1),
  (5, "IT Developer", 70000.00, 1),
  (6, "IT Quality Assurance", 65000.00, 1),
  (7, "IT Support", 55000.00, 1),
  (8, "Legal Manager", 95000.00, 4),
  (9, "Legal Representative", 75000.00, 4),
  (10, "Operations Manager", 90000.00, 2),
  (11, "Operations Representative", 60000.00, 2),
  (12, "Consultant", 85000.00, 5),
  (13, "Marketing Specialist", 65000.00, 7),
  (14, "Marketing Manager", 85000.00, 7),
  (15, "Sales Representative", 70000.00, 8),
  (16, "Sales Manager", 100000.00, 8),
  (17, "Billing Specialist", 50000.00, 6);

-- Seed data for the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
  ("John", "Doe", 4, NULL),       
  ("Jane", "Smith", 3, NULL),     
  ("Alice", "Johnson", 12, NULL),
  ("Snow", "White", 12, NULL),
  ("Reditharm", "Andles", 1, NULL),
  ("Chris", "Evans", 5, NULL),
  ("Samuel", "Lee", 7, NULL),
  ("Laura", "Brown", 6, NULL),
  ("Peter", "Parker", 10, NULL),
  ("Bruce", "Wayne", 11, NULL),
  ("Clark", "Kent", 8, NULL),
  ("Diana", "Prince", 9, NULL),
  ("Steve", "Rogers", 14, NULL),
  ("Natasha", "Romanoff", 13, NULL),
  ("Tony", "Stark", 16, NULL),
  ("Pepper", "Potts", 15, NULL),
  ("Wanda", "Maximoff", 3, NULL),
  ("Vision", "Vision", 5, NULL),
  ("Thor", "Odinson", 10, NULL),
  ("Bruce", "Banner", 12, NULL),
  ("Peter", "Quill", 6, NULL),
  ("Gamora", "Gamora", 7, NULL),
  ("Scott", "Lang", 17, NULL),
  ("Hope", "Van Dyne", 17, NULL),
  ("Stephen", "Strange", 8, NULL),
  ("Bucky", "Barnes", 9, NULL),
  ("T'Challa", "T'Challa", 2, NULL);  

