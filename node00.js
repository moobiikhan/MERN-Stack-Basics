const http = require ("http");
var dt = require('./myfirstmodule')

/*
this is 
comment 
line */

http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.write("Hello "+dt.myname()+"\nToday is " + dt.givedate())
    res.end("\n<h1>Killing the response object here!</h1>")

}).listen(8080, ()=>{
    console.log("The server is running in port 8080")
})
