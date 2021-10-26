// runs the application
// requirements
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const htmlGenerator = require("./lib/generateHTML")

const employeeData = [];

const addEmployee = () =>{
  return inquirer.prompt ([
    {
      type:'list',
      message:'Welcome to the application. Select your choice below',
      choices:['View all departments','View all roles', 'View all employees', 'Add a department','Add a role', 'Add an employee', 'Update an employee role', 'Exit' ],
      name:'type'
    }
  ])
  .then((data) =>{
    // split if statement below then ask questions based on input
      if(data.type === 'View all departments'){
        viewDepartments();
      } 
      if (data.type === 'View all roles'){
        viewRoles();
      } 
      if (data.type === 'View all employees'){
        viewEmployees();
      } 
      if (data.type === 'Add a department'){
        addDepartment();
      } 
      if (data.type === 'Add a role'){
        addRole();
      } 
      if (data.type === 'Add an employee'){
        addEmployee();
      }
      if (data.type === 'Exit'){
        return;
      } 
    }
  )}

  const engineerQuestions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          message: 'What is the name of the engineer?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'What is the ID of the engineer?',
          name: 'id',
        },
        {
          type: 'input',
          message: 'What is the email of the engineer?',
          name: 'email',
        },
        {
          type: 'input',
          message: 'What is the github username of the engineer?',
          name: 'github',
        }
      ])
      // this needs to store the information in the employeeData array? rather than writing file?
      .then((data) => {
        // console.log(data);
        const {name, id, email, github} = data;
        const engineer = new Engineer (name, id, email, github)
        console.log(engineer);
        employeeData.push(engineer);
        console.log(employeeData);
        addEmployee();
        
      });
    }

    const internQuestions = () => {
      return inquirer.prompt([
          {
            type: 'input',
            message: 'What is the name of the intern?',
            name: 'name',
          },
          {
            type: 'input',
            message: 'What is the ID of the intern?',
            name: 'id'
          },
          {
            type: 'input',
            message: 'What is the email of the intern?',
            name: 'email'
          },
          {
              type:'input',
              message:'What is the school of the intern?',
              name: 'school'
          }
        ])
        .then((data) => {
          // console.log(data);
          const {name, id, email, school} = data;
          const intern = new Manager (name, id, email, school)
          console.log(intern);
          employeeData.push(intern);
          console.log(employeeData);
          addEmployee();
        });
      }

      const managerQuestions = () => {
        return inquirer.prompt([
            {
              type: 'input',
              message: 'What is the name of the Manager?',
              name: 'name'
            },
            {
              type: 'input',
              message: 'What is the ID of the Manager?',
              name: 'id'
            },
            {
              type: 'input',
              message: 'What is the email of the Manager?',
              name: 'email'
            },
            {
                type: 'input',
                message: 'What is the office number of the manager?',
                name: 'officeNumber'
            }
          ])
          .then((data) => {
            // console.log(data);
            const {name, id, email, officeNumber} = data;
            const manager = new Manager (name, id, email, officeNumber)
            console.log(manager);
            employeeData.push(manager);
            console.log(employeeData);
            addEmployee();
            
          });
        }
    

const init = () =>{
    addEmployee()
    // .then((response) => fs.writeFileSync('./dist/team.html', userInput(response)))
    // .then(() => console.log('Operation successful.'))
    // .catch((err) => console.error(err))
  }
  
  init();

  // choices: departments[0].map((dept)=> ({name: dept.dept, value: dept.id}))