"use strict";
//objects:
// {age: 30}
var person = {
    name: 'Srujan',
    age: 30,
};
console.log(person);
console.log(person.nickname); //property doesn't exist--error
//property types on objects are inferred
var person1 = {
    name: 'surj',
    age: 30
};
//nested objects:
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
//type would be:
// {
//   id: string;
//   price: number;
//   tags: string[],
//   details: {
//     title: string;
//     description: string;
//   }
// }
