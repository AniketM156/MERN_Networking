var age = 45;
console.log("age is " + age);
var name2 = "sachin";
console.log("name " + name2);
var available = true;
console.log("availibility is : " + available);
// tsc hello.ts -- watch
var fruits = ['apple', 'banana', 34];
console.log("lenght is ".concat(fruits.length));
console.log(fruits);
var arr = ['sachin', 'ravi', 45, 35, 'anil'];
console.log(arr.length);
console.log(arr);
var msg1;
var msg2;
msg1 = 'hello';
msg1 = true;
msg1 = 45;
msg2 = 'aniket';
// msg2 = 22
// let marks:number[];
// let item : [numebr,string] = []
// item.push(1,'laptop')
// item.push(2,'cloth')
var months = 'january';
var Months;
(function (Months) {
    Months[Months["january"] = 0] = "january";
    Months[Months["febuary"] = 1] = "febuary";
    Months[Months["march"] = 2] = "march";
    Months[Months["aprill"] = 3] = "aprill";
    Months[Months["may"] = 4] = "may";
    Months[Months["june"] = 5] = "june";
    Months[Months["july"] = 6] = "july";
    Months[Months["august"] = 7] = "august";
})(Months || (Months = {}));
var months2 = Months.january;
console.log('month is : ' + months2);
