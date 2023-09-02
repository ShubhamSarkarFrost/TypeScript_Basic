// Code goes here!

abstract class Department {
     static fiscalYear = 2020;
    //private id: string;
    //private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string ,  public name: string) {
        //this.name = n;
    }
    
    // Static Class
    static createEmployee(name: string){
        return{name: name};
    }

    abstract describe(this: Department): void;
    //{
        //console.log('Department:' + this.name);
        //console.log('ID' + this.id)
    //}

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
    constructor(id:string, public admins : string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT DEPARTMENT ID :' + this.id);
    }
}

class AccountingDepartment extends Department{
    private lastReport: string
    private static instance : AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error('No Report Found');

    }

    set mostRecentReport(value: string){
       if(!value){
          console.log("Please Pass in a valid Value!!")
          return;  
       } 
       this.addReport(value);
    }
    
    // Singleton Class Inheritence  Pattern 
    private constructor(id:string, public report: string[]) {
        super(id,'SALES');
        //this.report = report;
        this.lastReport = report[0];
    }

    static getInstance() {
        if(this.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log(`Accounting Department ID : ${this.id} `)
    }

    addReport(text: string){
        this.report.push(text)
        this.lastReport = text
    }
    displayReport(){
        console.log(this.report)
    }
    addEmployee(employee: string) {
        if(employee === 'Max'){
            return;
        }
        this.employees.push(employee)
    }
}



const it = new ITDepartment('D1', ["MAX"]);

// Math - Globally accessible class 
it.addEmployee('MAX');
it.addEmployee('Meena')

// accounting.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const employee1 = Department.createEmployee("SHUBHAM");
console.log(employee1, Department.fiscalYear);


// const sales = new AccountingDepartment('D2', ['20000'])
const Accounting = AccountingDepartment.getInstance();
console.log(Accounting);
sales.mostRecentReport  = "Year End Report!!"
sales.addReport("SOMETHING WENT WRONG.....")
console.log(sales.mostRecentReport);
sales.addEmployee('DIVYA')
sales.addEmployee('MAX')
sales.addEmployee('Meena')
// sales.addReport('2300023')
// sales.displayReport()
sales.describe();

console.log(sales)
//
// const accountingCopy = {name: 'DUMMY', describe: accounting.describe}
//
// accountingCopy.describe();







