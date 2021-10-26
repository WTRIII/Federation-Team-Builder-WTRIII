class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    };

    getName() {
      return this.name;
    };

    getID() {
      return this.id;
    };

    getEmail() {
      return this.email;
    };

    getRole(){
      return 'Employee';
    };
}
// move questions into each including the role-specific questions

  module.exports = Employee;
