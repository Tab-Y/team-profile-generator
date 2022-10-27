function generateReset() {
    // css reset for browser compatability
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

module.exports = generateReset;