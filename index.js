const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's id?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's Email?"
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is the team manager's office number?"
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of team member would you like to add?',
        choices: ['Intern', 'Engineer', "I don't want to add any more team members"],
    },
]

function init(questions) {
    inquirer.prompt(questions).then(answers => {
        
})
}

init(questions);