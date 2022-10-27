// this is where the tests for the manager class will go
const Manager = require('../lib/Manager');


describe('Manager', () => {
    describe('getRole', () => {
        it('should return the role of this Employee as Manager', () => {
            const manager = new Manager();

            expect(manager.getRole()).toEqual('Manager');
        });
    });
    describe('getEmail', () => {
        it('should return the email for this manager', () => {
            const manager = new Manager('name', 'id', 'email.com', 'officeNumber');

            expect(manager.getEmail()).toEqual('email.com');
        });
    });
    describe('getId', () => {
        it('should return the input the manager id', () => {
            const manager = new Manager('name', '123456', 'email', 'officeNumber');

            expect(manager.getId()).toEqual('123456');
        });
    });
    describe('getName', () => {
        it('should return the manager name', () => {
            const manager = new Manager('Tony', 'id', 'email', 'officeNumber');

            expect(manager.getName()).toEqual('Tony');
        });
    });
    describe('getOfficeNumber', () => {
        it('should return the office number for the manager', () => {
            const manager = new Manager('name', 'id', 'email', '8675309');

            expect(manager.getOfficeNumber()).toEqual('8675309');
        });
    });
});
