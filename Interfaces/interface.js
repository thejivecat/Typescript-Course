"use strict";
// interface Person {
//   name: string;
//   age: number;
var user1;
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
user1 = new Person('Max');
user1.greet('Hi there, I am ');
console.log(user1);
var add2;
add2 = function (n1, n2) {
    return n1 + n2;
};
