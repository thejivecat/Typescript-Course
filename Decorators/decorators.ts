//Decorators

//used for classes, first arg is constructor of the class you're applying decorator to

function Logger(constructor: Function) {
  console.log('logging...');
}

@Logger //@ is an identifier that points to a function that is the decorator
class Person1 {
  name = 'surj';

  constructor() {
    console.log('creating person object');
  }
}

const pers = new Person1();

console.log(pers); //decorator function executes when class is defined, so it happens before instantiation



