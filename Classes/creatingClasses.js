"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string // = 'Default' (optional initial value);
        this.employees = []; //now only accessible from the methods within the class, public is default
        // this.name = n; //sets property name to value of n when obj is created
        // this.id = id;
        //setting the parameters in constructor w/ access modifier tells class to have those properties upon construction
    }
    describe() {
        console.log(`Department (${this.id}):  ` + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Srujan');
accounting.addEmployee('Max');
// accounting.employees[2] = 'Anna'; //you want to avoid this, use the built in methods
accounting.describe();
accounting.printEmployeeInformation();
// let accountingCopy = { name: 's', describe: accounting.describe }; //can't get reference to this.department on original accounting obj
// accountingCopy.describe(); //return undefined, we get error b/c this isn't referring to an object of type Department
//vanilla does not recognize public and private keywords, only es6
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT'); //calls constructor of Department
    }
}
const IT = new ITDepartment('d1', ['Srujan', 'Max']);
