const inquirer = require('inquirer');
const fs = require('fs');
const { Manager } = require('./lib/employee');
const { Engineer } = require('./lib/employee');
const { Intern } = require('./lib/employee');
const createHTML = require('./src/page-template');






var output = [];

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
        message: "What is the team manager's Email?",
        validate: function (value) {
            var pass = value.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if (pass) {
                return true;
            }
            
            return 'Please enter a valid email address'
        }
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
    }
];


const intern = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the Intern's Name?"
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the Intern's id?"
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the Intern's Email?",
        validate: function (value) {
            var pass = value.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if (pass) {
                return true;
            }
            
            return 'Please enter a valid email address'
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "Where does the intern go to school?"
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of team member would you like to add?',
        choices: ['Intern', 'Engineer', "I don't want to add any more team members"],
    }
];

const engineer = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the Engineer's Name?"
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the Engineer's id?"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the Engineer's Email?",
        validate: function (value) {
            var pass = value.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if (pass) {
                return true;
            }
            
            return 'Please enter a valid email address'
        }
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the Engineer's github?"
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of team member would you like to add?',
        choices: ['Intern', 'Engineer', "I don't want to add any more team members"],
    }
    
];


function init(questions) {
    inquirer.prompt(questions).then(answers => {
        output.push(answers)
        if (answers.employeeType === "Intern") {
            classQuestions(intern);
        }
        else if (answers.employeeType === "Engineer") {
            classQuestions(engineer);
        }
        else {
            newMember = new Manager(output[0].managerName, output[0].managerId, output[0].managerEmail, output[0].managerOffice)
            console.log(newMember);
        }   
    })
}

function classQuestions(questions) {
    inquirer.prompt(questions).then(classAnswers => {
        output.push(classAnswers);
        if (classAnswers.employeeType === "Intern" ) {
            classQuestions(intern);
        }
        else if (classAnswers.employeeType === "Engineer") {
            classQuestions(engineer);
        }
        else {
            let newMember;
            let employeeList = [];
            for (let i = 0; i < output.length; i++) {
                if(output[i].managerName) {
                    newMember = new Manager(output[i].managerName, output[i].managerId, output[i].managerEmail, output[i].managerOffice)
                    employeeList.push(newMember);
                }
                else if(output[i].internName) {
                    newMember = new Intern(output[i].internName, output[i].internId, output[i].internEmail, output[i].internSchool)
                    employeeList.push(newMember);
                }
                else if(output[i].engineerName) {
                    newMember = new Engineer(output[i].engineerName, output[i].engineerId, output[i].engineerEmail, output[i].engineerGithub)
                    employeeList.push(newMember);
                }
                
            }
            console.log(employeeList[0]);
            writeHTML(employeeList)
            // seems like the html will be generated here.
        }
    })
}

function writeHTML(employeeList) {
    fs.writeFile('index.html', createHTML(employeeList), (err) => 
    err ? console.error(err) : console.log('Your UserREADME has been created!'))
};


init(questions);

