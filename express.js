// calling express module in ("express")
const express = require ("express")

// app is a variable of express 
var app = express()

// this is the main page of the port
app.get("/", (req,res)=> {
    res.send("Hello Express")
})

// This is creating another page(route) for books
// get is a method, other methods are (get, post, put, delete)
// req is a path, (*means which route)
// res is a handler, which is executed when the route is matched CB FUNCTION
app.get("/books",(req,res)=>{
    res.send("This s books portion")
})

// post menthod
app.post("/", (req,res)=>{
    res.send("im sending data to the server")
})

//routeparameter: means u send variable in a route whihc has some value
// we'll use req in for getting the info
// the word after a colon is a variable
///http://localhost:3000/students/:1812315/books/:55
app.get("/students/:studentid/books/:bookid",(req,res)=>{
    res.send(req.params)
})


//we cam use multiple functions on a singkle route
app.get("/example1",(req,res, next)=>{
    console.log("will go to the next funfction using next")
    next()
}, (req,res)=>{
    res.send("the next function")
} 
)

// this is creating a server (port) for ur site, 3000 is port number
var server = app.listen(3000, (req,res)=>{
    // this will run in the console after the right code
    console.log("Server running at port 8080")

})
