const inquirer = require('inquirer');
const fs = require('fs');


// will be replaced with class info
const questions = [
    {
        type: 'input',
        message: "What is your name?",
        name: "userName",
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: "location",
    },
    {
        type: 'input',
        message: 'What is your bio?',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your Linkin url?',
        name: 'linkedIn',
    },
    {
        type: 'input',
        message: 'What is your Github URL?',
        name: 'gitHub',
    },
];


function generateHtml(data) {
    const { name, id, email, school, github, officeNumber } = data;
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./reset.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Signika+Negative:wght@500&display=swap" rel="stylesheet">
        <title>My Team</title>
    </head>
    <body class="container-fluid">
        <header class="custom-header shadow-lg">
            <h1 class="display-4 text-center">MY TEAM</h1>
        </header>
        <main class="row justify-content-center mx-auto" id="employeeCards">
        <!-- each card will need to be generated for the input -->
            <div class="card col-2 shadow" style="width: 18rem">
                <div class="card-header">
                    <h5 class="card-title">Name</h5>
                    <h6 class="card-subtitle"><i></i>level</h6>
                </div>
                <div class="card-body custom-card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item rounded-pill m-1">ID : </li> <!-- employee -->
                        <li class="list-group-item rounded-pill m-1">email : <a href=""></a></li>
                        <li class="list-group-item rounded-pill m-1">github : <a href="">github or school or office number</a></li>
                    </ul>
                </div>
            </div>
    
            <div class="card col-2 shadow" style="width: 18rem">
                <div class="card-header">
                    <h5 class="card-title">Name</h5>
                    <h6 class="card-subtitle"><i></i>level</h6>
                </div>
                <div class="card-body custom-card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item rounded-pill m-1">ID : </li> <!-- employee -->
                        <li class="list-group-item rounded-pill m-1">email : <a href=""></a></li>
                        <li class="list-group-item rounded-pill m-1">github : <a href="">github or school or office number</a></li>
                    </ul>
                </div>
            </div>
    
            <div class="card col-2 shadow" style="width: 18rem">
                <div class="card-header">
                    <h5 class="card-title">Name</h5>
                    <h6 class="card-subtitle"><i></i>level</h6>
                </div>
                <div class="card-body custom-card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item rounded-pill m-1">ID : </li> <!-- employee -->
                        <li class="list-group-item rounded-pill m-1">email : <a href=""></a></li>
                        <li class="list-group-item rounded-pill m-1">github : <a href="">github or school or office number</a></li>
                    </ul>
                </div>
            </div>
    
            <div class="card col-2 shadow" style="width: 18rem">
                <div class="card-header">
                    <h5 class="card-title">Name</h5>
                    <h6 class="card-subtitle"><i></i>level</h6>
                </div>
                <div class="card-body custom-card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item rounded-pill m-1">ID : </li> <!-- employee -->
                        <li class="list-group-item rounded-pill m-1">email : <a href=""></a></li>
                        <li class="list-group-item rounded-pill m-1">github : <a href="">github or school or office number</a></li>
                    </ul>
                </div>
            </div>
    
    
        </main>
        <script src="./script.js"></script>
    </body>
    </html>
    
`
};

function writeToFile(fileName, data) {
    fs.writeFile(`../dist/${fileName}`, generateHtml(data), (err) =>
        err ? console.error(err) : console.log('HTML created')
    )
};


// this will be input taken from class constructors
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
        const fileName = `index.html`;
        writeToFile(fileName, data);
    })
};
init();