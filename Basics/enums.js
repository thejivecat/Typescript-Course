"use strict";
//enum type -- doesn't exist in JS, is a custom type
// enum {NEW, OLD} -- added by typescript: automatically enumerated global constant identifiers
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; //each property receives a number identifier
const person4 = {
    name: 'surj',
    age: 30,
    hobbies: ['sports', 'cooking'],
    // role: 4 -- may forget what this number means(where enums come in)
    role: Role.ADMIN
};
//if you want enums to pick up from a different number, then:
var Example;
(function (Example) {
    Example[Example["ADMIN"] = 5] = "ADMIN";
    Example[Example["USER"] = 6] = "USER";
    Example[Example["AUTHOR"] = 7] = "AUTHOR";
})(Example || (Example = {}));
//now USER = 6, AUTHOR = 7, etc...
//OR!!!
var ex2;
(function (ex2) {
    ex2[ex2["ADMIN"] = 5] = "ADMIN";
    ex2[ex2["AUTHOR"] = 100] = "AUTHOR";
    ex2["USER"] = "hello";
})(ex2 || (ex2 = {}));
//can have mixed types, custom assignments
