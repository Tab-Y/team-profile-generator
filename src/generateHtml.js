function generateHtml(teamMembers) {
    const employeeCards = [];
    function setCards() {

        function managerCard(manager) {
            let mgrCard = `
        <div class="card col-xl-2 col-lg-3 col-md-5 col-sm-10 col-10 shadow" style="width: 18rem">
        <div class="card-header">
            <h5 class="card-title">${manager.getName()}</h5>
            <h6 class="card-subtitle"><i></i>${manager.getRole()}</h6>
        </div>
        <div class="card-body custom-card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item rounded-pill m-1">ID : ${manager.id}</li> <!-- employee -->
                <li class="list-group-item rounded-pill m-1">email : <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item rounded-pill m-1">office Number : ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        </div> 
        `
            employeeCards.push(mgrCard)
        };

        function engineerCard(engineer) {
            let engCard = `
        <div class="card col-xl-2 col-lg-3 col-md-5 col-sm-10 col-10 shadow" style="width: 18rem">
        <div class="card-header">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h6 class="card-subtitle"><i></i>${engineer.getRole()}</h6>
        </div>
        <div class="card-body custom-card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item rounded-pill m-1">ID : ${engineer.getId()}</li> <!-- employee -->
                <li class="list-group-item rounded-pill m-1">email : <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item rounded-pill m-1">github : <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
        </div> 
        `
            employeeCards.push(engCard);
        };

        function internCard(intern) {
            let internCard = `
        <div class="card col-xl-2 col-lg-3 col-md-5 col-sm-10 col-10 shadow" style="width: 18rem">
        <div class="card-header">
            <h5 class="card-title">${intern.getName()}</h5>
            <h6 class="card-subtitle"><i></i>${intern.getRole()}</h6>
        </div>
        <div class="card-body custom-card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item rounded-pill m-1">ID : ${intern.getId()}</li> <!-- employee -->
                <li class="list-group-item rounded-pill m-1">email : <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item rounded-pill m-1">school : ${intern.getSchool()}</li>
            </ul>
        </div>
        </div> 
            `
            employeeCards.push(internCard);
        };

        for (let i = 0; i < teamMembers.length; i++) {
            if (teamMembers[i].getRole() === 'Manager') {
                managerCard(teamMembers[i]);
            };
            if (teamMembers[i].getRole() === 'Engineer') {
                engineerCard(teamMembers[i]);
            };
            if (teamMembers[i].getRole() === 'Intern') {
                internCard(teamMembers[i]);
            }
        };

        return employeeCards.join('');
    };
    setCards();
    return `
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
    <header class="custom-header mx-auto">
        <h1 class="display-4 text-center">MY TEAM</h1>
    </header>
    <main class="row flex-row justify-content-center mx-auto" id="employeeCards">
<!-- each card will need to be generated for the input -->
${employeeCards}


    </main>
    <script src="./script.js"></script>
</body>
</html>
`
};

module.exports = generateHtml;