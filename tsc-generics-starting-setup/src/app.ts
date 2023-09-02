// Code goes here!
///////////////////////////////// Generics /////////////////////////////////////////////////
// const names: Array<string> = ['Shubham', 'Sarkar']     // <T> is a denoter of Generic Type
// console.log(names[0].split(''))
//
// const promise = new Promise<number>((resolve,_) =>{
//     setTimeout(() =>{
//         resolve(10)
//     }, 2000)
// });
//
// promise.then(data => {
//      //data.split(' ');
//
// })

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }
//
// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// console.log(mergedObj.name);


// function countAndPrint<T extends string>(element:T){
//     let description;
//     if(element.length > 0){
//         description = 'Got '+ element.length +' elements'
//     }else{
//         description = "Got no Value"
//     }
//     return [element,description]
// }
//
// console.log(countAndPrint(''))
// console.log(countAndPrint('You are a Mad Person'))
//console.log(countAndPrint(10))

// function  extractAndConvert<T extends object, U extends keyof T>(obj:T, key:U){
//     return 'Value' + obj[key]
// }
//
// extractAndConvert({name: 'Shubham'}, 'name')


// class DataStorage<T extends string | number> {
//
//     private data: T[] = [];
//
//     addItem(item: T) {
//         this.data.push(item)
//     }
//
//     removeItem(item:T){
//         if(this.data.indexOf(item) === -1){
//             return;
//         }
//         this.data.splice(this.data.indexOf(item), 1)
//     }
//
//     getItems(){
//         return [...this.data]
//     }
// }
//
// const textStorage = new DataStorage<string>();
// textStorage.addItem('Max');
// textStorage.addItem('Manu');
// textStorage.removeItem('Max');
// console.log(textStorage.getItems());
//
// const  numStorage = new DataStorage<number>();
// numStorage.addItem(10);
// numStorage.addItem(20);
// console.log(numStorage.getItems())

// Generic Utility function
//******** Partial *************//
interface courseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): courseGoal {
    let CourseGoal: Partial<courseGoal> = {};
    CourseGoal.title = title,
    CourseGoal.description = description,
    CourseGoal.completeUntil = date;
    return CourseGoal as courseGoal;
}

///////// ReadOnly //////////////////////
const names : Readonly<string[]> = ['Max', 'Anna']
//names.push('Manu');  //------> when Object is readonly , no dit function will work
//names.pop();











