"use strict";
// interface Person {
//   name: string;
//   age: number;
let user1;
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
user1 = new Person('Max');
user1.greet('Hi there, I am ');
console.log(user1);
let add2;
add2 = (n1, n2) => {
    return n1 + n2;
};
//you can add optional properties on interfaces
//e.g.
//interface Named {
//   readonly name: string;
//   outputName?: string;
// }
// you can also provide optional paramaters (e.g. in a constructor of a class, or any function)
