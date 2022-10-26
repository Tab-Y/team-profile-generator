// engineer class

const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name); // calls parent constructor method for properties and methods
        super(id);
        super(email);
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