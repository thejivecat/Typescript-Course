"use strict";
var u1 = { name: 'Max', age: 30 };
//simpligy this code :
// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
//to 
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
