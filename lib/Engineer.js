const Employee = require("./Employee");
const inquirer = require('inquirer');
const fs = require('fs');

class Engineer extends Employee {
  constructor(name, id, email, github){
  super(name, id, email);
  this.github = github;
  }
  getGitHub(){
    return `https://github.com/${this.github}`
  }
  getRole(){
    return `Engineer`
  }
}
  module.exports = Engineer;
