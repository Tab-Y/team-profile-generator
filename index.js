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
    err ? console.error(err) : console.log('style created')
    )
};

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

// this is the start of the application

// it will prompt the user through inquirer and gather information for the output generation of custom CSS, HTML, and various team-members to be included on the page.

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

