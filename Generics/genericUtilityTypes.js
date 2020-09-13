"use strict";
//built in types that utilize generic types
function createCourseGoal(title, description, date) {
    let courseGoal = {}; //lets us set CourseGoal as partial type before it satisfies those conditions
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names1 = ['max', 'anna'];
// names1.push('manu'); //won't work now b/c we can't change readonly value
//Generic types vs Union types
//if we want an array of same data type, need generic types
//if we want an array of mixed data types, we can use union types
