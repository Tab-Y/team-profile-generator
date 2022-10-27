// this is where the tests for the employee class will go
const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('getRole', () => {
        it('should return the role of this Employee as Employee', () => {
            const employee = new Employee();

            expect(employee.getRole()).toEqual('Employee');
        });
    });
    describe('getEmail', () => {
        it('should return the email for this employee', () => {
            const employee = new Employee('name', 'id', 'email.com');

            expect(employee.getEmail()).toEqual('email.com');
        });
    });
    describe('getId', () => {
        it('should return the input the employee id', () => {
            const employee = new Employee('name', '123456', 'email');

            expect(employee.getId()).toEqual('123456');
        });
    });
    describe('getName', () => {
        it('should return the employee name', () => {
            const employee = new Employee('Tony', 'id', 'email');

            expect(employee.getName()).toEqual('Tony');
        });
    });
});