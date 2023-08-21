const express = require('express');
const app = express();
const port = 4000;

let employee = [
    {id:1,name:'aniket',dept:'hr',salary:60000},
    {id:1,name:'aniket',dept:'hr',salary:60000},
    {id:1,name:'aniket',dept:'hr',salary:60000},
    {id:1,name:'aniket',dept:'hr',salary:60000}
];

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/employee',(req,res)=>{
    res.send(employee);
})

app.post('/employees',(req,res)=>{
    const employee = req.body;
    employee.push(employee);
    res.status(201);
    res.send(`employee added`)
})

app.get('/employee/:id',(req,res)=>{
    const employeeid = req.params.id;
    const employee1 = employee.find((item)=>item.id == employeeid);

    if(employee1){
        res.json(employee);
    }
    else{
        res.status(404).json({message:`id ${employeeid} is not found`})
    }
});

app.put('/',(req,res)=>{
    res.send('hello world this is update')
})

app.listen('/',(req,res)=>{
    res.send(`hello world this is running in this ${port}`)
})

app.delete('/',(req,res)=>{
    res.send('hello world this is delete')
})

app.listen(port,(req,res)=>
{
    console.log(`server is running on port ${port}`)
})

// console.log(`server is running on port ${port}`)