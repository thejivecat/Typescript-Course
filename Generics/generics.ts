//Generics

// const names: Array = ['max', 'manu']; can't assign to type array b/c it's a generic type

//array stores data of a specific type

// const names: any[] = ['max', 'manu']

// OR

const names: Array<string> = ['manu','max'] //uses generic type

//generic type is one type connected to another type(e.g. array of strings)

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 2000)
//  })







