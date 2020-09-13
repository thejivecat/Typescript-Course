//you can add decorators to classes
//you can also add decorators to methods of classes

function Log(target: any, propertyName: string) { //can add to properties of classes
  console.log('prop decorator');
  console.log(target);
  console.log(propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) { //can add to getters and setters of class
  console.log('Accessor descriptor!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor ) { //adding to method of class
  console.log('Method descriptor!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) { //adding to a paramater of a function on the class
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  @Log //executes as part of class definition
  title: string;
  private _price: number;

  @Log2
  set price(num: number) {
    if (num > 0) {
      this._price = num;
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

//in what order do these decorators execute?

//these decorators run when classes are defined, not when the constructor function is run to instantiate a new object
