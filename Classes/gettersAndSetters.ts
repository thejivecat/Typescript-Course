//getter is a property that executes a function that retrieves info

//e.g. get mostRecentReport() {
//       return this.lastReport
//     }

//use this to access private properties and their info

//a setter is the same but sets new info on private properties

//e.g. set mostRecentReport(value: string) {
//       this.addreport(val);
//} 

//static properties and methods

  //allow you to add properties and methods which are accessed directly from the class w/out instantiation
    //example is Math.[etc] functions

//e.g. static createEmployee(name: string) {
//   return {name: name};
// }

//can't access static props and methods from inside constructor w/ this keyword
//those props and methods aren't available on the instantiated classes
//use name of class to access these props and methods