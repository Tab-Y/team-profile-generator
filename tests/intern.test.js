// this is the where the tests for the intern class will go
const Intern = require('../lib/Intern');


describe('Intern', () => {
    describe('getRole', () => {
        it('should return the role of this Employee as Intern', () => {
            const intern = new Intern();

            expect(intern.getRole()).toEqual('Intern');
        });
    });
    describe('getEmail', () => {
        it('should return the email for this intern', () => {
            const intern = new Intern('name', 'id', 'email.com', 'school');

            expect(intern.getEmail()).toEqual('email.com');
        });
    });
    describe('getId', () => {
        it('should return the input the interns id', () => {
            const intern = new Intern('name', '123456', 'email', 'school');

            expect(intern.getId()).toEqual('123456');
        });
    });
    describe('getName', () => {
        it('should return the intern name', () => {
            const intern = new Intern('Tony', 'id', 'email', 'school');

            expect(intern.getName()).toEqual('Tony');
        });
    });
    describe('getSchool', () => {
        it('should return the school associated with the intern', () => {
            const intern = new Intern('name', 'id', 'email', 'UCF');

            expect(intern.getSchool()).toEqual('UCF');
        });
    });
});
