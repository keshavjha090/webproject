const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const hbs = require("hbs");
const requests = require("requests");


// const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
// app.use(express.static(staticPath));
app.set('views',templatePath);

hbs.registerPartials(partialsPath);
// template engine Router
app.get("",(req,res)=>{
    res.render('index',{
        PropsNewData:"This is a new Data"
    });
})

app.get("/about",(req,res)=>{
    requests(
        `https://api.openweathermap.org/data/2.5/whether?q=pune&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`)
        .on("data",(chunk)=>{
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);  
        res.write(arrData[0].name);  
    })
    .on("end",(err)=>{
        if(err) return console.log("There is error",err);
        res.end();
    });
});

app.get('/about/*',(req,res)=>{
    res.render("404",{
        errorcomment:"Sorry fdbhePage does not found"
    });
})
app.get('*',(req,res)=>{
    res.render("404",{
        errorcomment:"Sorry Page does not found"
    });
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})
