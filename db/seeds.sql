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

-- This is data that gets seeds the employee table
INSERT INTO employee (first_name, last_name, role_id, department_id)
VALUES  
  ("John", "Doe", 4, 1),
  ("Jane", "Smith", 3, 3),
  ("Alice", "Johnson", 12, 5),
  ("Snow", "White", 12, 5),
  ("Reditharm", "Andles", 1, 9),
  ("Chris", "Evans", 5, 1),
  ("Samuel", "Lee", 7, 1),
  ("Laura", "Brown", 6, 1),
  ("Peter", "Parker", 10, 2),
  ("Bruce", "Wayne", 11, 2),
  ("Clark", "Kent", 8, 4),
  ("Diana", "Prince", 9, 4),
  ("Steve", "Rogers", 14, 7),
  ("Natasha", "Romanoff", 13, 7),
  ("Tony", "Stark", 16, 8),
  ("Pepper", "Potts", 15, 8),
  ("Wanda", "Maximoff", 3, 3),
  ("Vision", "Vision", 5, 1),
  ("Thor", "Odinson", 10, 2),
  ("Bruce", "Banner", 12, 5),
  ("Peter", "Quill", 6, 1),
  ("Gamora", "Gamora", 7, 1),
  ("Scott", "Lang", 17, 6),
  ("Hope", "Van Dyne", 17, 6),
  ("Stephen", "Strange", 8, 4),
  ("Bucky", "Barnes", 9, 4),
  ("T'Challa", "T'Challa", 2, 9);

