interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[] //['required', 'positiveNumber']
  }
}
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ['required'] //better to retrieve existing validators then add new ones to the existing list
  }
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ['positiveNumber'] //better to retrieve existing validators then add new ones to the existing list
  }
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch(validator) {
        case 'required': return !!obj[prop]
        case 'positive': return obj[prop] > 0
      }
    }
  }
  return true;
}

class Course {
  @Required
  title: string
  @PositiveNumber
  price: number

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}