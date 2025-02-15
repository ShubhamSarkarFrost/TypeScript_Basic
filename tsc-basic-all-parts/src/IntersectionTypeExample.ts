type Person = {
    name : String,
    age : String
};

type Employee = {
    employeeId :number,
    department : String
}

type EmployeeDetails = Person & Employee;

const rita : EmployeeDetails  = {
    name : "Rita Fernandes",
    age : "30",
    employeeId: 123456,
    department: "Engineering"
};

console.log(rita);

