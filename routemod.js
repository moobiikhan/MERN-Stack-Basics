//for minimizing the curd operations we are doing 
//thesenoperation in a seperate file (this file)
//so our code stay clean and undertandable
//well export this into app2 file we cretaed before

var express = require("express")
var router = express.Router();

router.get('/',(req,res)=>{
    res.send("Welcome To Homepage")
})

router.get('/about',(req,res)=>{
    res.send("This is About Page...")
})

module.exports = router
