const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./generateMarkdown");

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project."
    },
    {
      type: "input",
      name: "installation",
      message: "What should be installed for your project to function properly?"
    },
    {
      type: "input",
      name: "usage",
      message: "What can your project be used for?"
    },
    {
      type: "checkbox",
      name: "license",
      message: "Choose a license type below:",
      choices: [
            "Apache",
            "GPLv3",
            "MIT"
        ],
      default: "GPLv3"
    },
    {
      type: "input",
      name: "contribution",
      message: "Who has contributed to this project?"
    },
    {
      type: "input",
      name: "tests",
      message: "What kind of tests are included?"
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
  ];

  function promptUser() {
    return inquirer.prompt(questions)
};

// function to write README file
// function writeToFile('ReadMe.md', ) {
// }

// function to initialize program
async function init() {
    try {
      const answers = await promptUser();
  
      const readMe = generateMarkdown(answers);
  
      await writeFileAsync("ReadMe.md", readMe);
  
      console.log("Successfully wrote to ReadMe.md");
    } catch(err) {
      console.log(err);
    }
  }

// function call to initialize program
init();