
var car1 = {
    brand : "Mercides",
    mileage : 123450,
    year : 2020
};

var car2 = {
    brand : "Toyota",
    mileage : 150000,
    year : 2020
};

function car(brand, mileage, year){
    this.brand = brand;  // this refers to teh object instances
    this.mileage = mileage;
    this.year = year;
};

var car3 = new car("Dodge", 130000, 2020);

console.log(car3);



function Employee(Name, ID, SSN, Salary ){
    this.Name = Name;
    this.ID =  ID;
    this.SSN = SSN;
    this.Salary = Salary;
}

var employeeErhan = new Employee("ErhanHoly", 7, "123-123-456", 85000);
var employeeSumeyya = new Employee("Sumeyya", 8, "000-987-123", 100000);

console.log(employeeErhan);
console.log(employeeSumeyya);

console.log(employeeSumeyya["Name"]);
console.log(employeeErhan["Name"]);



