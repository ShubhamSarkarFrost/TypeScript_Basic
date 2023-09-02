"use strict";
var _a;
const e1 = {
    name: 'Max',
    privelages: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name' + emp.name);
    if ('privelages' in emp) {
        console.log('Privileages' + emp.privelages);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving a Car...........');
    }
}
class Truck {
    drive() {
        console.log('Driving a Truck..........');
    }
    loadCargo(amount) {
        console.log('Loading Cargo.....' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'Horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with Speed' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const inputText = document.getElementById('user-input');
inputText.value = 'Hi There';
const errorBug = {
    email: 'Not a Valid email',
    username: 'Must Start with a Capital Character'
};
const result = add('Max', 'Shubham');
console.log(result.split(' '));
const fetchedUserData = {
    id: 'u1',
    name: 'Shubham',
    job: { title: 'CEO', description: 'My Own Company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const UserInput = null;
const storedData = UserInput !== null && UserInput !== void 0 ? UserInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=app.js.map