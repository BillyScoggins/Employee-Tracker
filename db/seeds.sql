INSERT INTO departments (name)
VALUES ('Director'),
       ('Public Relations'),
       ('Human Resources'),
       ('Compliance');

INSERT INTO role (title, salary, department_id)  
VALUES ('Facility Director', 500000, 1),
       ('Public Relations Manager', 200000, 2),
       ('Human Resources Manager', 175000, 3),
       ('Compliance Manager', 150000, 4),
       ('Facility Director Executive Assistant', 75000, 1),
       ('Public Relations Manager Assistant', 60000, 2),
       ('Human Resources Manager Assistant', 55000, 3),
       ('Compliance Manager Assistant', 50000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)  
VALUES ('Steve', 'Gadd', 1, NULL),
       ('Thomas', 'Lang', 1, 1), 
       ('Matt', 'Young', 2, NULL),
       ('Cindy', 'Blackman', 2, 2),
       ('Neil', 'Peart', 3, NULL),
       ('Taylor', 'Hawkins', 3, 3),
       ('Sheila', 'Escovado', 4, NULL),
       ('Gavin', 'Harrison', 4, 4)

