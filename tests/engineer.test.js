// this is where the tests for the engineer class will go

const Engineer = require('../lib/Engineer');


describe('Engineer', () => {
    describe('getRole', () => {
        it('should return the role of this Employee as Engineer', () => {
            const engineer = new Engineer();

            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
    describe('getEmail', () => {
        it('should return the email for this engineer', () => {
            const engineer = new Engineer('name', 'id', 'email.com', 'github');

            expect(engineer.getEmail()).toEqual('email.com');
        });
    });
    describe('getId', () => {
        it('should return the input the engineers id', () => {
            const engineer = new Engineer('name', '123456', 'email', 'github');

            expect(engineer.getId()).toEqual('123456');
        });
    });
    describe('getName', () => {
        it('should return the engineer name', () => {
            const engineer = new Engineer('Tony', 'id', 'email', 'github');

            expect(engineer.getName()).toEqual('Tony');
        });
    });
    describe('getGithub', () => {
        it('should return the engineer github username', () => {
            const engineer = new Engineer('name', 'id', 'email', 'TonyDaTGR');

            expect(engineer.getGithub()).toEqual('TonyDaTGR');
        });
    });
});

