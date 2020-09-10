class Department {
  // private id: string;
  // private name: string // = 'Default' (optional initial value);
  private employees: string[] = []; //now only accessible from the methods within the class, public is default

  constructor(private readonly id: string, private name: string) { //a function that is executed when the obj is created
    // this.name = n; //sets property name to value of n when obj is created
    // this.id = id;
    //setting the parameters in constructor w/ access modifier tells class to have those properties upon construction
  }

  describe(this: Department) { //this should always refer to an instance of Department
    console.log(`Department (${this.id}):  ` + this.name);
  }
  
  addEmployee(employee: string) {
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

class ITDepartment extends Department { //inherit the Department class
  constructor(id: string, admins: string[]) {
    super(id, 'IT'); //calls constructor of Department
  }
}
const IT = new ITDepartment('d1', ['Srujan', 'Max']);
