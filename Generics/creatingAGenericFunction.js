"use strict";
// function merge<T, U>(objA: T, objB: U) { //assign generic types, returns intersection of T and U, object is an unspecific type
//   return Object.assign(objA, objB);
// }
//T and U are not set in stone at function def, but are set dynamically when we call the function
// const mergedObj = merge({name: 'max'}, {age:30});
// console.log(mergedObj.age) //now we can access age b/c TS known mergedObj is of type T and U
//Working with Constraints
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// const mergedObj = merge({name: 'max'}, 30); //won't work b/c 30 is a number, not obj
const mergedObj = merge({ name: 'max' }, { age: 30 }); //won't work b/c 30 is a number, not obj
console.log(mergedObj.age); //now we can access age b/c TS known mergedObj is of type T and U
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there'));
console.log(countAndDescribe(['sports', 'cooking']));
// console.log(countAndDescribe(10)); //wouldn't work b/c 10 doesn't have length property
