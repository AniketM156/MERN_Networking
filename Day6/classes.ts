class Employee{
    id:number;
    name:string;
    salary:number;
    // private x  = 10;
    readonly username:string = "root user";
    static dept:string = 'hr';

    constructor(id:number,name:string,salary:number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    displayEmployeeInfo():void{
        console.log(this.id);
        console.log(this.name);
        console.log(this.salary);
    }

    calculatePerDay(): number{
        return this.salary/30;
    }

}

let emp = new Employee(1,'Aniket',68000);
emp.displayEmployeeInfo();
console.log(emp.calculatePerDay());