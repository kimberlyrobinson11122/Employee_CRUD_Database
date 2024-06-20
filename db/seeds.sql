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
  (17, "Billing Specialist", 50000.00, 6),
  (18, "CEO", 1000000.00, 2);

-- Seed data for the employee table
-- Insert employees without manager_id first
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  
  (1, "John", "Doe", 4, NULL),        
  (2, "Jane", "Smith", 3, NULL),      
  (3, "Alice", "Johnson", 12, NULL),  
  (4, "Snow", "White", 12, NULL),        
  (5, "Reditharm", "Andles", 1, NULL),   
  (6, "Chris", "Evans", 5, NULL),        
  (7, "Samuel", "Lee", 7, NULL),         
  (8, "Laura", "Brown", 6, NULL),        
  (9, "Peter", "Parker", 10, NULL),   
  (10, "Bruce", "Wayne", 11, NULL),     
  (11, "Clark", "Kent", 8, NULL),    
  (12, "Diana", "Prince", 9, NULL),
  (13, "Steve", "Rogers", 14, NULL),
  (14, "Natasha", "Romanoff", 13, NULL), 
  (15, "Tony", "Stark", 16, NULL),
  (16, "Pepper", "Potts", 15, NULL),
  (17, "Wanda", "Maximoff", 3, NULL),
  (18, "Vision", "Vision", 5, NULL),
  (19, "Thor", "Odinson", 10, NULL),
  (20, "Bruce", "Banner", 12, NULL),
  (21, "Peter", "Quill", 6, NULL), 
  (22, "Gamora", "Gamora", 7, NULL),
  (23, "Scott", "Lang", 17, NULL), 
  (24, "Hope", "Van Dyne", 17, NULL),
  (25, "Stephen", "Strange", 8, NULL), 
  (26, "Bucky", "Barnes", 9, NULL),  
  (27, "T'Challa", "T'Challa", 2, NULL);

-- Update employees with manager_id
UPDATE employee SET manager_id = 18 WHERE id = 1;
UPDATE employee SET manager_id = 18 WHERE id = 2;
UPDATE employee SET manager_id = 10 WHERE id = 3;
UPDATE employee SET manager_id = 3 WHERE id = 4;
UPDATE employee SET manager_id = 2 WHERE id = 5;
UPDATE employee SET manager_id = 1 WHERE id = 6;
UPDATE employee SET manager_id = 1 WHERE id = 7;
UPDATE employee SET manager_id = 1 WHERE id = 8;
UPDATE employee SET manager_id = 18 WHERE id = 9;
UPDATE employee SET manager_id = 10 WHERE id = 10;
UPDATE employee SET manager_id = NULL WHERE id = 11;
UPDATE employee SET manager_id = 11 WHERE id = 12;
UPDATE employee SET manager_id = 10 WHERE id = 13;
UPDATE employee SET manager_id = 14 WHERE id = 14;
UPDATE employee SET manager_id = 18 WHERE id = 15;
UPDATE employee SET manager_id = 16 WHERE id = 16;
UPDATE employee SET manager_id = 10 WHERE id = 17;
UPDATE employee SET manager_id = 1 WHERE id = 18;
UPDATE employee SET manager_id = 18 WHERE id = 19;
UPDATE employee SET manager_id = 3 WHERE id = 20;
UPDATE employee SET manager_id = 1 WHERE id = 21;
UPDATE employee SET manager_id = 1 WHERE id = 22;
UPDATE employee SET manager_id = 23 WHERE id = 23;
UPDATE employee SET manager_id = 23 WHERE id = 24;
UPDATE employee SET manager_id = NULL WHERE id = 25;
UPDATE employee SET manager_id = 2 WHERE id = 26;
UPDATE employee SET manager_id = 10 WHERE id = 27;