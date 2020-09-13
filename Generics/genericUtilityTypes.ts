//built in types that utilize generic types

interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal(title: string, 
  description: string, 
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; //lets us set CourseGoal as partial type before it satisfies those conditions
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names1: Readonly<string[]> = ['max', 'anna'];

// names1.push('manu'); //won't work now b/c we can't change readonly value

//Generic types vs Union types

//if we want an array of same data type, need generic types
//if we want an array of mixed data types, we can use union types