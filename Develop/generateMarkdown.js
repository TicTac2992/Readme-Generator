// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## License
  ${data.license}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions about this project, please use my email or find me on GitHub!
  * [${data.email}]
  * [GitHub](http://github.com/${data.github})
`;
}
// export function to use in index.js
module.exports = generateMarkdown;