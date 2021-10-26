// runs the application
// requirements
const inquirer = require('inquirer');
const fs = require('fs');
const express = require('express');
const table = require('console.table');
const mysql = require('mysql2');
// Chuck Stephens let me know about this
const hideSecrets = require('hide-secrets')

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root1337',
    database: 'tracker_db'
  }
)
const mainMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Welcome to the Federation Team Builder. Select your choice below.',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Exit'],
      name: 'mainmenu'
    }
  ])
    .then((data) => {
      // console.log('.then running')
      if (data.mainmenu === 'View all departments') {
        console.log('viewDepartments');
        viewDepartments();
      }
      if (data.mainmenu === 'View all roles') {
        viewRoles();
      }
      if (data.mainmenu === 'View all employees') {
        viewEmployees();
      }
      if (data.mainmenu === 'Add a department') {
        addDepartment();
      }
      if (data.mainmenu === 'Add a role') {
        addRole();
      }
      if (data.mainmenu === 'Add an employee') {
        addEmployee();
      }
      if (data.mainmenu === 'Exit') {
        process.exit(0);
      }
    }
    )
};

const viewDepartments = async () => {
  // console.log('viewDepartments function init')
  const departments = await db.promise().query('SELECT * FROM departments');
  console.table(departments[0]);
  mainMenu();
};

const viewRoles = async () => {
  const roles = await db.promise().query('SELECT * FROM roles');
  console.table(roles[0]);
  mainMenu();
};

const viewEmployees = async () => {
  const employees = await db.promise().query('SELECT * FROM employees');
  console.table(employees[0]);
  mainMenu();
};

const addDepartment = async () => {
  const departmentInput = await inquirer.prompt([
    {
      type: 'input',
      message: 'Type the name of the department to add.',
      name: 'department_name',
    }
  ]);
  const insertDept = await db.promise().query("INSERT INTO departments SET?", departmentInput)
  console.log("New department successfully added.")
  mainMenu();
}

const addRole = async () => {
  const roleInput = await inquirer.prompt([
    {
      type: 'input',
      message: 'Type the name of the role to be added.',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Indicate the salary of the role.',
      name: 'salary',
    }
  ]);
  const insertRole = await db.promise().query("INSERT INTO roles SET?", roleInput)
  console.log("New role successfully added.")
  mainMenu();
}

const addEmployee = async () => {
  const employeeInput = await inquirer.prompt([
    {
      type: 'input',
      message: 'Type the first name of the employee.',
      name: 'first_name',
    },
    {
      type: 'input',
      message: 'Type the last name of the employee.',
      name: 'last_name',
    },
    {
      type: 'input',
      message: 'Type role id for the new employee. Reference view all roles for ids.',
      name: 'role_id',
    }
  ]);
  const insertRole = await db.promise().query("INSERT INTO employees SET?", employeeInput)
  console.log("New employee successfully added.")
  mainMenu();
}

const init = () => {
  mainMenu()
}

init();

