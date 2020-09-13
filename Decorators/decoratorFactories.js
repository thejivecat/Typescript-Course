"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LoggerDecor(logString) {
    return function (constructor) {
        console.log('logging...');
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log('rendering template!');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = 'surj';
        console.log('creating person object');
    }
};
Person2 = __decorate([
    LoggerDecor('LOGGING-PERSON') //can add multiple decorators, bottom most decorator executes first(in this case, WithTemplate runs first)
    ,
    WithTemplate('<h1>My person obj<h1>', 'app')
], Person2);
const pers1 = new Person2();
console.log(pers1);
