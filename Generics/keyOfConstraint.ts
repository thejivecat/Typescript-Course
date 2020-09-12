

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) { //keyof keyword allows to make sure second argument is a key of the first argument object
  return obj[key];
}

console.log(extractAndConvert({name: 'surj'}, 'name'))

