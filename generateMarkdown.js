
//this function will generate the markdown for the readme
function generateMarkdown(data){
    return `# ${data.projectName}

    ![License](https://img.shields.io/badge/license-${data.license}-informational.svg)

## Description
${data.description}

## Table of Content

* [Motivation](#Motivation/Purpose)
* [installation Instructions](#Installation)
* [Usage](#Usage)
* [license](#License)
* [Testing](#Testing)
* [How to contribute to the project](#Contributing)
* [How to submit your feedback](#Feedback)
* [Developer Contact](#Developer Contact)

## Motivation/Purpose
${data.motivation}

## Installation
${data.installation}

## Usage
${data.usage}

## License

this project is covered under the ${data.license} type license

## Testing
${data.test}

## Contributing
${data.contribution}

## Feedback
your feedback is extremely important for improvements in future developments, in order to accomplish this, you can:
${data.feedback}

## Developer Contact
* GitHub Username: https://github.com/${data.GitHubName}
* Email: ${data.email}
    
    
`;
}
module.exports = generateMarkdown;