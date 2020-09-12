"use strict";
const person2 = {
    name: 'surj',
    age: 30,
    hobbies: ['sports', 'climbing']
};
//type inference of an array of strings, it's string[]
//what if you need a mixed array?
let favorites;
favorites = ['Sports', 1, true, { foo: 'bar' }];
for (const hobby of person2.hobbies) {
    console.log(hobby.toUpperCase()); //can do all string types because of string[]
    console.log(hobby.splice()); //error because not a str method
}
