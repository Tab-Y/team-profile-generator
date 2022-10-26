// intern class

const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name); // calls parent constructor method for properties and methods
        super(id);
        super(email);
        this.school = school; // adds school to the class on employee to make intern
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;