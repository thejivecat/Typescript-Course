//literal types are specific version of types

//e.g. 

//
let person5 : {
  name: string,
  age: number,
  resultConversion: 'as-number' | 'as-text'
}

//resultConversion can only be 'as-number' or 'as-text', won't accept anything else