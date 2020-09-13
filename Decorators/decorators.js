"use strict";
//Decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//used for classes, first arg is constructor of the class you're applying decorator to
function Logger(constructor) {
    console.log('logging...');
}
let Person1 = class Person1 {
    constructor() {
        this.name = 'surj';
        console.log('creating person object');
    }
};
Person1 = __decorate([
    Logger //@ is an identifier that points to a function that is the decorator
], Person1);
const pers = new Person1();
console.log(pers); //decorator function executes when class is defined, so it happens before instantiation
