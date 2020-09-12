// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// //interfaces can't have initializers or default values
// //just ways of setting up structure 

// let user1: Person;

// user1 = {
//   name: 'Srujan',
//   age: 25,
//   greet(phrase: string) {
//     console.log(phrase + ' - ' + this.name);
//   }
// };

// user1.greet('Hi there, my name is');

//why use interface instead of types?
//defines the structure of an object, more specific than custom types
//you can also implement a interface in a class
//you can implement multiple interfaces as well

interface Named {
  readonly name: string;
}
interface Greetable extends Named{ // you can extend interfaces
  greet(phrase: string): void;
}
let user1: Greetable;

class Person implements Greetable {
  name: string;
  constructor(n: string) {
    this.name = n;

  }
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}
user1 = new Person('Max');
user1.greet('Hi there, I am ');
console.log(user1);

//readonly interface properties

//you can add readonly modifier (can't use private or public)
  //can't be changed once it is set in the initialized object


//you can extend multiple interfaces

//interfaces as function types

// type AddFn = (a: number, b: number) => number; OR:
interface AddFn { //alternate syntax to custom type
  (a: number, b: number): number;
}

let add2: AddFn;

add2 = (n1: number, n2: number) => {
  return n1 + n2;
}

//you can add optional properties on interfaces

//e.g.
//interface Named {
//   readonly name: string;
//   outputName?: string;
// }
// you can also provide optional paramaters (e.g. in a constructor of a class, or any function)

