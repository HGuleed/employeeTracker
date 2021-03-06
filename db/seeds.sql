USE employees;

INSERT INTO departments (department_name)
VALUES
('Human Resources'),
('Finance'),
('Sales'),
('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES 
('HR Manager', 65000, 1),
('FA Manager', 60000, 2),
('SR Manager', 45000, 3),
('MA Manager', 55000, 4),
('Human Resources Rep', 55000,1),
('Financial Advisor', 50000,2),
('Sale Representative', 35000,3),
('Marketing', 45000,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Joseph','Beck', 1, NULL),
('Tyler','Mosser', 2, NULL),
('Bey', 'Waters',3 , NULL),
('Alex', 'Black',4, NULL),
('Jennifer','Jones',5,1),
('John', 'Smith',5,1),
('Sarah', 'Steven',6,2),
('Joselyn','Johnson',6,2),
('Jim','Beam',7,3),
('Stephanie','Taylor',7,3),
('Jasmine','Garcia',8,4),
('Ashley','Baker',8,4);