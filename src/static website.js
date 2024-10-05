const path = require("path");
const express = require('express');

const app = express();
const port = 8000;

// console.log(__dirname);

const staticPath = path.join(__dirname,'../public');

app.use(express.static(staticPath));

app.get("/", (req,res)=>{
    res.send("hello from the expressjs");
});

app.get("/about",(req,res)=>{
    res.send("Hello about");
})
app.listen(port,()=>{
    console.log(`Listing the port at ${port}`);
})
