function LoggerDecor(logString: string) {
  return function (constructor: Function) {
    console.log('logging...');
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) { //decorator that generates html 
  return function<T extends { new(...args: any[]): {name: string} }>(originalConstructor: T) { //use underscore as paramater b/c we don't use it
    
    return class extends originalConstructor { //returning a new constructor function that executes when class is instantiated
      constructor(..._: any[]) {
        super();
        console.log('rendering template!')
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
}

@LoggerDecor('LOGGING-PERSON') //can add multiple decorators, bottom most decorator executes first(in this case, WithTemplate runs first)
@WithTemplate('<h1>My person obj<h1>', 'app')
class Person2 {
  name = 'surj';
  constructor() {
    console.log('creating person object')
  }
}

const pers1 = new Person2();

console.log(pers1);