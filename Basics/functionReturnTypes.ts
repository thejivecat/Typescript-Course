function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num) //return type is 'void'
}

printResult(add(5, 12));

//void return type -- function doesn't have a return statement

//used void type if you don't return anything, use undefined 
//if you just return out of statement

// let combineValues: Function 
let combineValues: (a: number, b: number) => number;
// combineValues = 5; //not possible b/c of Function type 
combineValues = add;
combineValues = printResult; //not possible b/c printResult doesn't satisfy our Function type

console.log(combineValues(8, 8)); // prints 16


console.log(combineValues(8, 8)); // throws runtime error

//Callbacks and Function types

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {console.log(result)});

//by stating void type on Function return, ignore the return result





