var student2 = require("../models/model_students")


exports.test= (req,res)=>{
    res.send("This is Test Route!")
}

exports.create= (req,res,next)=>{
    let student = new student2({
        name: req.params.name,
        id: req.params.id,
        dept: req.params.dept
    })

        student.save((err,)=>{
            if(err){ return next(err)}
            res.send("Student Added to the Data!")
         
        })}

exports.delete(()=>{})

exports.put(()=>{})



    
