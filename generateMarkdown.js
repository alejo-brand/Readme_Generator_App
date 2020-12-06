// function createBadge ()





//this function will generate the markdown for the readme
function generateMarkdown(data){
    return `# ${data.projectName}

## Description
${data.description}

## Table of Content

* [Motivation](#motivation)
* [installation Instructions](#installation)
* [Usage](#installation)
* [license](#license)
* [installation Instructions](#installation)
* [installation Instructions](#installation)
* [installation Instructions](#installation)
* [installation Instructions](#installation)
* [installation Instructions](#installation)
## Motivation/Purpose
${data.motivation}

## Instalation
${data.installation}

## Usage
${data.usage}

## License

\n* [License](#license)\n

![License](https://img.shields.io/badge/license-${data.license}-informational.svg)


## Testing
${data.test}

## Contributing
${data.contribution}

## Feedback
your feedback is extremely important for improvements in future developments, in order to accomplish this, you can:
${data.feedback}

## Developer Contact
* GitHub Username: ${data.GitHubName}
* Email: ${data.email}
    
    
    `;
}
module.exports = generateMarkdown;