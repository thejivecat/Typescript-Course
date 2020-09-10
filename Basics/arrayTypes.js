"use strict";
var person2 = {
    name: 'surj',
    age: 30,
    hobbies: ['sports', 'climbing']
};
//type inference of an array of strings, it's string[]
//what if you need a mixed array?
var favorites;
favorites = ['Sports', 1, true, { foo: 'bar' }];
for (var _i = 0, _a = person2.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); //can do all string types because of string[]
    console.log(hobby.splice()); //error because not a str method
}
