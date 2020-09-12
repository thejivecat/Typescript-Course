

const fetchedUserData = {
  id: 'u1',
  name: 'max',
  job: {title: 'CEO', description: 'my own company'}
}

console.log(fetchedUserData?.job?.title); //way to check if job and title props exists
//used if we're fetching data from server

//Nullish Coalescing

// const userInput1 = null;
const userInput1 = '';
const storedData = userInput ?? "DEFAULT" //nullish coalescing operator, if userInput is null or undefined, use the default fallback value
