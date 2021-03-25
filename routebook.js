const { text } = require("express")
var express = require("express")
var router = express.Router()

router.get("/",(req,res)=>{
    res.send("Hello to the Main book page!")
})

router.get("/book1",(req,res)=>{
    res.send("Retreive All Books")
})

router.get("/book2",(req,res)=>{
    res.send("Book Second page")
})


router.post("/",(req,res)=>{
    res.send("Add a book")
})

router.put("/",(req,res)=>{
    res.send("update a book")
})

router.delete("/",(req,res)=>{
    res.send("Delete a book!")
})


module.exports = router
