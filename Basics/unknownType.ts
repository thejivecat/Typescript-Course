let userInput: unknown;
let username: string;
//unknown is used b/c we don't know yet what will type will be stored

userInput = 5; 
userInput = 'surj';
if (typeof userInput === 'string') {
  let username = userInput; //
}


//difference b/t any and unknown?

// can't assign a variable with specific type to a variable with unknown type

