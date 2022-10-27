
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

function generateReset() {
    
    return`
    /* this is the template for the CSS reset to be generated */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    height: 100%;

}

body {
    min-height: 100%;
    line-height: 1;
    font-family: serif;
}

h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
}

input, select, option, optgroup, textarea, button, pre, code {
    font-size: 100%;
    font-family: inherit;
}

ol, ul {
    list-style: none;
}
    `
};

function generateStyle(style) {
    let chosenStyle = [];

    switch (style) {
        case 'Monotone':
            let monotone = `
            --lightback: rgb(224, 224, 224);   /* change these for different palettes */
            --darkback: rgb(30, 31, 32);     /* change these for different palettes */
            --darkbackcircle: rgb(111, 119, 128);      /* change these for different palettes */
            --accent: rgb(180, 167, 150);        /* change these for different palettes */
            --white: rgba(250, 250, 250, 0.979);        /* change these for different palettes */
            `
            chosenStyle.push(monotone);
            break;
        case 'Neon':
            let neon = `
            --lightback: rgb(190, 211, 238);   /* change these for different palettes */
            --darkback: rgb(5, 19, 36);     /* change these for different palettes */
            --darkbackcircle: rgb(49, 62, 78);      /* change these for different palettes */
            --accent: rgb(243, 60, 197);        /* change these for different palettes */
            --white: rgba(236, 252, 248, 0.979);        /* change these for different palettes */
            `
            chosenStyle.push(neon);
            break;
        case 'Thermal':
            let thermal = `
            --lightback: rgb(252, 252, 5);   /* change these for different palettes */
            --darkback: rgb(2, 20, 13);     /* change these for different palettes */
            --darkbackcircle: rgb(9, 11, 129);      /* change these for different palettes */
            --accent: rgb(221, 44, 13);        /* change these for different palettes */
            --white: rgba(250, 250, 250, 0.979);        /* change these for different palettes */
            `
            chosenStyle.push(thermal);
            break;
        case 'Inversion':
            let inversion = `
            --lightback: rgb(48, 47, 47);   /* change these for different palettes */
            --darkback: rgb(202, 243, 227);     /* change these for different palettes */
            --darkbackcircle: rgb(112, 114, 243);      /* change these for different palettes */
            --accent: rgb(164, 184, 132);        /* change these for different palettes */
            --white: rgba(19, 19, 19, 0.979);        /* change these for different palettes */
            `
            chosenStyle.push(inversion);
            break;
    }


    return `
    /* this is the template for the CSS Style to be generated */

    /* 
    font-family: 'Anton', sans-serif;
    font-family: 'Signika Negative', sans-serif;
     */
    
    :root {
  ${chosenStyle}
    }
    body.container-fluid {
        padding: 0;
        background-image: radial-gradient(ellipse at bottom, var(--accent)8%, var(--darkbackcircle)45%, var(--darkback)60%);
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    
    .custom-header {
        display: flex;
        height: 150px;
        width: 100vw;
        margin-bottom: 15px;
        justify-content: center;
        align-items: center;
        font-family: 'Anton', sans-serif;
        color: var(--white);   
        background-image: radial-gradient(ellipse at top, var(--accent)3%, var(--darkbackcircle) 35%, var(--darkback)60%);
    }
    .card {
        margin: 10px;
        padding: 0;
        font-family: 'Signika Negative', sans-serif;
        color: var(--darkback);
    }
    .custom-card {
        background-image: linear-gradient(to top, var(--white), var(--lightback)98%, var(--accent)102%);
    }
    .card-header {
        background-image: linear-gradient(to top, var(--accent)1%, var(--accent)50%, var(--lightback)98%);
    }
    .list-group-item {
        background-color: var(--white);
    }
    a {
        color: var(--accent);
    }
    `
};


// this will be input taken from class constructors
