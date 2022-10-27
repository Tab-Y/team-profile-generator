// intern class

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); // calls parent constructor method for properties and methods
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