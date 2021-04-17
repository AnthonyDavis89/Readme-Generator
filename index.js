// Packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');


// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Please enter your project name?",
        name: "projectName",
    },
    {
        type: 'input',
        message: "Please enter a description for your project?",
        name: "description",
    },
    {
        type: 'input',
        message: "Please enter the installation instructions for your project?",
        name: "install",
    },
    {
        type: 'input',
        message: "Please enter the usage information for your project?",
        name: "usageInfo",
    },
    {
        type: 'input',
        message: "Please enter the contribution guidelines for this project?",
        name: "contributions",
    },
    {
        type: 'input',
        message: "Please enter your test instructions?",
        name: "test",
    },
    {
        type: 'list',
        message: "Please choose one of the following licenses: ",
        name: "licenseChoice",
        choices: ["Apache-2.0", "ISC", "MIT", "BSD-3-Clause"]
    },
    {
        type: 'input',
        message: "Please enter your Github Username?",
        name: "gitUsername",
    }, 
    {
        type: 'input',
        message: "Please enter your email address?",
        name: "email",
    }];




//Function that displays license choice 

function licenseChoice (type){
    let licenseUrl = "";
    
    switch (type) {
        case "Apache-2.0":
            licenseUrl =  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"            
            break;
        case "BSD-3-Clause":
            licenseUrl =  "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"            
            break;
        case "ISC":
            licenseUrl =  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"            
            break;
        case "MIT":
            licenseUrl =  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"            
            break;
        default:
            licenseUrl =  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
            break;
    }
    return licenseUrl;
}


// TODO: Create a function to initialize app
function init() {

inquirer.prompt(questions).then((response) =>

    createReadMe (`## Table of Contents
## Title:
    ${response.projectName}

${licenseChoice(response.licenseChoice)}

## Table of Contents:
- [Description](#Description)  
- [Installation](#Installation)  
- [Usage Information](#UsageInformation)  
- [Contributions](#Contributions)  
- [Test Instructions](#TestInstructions)  
- [Questions](#Questions)   

# Description
    ${response.description}

## Installation
    ${response.install}

## UsageInformation
    ${response.usageInfo}

## Contributions
    ${response.contributions}

## TestInstructions
    ${response.testIns}
    
## Questions
    Do you have any questions? Please feel free to reach me on GitHub:
    https://github.com/${response.gitUsername}
    Or send me a message via email at:
    ${response.email}
        `
 
 )

 ); 

function createReadMe(input) {
    fs.writeFile("README.md", input, (err) =>
  err ? console.error(err) : console.log('Success!')
)
}
}

// Function call to initialize app
init();