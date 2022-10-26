function generateCss(data) {
    const { name, id, email, school, github, officeNumber } = data;
    return`

    `
};

function writeToFile(fileName, data) {
    fs.writeFile(`../dist/${fileName}`, generateHtml(data), (err) =>
        err ? console.error(err) : console.log('script created')
    )
};

function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
        const fileName = `script.js`;
        writeToFile(fileName, data);
    })
};
init();