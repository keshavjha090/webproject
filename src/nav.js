const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.write("<h1>welcome to HOme page<h1>");
    res.write("<h1>welco page<h1>");
    res.send();
});

app.get("/about",(req,res)=>{
    res.send("Hello About");
})

app.get("/contact",(req,res)=>{
    res.send("Welcome Contact");
})

app.get("/temp",(req,res)=>{
    res.send([
        {
            id:1,
            name:"Keshav",
        }, 
        {
            id:1,
            name:"Keshav",
            new:undefined,
        },
        {
            id:null,
            name:"Keshav",
        }, {
            id:1,
            name:"Keshav",
        }, {
            id:1,
            name:"Keshav",
        }, {
            id:1,
            name:"Keshav",
        }, {
            id:1,
            name:"Keshav",
        },
    ]);
})

app.listen(port,()=>{
    console.log(`Listening to the port number ${port}`);
});
