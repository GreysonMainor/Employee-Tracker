-- Department seeds --
INSERT INTO department (name) VALUE ("Sales");
INSERT INTO department (name) VALUE ("Engineering");
INSERT INTO department (name) VALUE ("Finance");
INSERT INTO department (name) VALUE ("Legal");

-- Employee roles --
INSERT INTO role (title, salary, department_id) VALUE ("Lead Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id) VALUE ("Software Engineer" , 110000, 2);
INSERT INTO role (title, salary, department_id) VALUE ("Accountant", 100000, 3);
INSERT INTO role (title, salary, department_id) VALUE ("Sales Lead", 90000, 1);
INSERT INTO role (title, salary, department_id) VALUE ("Salesperson", 70000, 1);
INSERT INTO role (title, salary, department_id) VALUE ("Legal Team Lead", 115000, 4);
INSERT INTO role (title, salary, department_id) VALUE ("Lawyer", 145000, 4) 

-- Employee Seeds --
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("John", "Doe", 1, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Jane", "Doe", 2, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Homer","Simpson",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Hank", "Hill", 1, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("John", "Travolta", null, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Kevin", "Spacey", 4, 6);