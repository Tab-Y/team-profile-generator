
/*  Structure for style
 <div class="card col-xl-2 col-lg-3 col-md-5 col-sm-10 col-10 shadow" style="width: 18rem">
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
*/


function generateHtml(data) {
    const { name, id, email, school, github, officeNumber } = data;
    return`
    <!-- this will be where the template HTML is stored, to be adjusted and played with to make the page look nice -->
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
            <div class="card col-xl-2 col-lg-3 col-md-5 col-sm-10 col-10 shadow" style="width: 18rem">
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

module.exports = generateHtml;