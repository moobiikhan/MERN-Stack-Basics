const express = require("express")
var app1 = express();
var student1 = require("./routers/student_router")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app1.listen(8080, ()=>{
    console.log("This Server is running at port: 8080")
})

mongoose.connect("mongodb://localhost/StudentsDB", { useNewUrlParser: true, useUnifiedTopology: true})

.then(()=>{
    console.log("You're Connected to the Database!")
})

.catch((err)=>{
    console.log("Error connecting to a Database!!")
    process.exit();
})

app1.use(bodyParser.json())
app1.use(bodyParser.urlencoded({extended:true}))


app1.use("/students",student1,(req,res)=>{
    res.send("This is Students Page!")
})

