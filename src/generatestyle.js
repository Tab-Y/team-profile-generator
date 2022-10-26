function generateCss(data) {
    const { name, id, email, school, github, officeNumber } = data;
    return`
    /* this is the template for the CSS Style to be generated */

/* 
font-family: 'Anton', sans-serif;
font-family: 'Signika Negative', sans-serif;
 */

:root {
    --lightback: rgb(190, 211, 238);   /* change these for different palettes */
    --darkback: rgb(5, 19, 36);     /* change these for different palettes */
    --darkbackcircle: rgb(49, 62, 78);      /* change these for different palettes */
    --accent: rgb(243, 60, 197);        /* change these for different palettes */
    --white: rgba(236, 252, 248, 0.979);        /* change these for different palettes */
}
body.container-fluid {
    padding: 0;
    background-image: linear-gradient(to top, var(--lightback), var(--accent));
}

.custom-header {
    display: flex;
    height: 150px;
    width: 100vw;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    font-family: 'Anton', sans-serif;
    color: var(--darkback);
    border-radius: 0% 0% 45% 45%/0% 0% 75% 75%;
    border-bottom: 2px solid var(--lightback);
    background-image: radial-gradient(circle at center,var(--lightback) 0%, var(--darkbackcircle)8%, var(--darkback) 75%, var(--accent)99%);
}
.card {
    margin: 10px;
    padding: 0;
    font-family: 'Signika Negative', sans-serif;
    color: var(--darkback);
}
.custom-card {
    background-image: linear-gradient(to top, var(--white), var(--lightback));
}
.card-header {
    background-image: linear-gradient(to top, var(--accent), var(--lightback));
}
a {
    color: var(--accent);
}
    `
};

function writeToFile(fileName, data) {
    fs.writeFile(`../dist/${fileName}`, generateHtml(data), (err) =>
        err ? console.error(err) : console.log('style created')
    )
};

function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
        const fileName = `style.css`;
        writeToFile(fileName, data);
    })
};
init();