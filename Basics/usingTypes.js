"use strict";
//Types:
//1) number (1, 5.3, -10) -- all numbers, no differentiation b/t integers or floats
//2) string ('hi', "hi", `'hi`) -- all text values
//3) boolean (true, false) only these two, not including truthy/falsy
function add(num1, num2) {
    return num1 + num2;
}
console.log(add('1', 2)); //error b/c first arg is not number type
console.log(add(1, 2));
// run tsc [name of file] to compile ts file to js file
//js uses 'dynamic types' (resolved at runtime) whereas
//ts uses 'static types' (set during development)
//function call only takes as many args as paramaters are defined in function def
var add1;
(function (n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
});
var number1 = 5; //5.0 is same(float)
var number2 = 2.8;
var showResult = true;
var resultPhrase = 'Result is: ';
add1(number1, number2, showResult, resultPhrase);
//using number, boolean, string
//ts logic only runs in compiler, but js file that is created doesn't have any ts
//ts has type inference--tries to infer types in variables
//e.g. const num1 = 5 -- num1 is inferred to always be type number
//let num1: number = 5 is not good practice
//let num1: number 
// num1 = 5;
//is okay if you're just initiliazing
//let resultPhrase = 'hello';
//resultPhrase = 5 will throw error because ts inferred resultPhrase to be string, not number
