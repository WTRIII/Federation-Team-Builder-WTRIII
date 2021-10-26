INSERT INTO departments (id, department_name)
VALUES (1,"Mobile Infantry"),
       (2, "Federation Navy"),
       (3, "Intelligence");

INSERT INTO roles (title, salary, department_id)
VALUES ("Trooper", "27000", 1),
       ("Sergeant", "35000", 1),
       ("Lieutenant", "50000", 1),
       ("Sky Marshal", "100000", 2),
       ("Colonel", "REDACTED", 3);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Ace", "Levy", 1),
       ("Johnny", "Rico", 2),
       ("Dizzy", "Flores", 1),
       ("Jean", "Rasczak", 3),
       ("Sky Marshal", "Dienes", 4),
       ("Carl", "Jenkins", 5);

-- Ethan Cho and Brian Albright explained the below to make managers
UPDATE employees
SET manager_id = 4
WHERE roles_id IN (3, 5);

UPDATE employees
SET manager_id = 3
WHERE roles_id IN (2);

UPDATE employees
SET manager_id = 2
WHERE roles_id IN (1);