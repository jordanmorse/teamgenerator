//linking files/defining variables
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = []

//starting the function to run the program and asking for a selection that defines employee type
function startProgram() {
    function newTeam(){
        inquirer.prompt([
            {
            type: "list",
            name: "employeeType",
            message: "What kind of employee would you like to add?",
            choices: [
                "manager",
                "engineer",
                "intern",
                "none"
            ]
            }
        ]).then(answers =>{
        switch(answers.employeeType) {
            case "manager":
                createManager();
            break
            case "engineer":
                createEngineer();
            break
            case "intern":
                createIntern();
            break
            default:
                buildTeam();
        }
            })
    };


//defining manager questions with inquirer
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid name."
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your managers's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid ID."
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid email."
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your manager's office number?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid office number."
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            teamMembers.push(manager)
            newTeam();
    })};

//defining intern questions with inquirer
    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid name."
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid ID."
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid email."
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid school."
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            teamMembers.push(intern)
            newTeam();
    })};


 //defining engineer employee questions with inquirer
    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid name."
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your employee's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid ID."
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your employee's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid email."
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your employee's Github?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid Github."
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            teamMembers.push(engineer)
            newTeam();
        })
    }

//function to create the team via the output directory
    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
      }

newTeam();    
}

startProgram()