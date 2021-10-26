const Employee = require("./Employee");
const inquirer = require('inquirer');
const fs = require('fs');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager'
    }
  }

    module.exports = Manager;
