"use strict";
//when you have a method on base class but need custom implementations on inherited classes
//e.g. abstract describe (this: Department): void;
//must change original method on base class to abstract
//singleton oop pattern
//only have one instance of a class
//make constructor private
//then create static methods, create private static instance: [nameofClass]
//then access this.instance or return this.instance
//you can instantiate a new class withing that class by setting
//this.instance = new [nameofClass](inputs);
