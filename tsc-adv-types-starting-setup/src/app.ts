// Code goes here!

///////////////////////////// Intersection Operator - &(Single) /////////////////////////////////////////////////////////

type Admin = {
    name: string;
    privelages:string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privelages: ['create-server'],
    startDate: new Date()
};

////////////////////////////  Intersection in Union ////////////////////////////////
type Combinable = string | number;
type Decision = number | boolean;

type Universal = Combinable & Decision;

//////////////////////////// Type Guard //////////////////////////////////////

//////////// TypeOf Type Guard ///////////////////////////////
function add(a: number, b: number): number;       /////// Method Overloading
function add(a: string, b: string): string;       /////// Method Overloading
function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;  
}

//////////////////////// IN Type Guard //////////////////////////////////

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name' + emp.name)
    if('privelages' in emp){
        console.log('Privileages' + emp.privelages)
    }

    // if('startDate' in emp){
    //     console.log('StartDate' + emp.privelages)
    // }
    //
}


printEmployeeInformation(e1);
printEmployeeInformation({name: 'Manu', startDate: new Date() });
///////////////////////////  Instance Of - Type Guard /////////////////////////////////////////////////////////
class Car {
    drive() {
        console.log('Driving a Car...........')
    }
}

class Truck{
    drive() {
        console.log('Driving a Truck..........')
    }

    loadCargo(amount: number) {
        console.log('Loading Cargo.....'+ amount);
    }
}

type Vehicle = Car  | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle : Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1)
useVehicle(v2)


/////////////////////////////////////////// Descriminated Union ////////////////////////////////////////////////////////////////////////
interface Bird {
    type: 'bird'
    flyingSpeed : number
}

interface Horse {
    type: 'Horse'
    runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch(animal.type){
        case 'bird':
             speed = animal.flyingSpeed;
             break;
        case 'Horse':
             speed = animal.runningSpeed;
             break;     
    }
    console.log('Moving with Speed' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

//////////////////////////////////////// Type Casting ////////////////////////////////////////////////////////////////////////////////////////
//const inputText = <HTMLInputElement>document.getElementById('user-input')!;
const inputText = document.getElementById('user-input')! as HTMLInputElement;
inputText.value = 'Hi There';


///////////////////////////////////// Index Types ////////////////////////////////////////////////////////////////////////////////////////////
interface ErrorContainer {
    [prop: string]: string; 
}

const errorBug: ErrorContainer = {
    email: 'Not a Valid email',
    username: 'Must Start with a Capital Character'
}


//////////////////////////////////// Function Overloading //////////////////////////////////////////////////////////////////////////
const result = add('Max', 'Shubham')    // Type Casting
console.log(result.split(' '));


///////////////////////////////// Optional Overloading //////////////////////////////////////////////////////////////////////
const fetchedUserData = {
    id: 'u1',
    name: 'Shubham',
    job: {title: 'CEO', description: 'My Own Company'}
};

console.log(fetchedUserData?.job?.title);  //////////// Optional Chaining

////////////////////////////// Nullish Coalescing ////////////////////////////////////////////////////////
const UserInput = null ;
const storedData = UserInput ?? 'DEFAULT';

console.log(storedData);




















