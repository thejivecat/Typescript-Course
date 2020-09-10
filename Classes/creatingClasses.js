"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string // = 'Default' (optional initial value);
        this.employees = []; //now only accessible from the methods within the class, public is default
        // this.name = n; //sets property name to value of n when obj is created
        // this.id = id;
        //setting the parameters in constructor w/ access modifier tells class to have those properties upon construction
    }
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "):  " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Srujan');
accounting.addEmployee('Max');
// accounting.employees[2] = 'Anna'; //you want to avoid this, use the built in methods
accounting.describe();
accounting.printEmployeeInformation();
// let accountingCopy = { name: 's', describe: accounting.describe }; //can't get reference to this.department on original accounting obj
// accountingCopy.describe(); //return undefined, we get error b/c this isn't referring to an object of type Department
//vanilla does not recognize public and private keywords, only es6
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        return _super.call(this, id, 'IT') || this;
    }
    return ITDepartment;
}(Department));
var IT = new ITDepartment('d1', ['Srujan', 'Max']);
