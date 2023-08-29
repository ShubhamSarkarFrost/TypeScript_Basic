// Code goes here!

class Department {

    //private id: string;
    //private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string ,  public name: string) {
        //this.name = n;
    }

    describe(this: Department){
        console.log('Department:' + this.name);
        console.log('ID' + this.id)
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("D1","Accounting");
accounting.addEmployee('MAX');
accounting.addEmployee('Meena')

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.printEmployeeInformation();
//
// const accountingCopy = {name: 'DUMMY', describe: accounting.describe}
//
// accountingCopy.describe();







