"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num); //return type is 'void'
}
printResult(add(5, 12));
//void return type -- function doesn't have a return statement
//used void type if you don't return anything, use undefined 
//if you just return out of statement
// let combineValues: Function 
let combineValues;
// combineValues = 5; //not possible b/c of Function type 
combineValues = add;
combineValues = printResult; //not possible b/c printResult doesn't satisfy our Function type
console.log(combineValues(8, 8)); // prints 16
console.log(combineValues(8, 8)); // throws runtime error
//Callbacks and Function types
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => { console.log(result); });
//by stating void type on Function return, ignore the return result
