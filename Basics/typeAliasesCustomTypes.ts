type NumberorString = number | string

//create custom types with the type keyword

type ConversionDescriptor = 'as number' | 'as text'

//Type aliases can be used to "create" your own types. You're not limited to storing union types though - 
//you can also provide an alias to a (possibly complex) object type.
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };

//simpligy this code :

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

//to 
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}