// type AddFn = (a: number ,b: number) => number;

// let add: AddFn

// add = (n1: number, n2: number) =>{
//     return n1 + n2;
// }

//////// same Custom Type with Interface ////////////

interface AddFn {
    (a: number, b: number): number;

}

let add: AddFn;

add = (a: number, b: number) =>{
    return a + b;
}


interface Named {
    //readonly name?: string;
    name?: string;
    outputName?: string;
}


interface Greetable extends Named {
    //readonly name : string; 
    greet(phrase: string) : void;
}


class Person implements Greetable {
   name?: string;
   age = 30;

   constructor(n?: string){
    if(n){
        this.name = n;
    }
    
   }

   greet(phrase: string) {
    if(this.name){
        console.log(phrase + ' ' + this.name)
    }
    else {
        console.log("Hi")
    } 
    
   }
}

let user1: Greetable;

// user1 = {
//     name: 'Max',
//     greet(phrase: string){
//     console.log(phrase + " " +this.name)
//     }
// }

user1 = new Person('Shubham');
user2 = new Person('')

user1.greet("Hi There  - I am ");
console.log(user1)
user2.greet("")
console.log(user2)





