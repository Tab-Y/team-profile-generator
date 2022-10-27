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

function writeToFile(fileName, data) {
    fs.writeFile(`../dist/${styleName}`, generateHtml(data), (err) =>
        err ? console.error(err) : console.log('style created')
    )
};

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data)
            const styleName = `style.css`;
            writeToFile(fileName, data);
        })
};
init();