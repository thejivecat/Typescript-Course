type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //intersection type that contains two custom types, can also work with interfaces

const e1: ElevatedEmployee = {
  name: 'Srujan',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //this enforces the types the two custom types have in common, in this case just number

let num1: Universal = 5;
// num1 = 'hello'; doesn't work b/c Universal is only number type based on intersection 

//type guards

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') { //type guard b/c different types have different logic and methods
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   console.log('Privileges ': emp.privileges) //emp might not have privileges property
// }

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) { //can't do typeof check b/c typescript doesn't allow to access emp.employee
    console.log('Privileges: ' + emp.privileges) //emp might not have privileges property, need a different type guard
  }
  if ('startDate' in emp) {
    console.log('Start date: ' + emp.startDate);
  }
}
printEmployeeInfo(e1);

//when working with classes, use the instanceof type guard

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if ('loadCargo' in vehicle) { //one way to typeguard
//     vehicle.loadCargo(1);
//   }
// }

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) { //better way to typeguard, if vehicle is an instance of Truck class
    vehicle.loadCargo(1);
  }
}
useVehicle(v1);
useVehicle(v2);

//discriminated unions, a common property in each interface that describes the object

//here, Bird interface has type 'bird' which means it must have a flyingSpeed, and type 'horse' must have runningSpeed

interface Bird {
  type: 'bird'
  flyingSpeed: number
}
interface Horse {
  type: 'horse'
  runningSpeed: number 
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird': 
      speed = animal.flyingSpeed
      break;
    case 'horse':
      speed = animal.runningSpeed
      break;
  }
  console.log('Moving with speed: ' + speed)
}
moveAnimal({type: 'bird', flyingSpeed: 15})

//Type Casting --you can tell ts a value is of a type that it can't detect on its own

