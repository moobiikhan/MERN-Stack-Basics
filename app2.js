var express = require("express")
var app = express();
var R1 = require("./routemod") //FILE ROUTEMOD is linked with this
var R2 = require("./routebook") //FILE ROUTEBOOK is linked with this

// this is first web avi
// this is a curd operation for the given route
//http://localhost:3000/books/
// this is CRUD create, read, update and delete.

app.use("/books",R2)

app.use("/students",R1)

var Server= app.listen(3000, ()=> {
    console.log("This route is running at 3000")
    })



// we created a server and a route in thhis and them we created the
// methods of route the curd operations, but if we have so many routes and
// this code will be messy so we'll use another file for the methords(CRUD) 
// over to routemod.js
