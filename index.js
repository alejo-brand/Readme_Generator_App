const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const  questions = [
    {
        type: 'input',
        name: 'GitHubName',
        message: 'What is your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'what is the name of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of the project',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation to build this project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'what license does the project require',
        choices:["MIT","Apache2.0","GPL3.0","BSD_3","None"]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what is the command line necessary to install all the dependencies required',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'what is the command line necessary to run test',
    },
    {
        type:'input',
        name: 'usage',
        message:'what does the user need to know about using the repo', 
    },
    {
        type:'input',
        name:'contribution',
        message:'How can the user contribute to this Development', 
    },
    {
        type:'input',
        name:'feedback',
        message:'How can the user submit any feedback they have for this development',
    }    
]

inquirer
.prompt(questions).then((data) => {
    // console.log(data);

    const readmeContent = generateMarkdown(data)
    fs.writeFile('Readme.md',readmeContent,(err) => {
        err?
        console.log('FAILED TO WRITE FILE'):
        console.log('THE FILE HAS BEEN CREATED')
    })

});