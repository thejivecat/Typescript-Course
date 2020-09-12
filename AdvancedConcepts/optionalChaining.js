"use strict";
var _a;
var fetchedUserData = {
    id: 'u1',
    name: 'max',
    job: { title: 'CEO', description: 'my own company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title); //way to check if job and title props exists
//used if we're fetching data from server
//Nullish Coalescing
// const userInput1 = null;
var userInput1 = '';
var storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT"; //nullish coalescing operator, if userInput is null or undefined, use the default fallback value
