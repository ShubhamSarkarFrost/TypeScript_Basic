// Code goes here!

class Department {

    //private id: string;
    //private name: string;
    protected employees: string[] = [];

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

class ITDepartment extends Department{
    constructor(id:string, public admins : string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department{
    private lastReport: string

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error('No Report Found');

    }

    constructor(id:string, public report: string[]) {
        super(id,'SALES');
        //this.report = report;
        this.lastReport = report[0];
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
it.addEmployee('MAX');
it.addEmployee('Meena')

// accounting.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const sales = new AccountingDepartment('D2', ['20000'])

console.log(sales.mostRecentReport);
sales.addReport("SOMETHING WENT WRONG.....")
sales.addEmployee('DIVYA')
sales.addEmployee('MAX')
sales.addEmployee('Meena')
sales.addReport('2300023')
sales.displayReport()

console.log(sales)
//
// const accountingCopy = {name: 'DUMMY', describe: accounting.describe}
//
// accountingCopy.describe();







