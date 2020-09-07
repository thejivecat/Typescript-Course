//enum type -- doesn't exist in JS, is a custom type

// enum {NEW, OLD} -- added by typescript: automatically enumerated global constant identifiers

enum Role {
  ADMIN, READ_ONLY, AUTHOR
}; //each property receives a number identifier
const person4 = {
  name: 'surj',
  age: 30,
  hobbies: ['sports', 'cooking'],
  // role: 4 -- may forget what this number means(where enums come in)
  role: Role.ADMIN
}

//if you want enums to pick up from a different number, then:

enum Example {
  ADMIN = 5, USER, AUTHOR
}
//now USER = 6, AUTHOR = 7, etc...

//OR!!!

enum ex2 {
  ADMIN = 5, AUTHOR = 100, USER = 'hello'
}
//can have mixed types, custom assignments
