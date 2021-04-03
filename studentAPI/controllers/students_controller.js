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

        student.save((err)=>{
            if(err){ return next(err)}
            res.send("Student Added to the Data!")
         
        })}

exports.delete= (req,res)=>{
    student2.findByIdAndDelete(req.params.id, (err)=>{
        if (err) return next(err);
        res.send("Object Deleted!!!!!")
})}

exports.details = function (req, res) {
    student2.findById(req.params.id, function (err,student) {
            if (err) return next(err);
            res.send(student);
        })
    };

exports.update=(req,res)=>{
    student2.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,student)=>{
        if(err) return next (err);
        res.send("Student Updated!!!") 
    })}   
