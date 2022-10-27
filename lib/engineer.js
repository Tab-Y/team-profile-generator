// engineer class

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); // calls parent constructor method for properties and methods
        this.github = github //adds to the class of employee
    };
    getGithub(){
        return this.github;
    };
    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;