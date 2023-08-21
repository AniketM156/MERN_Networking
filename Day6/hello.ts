let age : number = 45;
console.log("age is " + age)

let name2 : string = "sachin"
console.log("name " + name2)

let available : boolean = true;
console.log("availibility is : " + available)

// tsc hello.ts -- watch

let fruits:string[] = ['apple','banana',34]
console.log(`lenght is ${fruits.length}`)
console.log(fruits)

let arr:(string|number)[] = ['sachin','ravi',45,35,'anil']
console.log(arr.length)
console.log(arr)

let msg1:(string|boolean|number);

let msg2:string;

msg1 = 'hello'
msg1 = true
msg1 = 45

msg2 = 'aniket'
// msg2 = 22

// let marks:number[];
// let item : [numebr,string] = []

// item.push(1,'laptop')
// item.push(2,'cloth')

var months = 'january'

enum Months{
    january,
    febuary,
    march,
    aprill,
    may,
    june,
    july,
    august
}

var months2 = Months.january
console.log('month is : ' + months2)