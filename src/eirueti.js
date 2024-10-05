const path = require("path");
const pqr = require("express");
const porj =  2024;
const app = pqr();

const staticPath = path.join(__dirname,"../public");
app.use(pqr.static(staticPath));
app.get("/",(req,res)=>{
    res.send("hi this is a parrot");
})

 app.get("/news",(req,res)=>{
    res.send(
        [
        {
        name:"Keshav",
        age:26,
    }
]
)
 })


app.listen(porj,()=>{
    console.log(`Listeninig on ${porj}`);    
})