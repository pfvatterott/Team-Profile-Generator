class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        returns `${this.name}`
    };
    getId(){
        returns `${this.id}`
    };
    getEmail(){
        returns `${this.email}`
    };
    getRole(){
        returns ("Employee")
    };
};

class Manager extends Employee {
    constructor(officeNumber)
    getRole(){
        returns ("Manager")
    }
};

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub(){
        returns `${this.github}`
    };
    getRole() {
        returns ("Engineer")
    }
};

class Intern extends Employee {
    constructor(school) {
        this.school = school
    };
    getSchool(){
        returns `${this.school}`
    }
    getRole() {
        returns ("Intern")
    }
}