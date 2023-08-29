// Code goes here!
// Variables & Constants in TypeScript
// let age = 30;
// age = 29;
// const userName = "shubham"
// // var result;
//
//
// function add(a: number, b: number){
//     result = a + b;
//     return result;
// }


//------------------------------ Arrow Function------------------------
// const add = (a: number, b: number) =>{
//     return a + b
// }

// const add = (a: number, b: number = 1) => a + b;
//
// const printOutput : (a: number| string) => void = output => console.log(output);
//
//
// const button = document.querySelector('button')
//
// if(button){
//     button.addEventListener('click', (event) =>{
//         console.log(event)
//     })
// }
//
// console.log(add(2,3))
// // console.log(printOutput(23));
// console.log(add(4))

//--------------------------------- Map Operator ------------------------------
// const hobbies = ['badminton', 'football', 'basketball']
// const newhobbies  = [...hobbies, 'fencing']
// for(let hobby of newhobbies){
//     console.log(hobby)
// }
//
// const Person = {
//     age: 30,
//     name: "shubham"
// }
//
// const copiedPerson = {...Person}
// console.log(copiedPerson.age+ " " + copiedPerson.name);

//------------------------------ Rest Operator ------------------------------------
// const add = (...numbers: number[]) =>{
//     return numbers.reduce((currResult, currValue) =>{
//         return  currResult + currValue
//     }, 0)
// }
//
// const addedValue = add(2,3,4,5,6);
// console.log(`Total Added Value is : ${addedValue}`)

//--------------------------------- Array and Object Destructuring ------------------------
// const hobbies = ['badminton', 'football', 'basketball','fencing']
// const [hobby1,,hobby2] = hobbies
// console.log(`${hobby1} & ${hobby2}`)
//
// const Person = {
//     age: 30,
//     Firstname: "shubham"
// }
//
// const {Firstname, age } = Person
// console.log(`${Firstname} & ${age}`)


