"use strict";
var e1 = {
    name: 'Srujan',
    privileges: ['create-server'],
    startDate: new Date(),
};
var num1 = 5;
// num1 = 'hello'; doesn't work b/c Universal is only number type based on intersection 
//type guards
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //type guard b/c different types have different logic and methods
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
// function printEmployeeInfo(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   console.log('Privileges ': emp.privileges) //emp might not have privileges property
// }
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) { //can't do typeof check b/c typescript doesn't allow to access emp.employee
        console.log('Privileges: ' + emp.privileges); //emp might not have privileges property, need a different type guard
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}
printEmployeeInfo(e1);
//when working with classes, use the instanceof type guard
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if ('loadCargo' in vehicle) { //one way to typeguard
//     vehicle.loadCargo(1);
//   }
// }
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { //better way to typeguard, if vehicle is an instance of Truck class
        vehicle.loadCargo(1);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 15 });
//Type Casting --you can tell ts a value is of a type that it can't detect on its own
