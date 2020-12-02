//this function will generate the markdown for the readme
function generateMarkdown(data){
    return `# ${data.projectName}

    ## Description
    ${data.description}

    ## Motivation/Purpose
    ${data.motivation}

    ## Instalation
    ${data.instalation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Testing
    ${data.test}

    ## Contributing
    ${data.contribution}

    ## Feedback
    your feedback is extremely important for improvements in future developments, in order to accomplish this, you can:
    ${data.feedback}

    ## Developer Contact
    #GitHub Username: ${data.GitHubNamer}
    #Email: ${data.email}
    
    
    `;
}
module.exports = generateMarkdown;