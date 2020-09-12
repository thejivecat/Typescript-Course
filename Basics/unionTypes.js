"use strict";
//union types can combine type assignments, in this case number and string
//can combine as many types as we want
//plus operator doesn't work without checks since input could be a number
//you can be more flexible with union types, but you may have different logic 
//based on what types of inputs you have, thus requiring additional checks
//typescript won't let you use string methods on a number and vice versa with union types
function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26);
console.log(combinedAges);
const combinedNames = combine('surj', 'fluff');
