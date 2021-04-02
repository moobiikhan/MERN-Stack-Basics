const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let studentschema = new Schema({
    name : { type: String, require:true, max: 100},
    id : { type: Number, require: true, max: 100},
    dept: { type: String, require:true, max: 100 }
});

module.exports = mongoose.model("Students", studentschema)

