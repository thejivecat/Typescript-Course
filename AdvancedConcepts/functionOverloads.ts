//Function Overloading

function add(a: number, b: number): number //telling the function return types based on input
function add(a: string, b: string): string

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') { //type guard b/c different types have different logic and methods
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

// const result = add(1,5); //ts doesn't know if result is number or string
//as a result, we can't call str or num methods on result

//you can use type casting
// const result = add('Sruj', 'Bethi') as string;
