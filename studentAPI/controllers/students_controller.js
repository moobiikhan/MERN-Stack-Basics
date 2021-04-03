var student2 = require("../models/model_students")


exports.test= (req,res)=>{
    res.send("This is Test Route!")
}

exports.create= (req,res,next)=>{
    let student = new student2({
        name: req.body.name,
        id: req.body.id,
        dept: req.body.dept
    })

        student.save((err)=>{
            if(err){ return next(err)}
            res.send("Student Added to the Data!")
         
        })}

exports.delete= (req,res)=>{
    student.findByIdAndRemove(req.params.id, (err)=>{
        if (err) return next(err);
        res.send("Object Deleted!!!!!")
})}

exports.put= (req,res)=>{
    student.findById(req.params.id, (err,student)=>{
        if(err) return next(err);
        res.send(student)
    })}


exports.update=(req,res)=>{
    student.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,student)=>{
        if(err) return next (err);
        res.send("Student Updated!!!") 
    })}   
