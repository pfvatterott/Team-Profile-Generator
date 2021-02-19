const { Employee } = require('../lib/employee');
const { Manager } = require('../lib/employee');
const { Engineer } = require('../lib/employee');
const { Intern } = require('../lib/employee');


// Employee Tests
describe("Employee", () => {
    describe("getName", () => {
        it("should return the name of the employee", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const example = new Employee(name, id, email);
            const result = example.getName();
            expect(result).toEqual(name);
        });
    });
    describe("getId", () => {
        it("should return the id of the employee", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const example = new Employee(name, id, email);
            const result = example.getId();
            expect(result).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should return the email of the employee", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const example = new Employee(name, id, email);
            const result = example.getEmail();
            expect(result).toEqual(email);
        });
    });
    describe("getRole", () => {
        it("should return the role of the employee", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const example = new Employee(name, id, email);
            const result = example.getRole();
            expect(result).toEqual("Employee");
        });
    });
});

// Manager Tests
describe("Manager", () => {
    describe("getName", () => {
        it("should return the name of the manager", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const office = 540;
            const example = new Manager(name, id, email, office);
            const result = example.getName();
            expect(result).toEqual(name);
        });
    });
    describe("getId", () => {
        it("should return the id of the manager", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const office = 540;
            const example = new Manager(name, id, email, office);
            const result = example.getId();
            expect(result).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should return the email of the manager", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const office = 540;
            const example = new Manager(name, id, email, office);
            const result = example.getEmail();
            expect(result).toEqual(email);
        });
    });
    describe("getRole", () => {
        it("should return the role of the manager", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const office = 540;
            const example = new Manager(name, id, email, office);
            const result = example.getRole();
            expect(result).toEqual("Manager");
        });
    });
    describe("getOfficeNumber", () => {
        it("should return the office number of the manager", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const office = 540;
            const example = new Manager(name, id, email, office);
            const result = example.getOfficeNumber();
            expect(result).toEqual(office);
        });
    });
});

// Engineer Tests
describe("Engineer", () => {
    describe("getName", () => {
        it("should return the name of the engineer", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const github = "pfvatterott";
            const example = new Engineer(name, id, email, github);
            const result = example.getName();
            expect(result).toEqual(name);
        });
    });
    describe("getId", () => {
        it("should return the id of the engineer", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const github = "pfvatterott";
            const example = new Engineer(name, id, email, github);
            const result = example.getId();
            expect(result).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should return the email of the engineer", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const github = "pfvatterott";
            const example = new Engineer(name, id, email, github);
            const result = example.getEmail();
            expect(result).toEqual(email);
        });
    });
    describe("getRole", () => {
        it("should return the role of the engineer", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const github = "pfvatterott";
            const example = new Engineer(name, id, email, github);
            const result = example.getRole();
            expect(result).toEqual("Engineer");
        });
    });
    describe("getOfficeNumber", () => {
        it("should return the office number of the engineer", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const github = "pfvatterott";
            const example = new Engineer(name, id, email, github);
            const result = example.getGithub();
            expect(result).toEqual(github);
        });
    });
});

// Intern Tests
describe("Intern", () => {
    describe("getName", () => {
        it("should return the name of the intern", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const school = "Iowa";
            const example = new Intern(name, id, email, school);
            const result = example.getName();
            expect(result).toEqual(name);
        });
    });
    describe("getId", () => {
        it("should return the id of the intern", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const school = "Iowa";
            const example = new Intern(name, id, email, school);
            const result = example.getId();
            expect(result).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should return the email of the intern", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const school = "Iowa";
            const example = new Intern(name, id, email, school);
            const result = example.getEmail();
            expect(result).toEqual(email);
        });
    });
    describe("getRole", () => {
        it("should return the role of the intern", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const school = "Iowa";
            const example = new Intern(name, id, email, school);
            const result = example.getRole();
            expect(result).toEqual("Intern");
        });
    });
    describe("getOfficeNumber", () => {
        it("should return the office number of the intern", () => {
            const name = "Paul Vatterott";
            const id = 45;
            const email = "pfvatterott@gmail.com";
            const school = "Iowa";
            const example = new Intern(name, id, email, school);
            const result = example.getSchool();
            expect(result).toEqual(school);
        });
    });
});
