function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string){
    return function<T extends {new(...args: any[]):{name: string}}> (originalConstructor: T){
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log("Rendering Template....");
                const element = document.getElementById(hookId)
                if(element){
                    element.innerHTML = template;
                    element.querySelector('h1')!.textContent = this.name;
                }

            }
        }
    }
}


// @Logger('LOGGING-PERSON')
@Logger('Hi My Friend...')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Shubham';

    constructor() {
        console.log("Creating Person Object ........")
    }
}

const pers = new Person()
console.log(pers)

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator')
    console.log(target, propertyName)
}

function  Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function  Log3(target: any, name:string | Symbol, descriptor: PropertyDescriptor){
    console.log('Method decorator !!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function  Log4(target: any, name:string | Symbol, position: number){
    console.log('Parameter decorator !!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set Price(val: number){
        if(val > 0){
            this._price = val;
        }else {
            throw new Error('Invalid Price - Should be Positive ')
        }
    }

    constructor(t:string, p:number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1+ tax)
    }


}

