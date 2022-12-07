const express = require("express");

const app = express();

const router = express.Router();

// app.get()

router.get("/",(req,res)=>{
    res.send("This is home page");
})


app.use("/",router);

app.listen(process.env.port||3000);
console.log("Server Started");