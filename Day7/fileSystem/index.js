const fs = require('fs')



fs.readFile('abc.txt','utf8',(err,data)=>{
    if(err){
        console.log(`something went wrong ${err}`);
        return;
    }
    console.log(data)
})

// fs.writeFile('demo.txt','Loading complete , NodeJS is setup',(err)=>{
//     if(err){
//         console.log(`error is file ${err}`)
//         return;
//     }
//     console.log('data is writtern to the file');
// })

fs.appendFile('demo.txt','  version 1',(err)=>{
    if(err){
        console.log(`error is file ${err}`)
        return;
    }
    console.log('data is writtern to the file');
})