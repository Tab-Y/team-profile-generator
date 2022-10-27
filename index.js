const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');  //gets the absolute path to directory 'dist'
const distPath = path.join(DIST_DIR, 'team.html'); //adds team.html to the end of the path

const generateHtml = require('./src/generateHtml');
const generateStyle = require('./src/generateStyle');
const generateReset = require('./src/generateReset');

const teamMembers = []; //empty array to hold each created team member to generate cards


// ---------------------------------
// all of the questions
// --------------------------------
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the name of this manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Id of the manager?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email of the manager?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the office number for this manager?',
        name: 'officeNumber',
    },
];
const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Id of the engineer?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email of the engineer?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the github for this engineer?',
        name: 'github',
    },
];
const internQuestions = [
    {
        type: 'input',
        message: 'What is the name of the intern?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Id of the intern?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email of the intern?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the school associated with this intern?',
        name: 'school',
    },
];
const employeeChoices = [
    {
        type: 'list',
        message: 'What is the school associated with this intern?',
        choices: ['Engineer', 'Intern', 'No more employees'],
        name: 'employeeChoice',
    },
];
const customCss = [
    {
        type: 'list',
        message: 'What style would you like to use?',
        choices: ['Monotone', 'Neon', 'Thermal', 'Inversion'],
        name: 'style',
    }
];

// starts to generate HTML
function writeHtml(teamMembers) {
    fs.writeFile(`./dist/team.html`, generateHtml(teamMembers), (err) =>
        err ? console.error(err) : console.log('HTML created')
    )
};
// starts to generate CSS
function writeStyle (style) {
    fs.writeFile(`./dist/style.css`, generateStyle(style), (err) =>
    err ? console.error(err) : console.log('style created')
    )
};
// Starts to generate reset
function writeReset () {
    fs.writeFile(`./dist/reset.css`, generateReset(), (err) =>
    err ? console.error(err) : console.log('reset created')
    )
};
// Asks for choice on style colors
function customStyle() {
    inquirer
    .prompt(customCss)
    .then((data) => {
        const style = data.style;
        writeStyle(style);
        writeReset();
        writeHtml(teamMembers);
    })
};

function internQuestion() {
    inquirer
    .prompt(internQuestions)
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        teamMembers.push(intern);
        menu();
    })
};

function engineerQuestion() {
    inquirer
    .prompt(engineerQuestions)
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamMembers.push(engineer)
        menu();
    })
};
// function to move into different employees or end (select style)
function menu() {
    inquirer
    .prompt(employeeChoices)
    .then((data) => {
        const nextChoice = data.employeeChoice;
        switch (nextChoice) {
            case 'Engineer':
                engineerQuestion();
                break;
            case 'Intern':
                internQuestion();
                break
            case 'No more employees':
                customStyle();
                break;
        }
    })
};
// function to start on initiation of file
function init() {
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            teamMembers.push(manager);
            menu();
        },
        )
};

init();