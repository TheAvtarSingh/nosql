const express = require("express");

const app = express();

app.get("/",function(req,res){
 res.send("<h1>Hello</h1>");
})


app.get("/contact",(req,res)=>{
    res.send("This is contact page");
})
app.get("/about",(req,res)=>{
    res.send("This is about page");
})

app.listen(3000,function(){
    console.log("Server is started at port 3000");
})