// function add(n1: number , n2: number, showResult: boolean, phrase: string){
//
//     const result = n1 + n2
//     if(showResult){
//         console.log(phrase + result)
//     }else{
//         return result
//     }
//
// }
//
// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is:'
//
// add(number1,number2,printResult,resultPhrase);

// const admin = 'ADMIN'

// enum Role { ADMIN='ADMIN', READ_ONLY=100,AUTHOR=200}
//
// const person = {
//     name: 'Shubham',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     //role: [2, 'author']
//     role: Role.ADMIN
// }
//
// // person.role.push('admin');
// // person.role[1] = 10;
//
//
// // console.log(person.nickname)
//
// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());
// }
//
// if(person.role === Role.ADMIN){
//     console.log("Is a Admin")
// }
//
// let favouriteActivites: any[];
// favouriteActivites = ['BasketBall']
//
// for(const activity of favouriteActivites){
//     console.log(activity)
// }

////////////// Union Type ////////////////////////////////
// function  combine(input1: number | string , input2: number | string){
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number'){
//         result = input1 + input2;
//     }else{
//         result = input1.toString() + input2.toString();
//
//     }
//     return result
//
//
// }
//
// console.log(combine('Max', 'Anna'))
// console.log(combine(56.2, 45))

//////////////////// Literal Type /////////////////////////////////
function  combine(input1: number | string , input2: number | string , resultConversion: 'as-number' | 'as-text'){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }

    return result;
}

console.log(combine(45,23, 'as-text'));
console.log(combine('Rupal', 'Parul', 'as-text'))
