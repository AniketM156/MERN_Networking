function display(x:number){
    console.log("value of x " + x);
    console.log('type : '+typeof(x));
}

function genericFunction<T>(x:T){
    console.log("value of x " + x);
    console.log('type : '+typeof(x));
}

display(2);
console.log('------------------')
genericFunction<number>(34)

console.log("----string------")
genericFunction<string>('hello')

