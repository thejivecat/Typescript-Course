"use strict";
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'surj' }, 'name'));
