// manager class

const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name); // calls parent constructor method for properties and methods
        super(id);
        super(email);
        this.officeNumber = officeNumber; // adds officeNumber to employee for managers
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;