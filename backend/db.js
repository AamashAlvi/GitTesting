const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aamash_alvi:todo1234@cluster0.vdlzh.mongodb.net/todos");

const todoSchema = mongoose.Schema({

    title : String,
    description : String,
    completed : Boolean,
})

const todo = mongoose.model('todo' , todoSchema);

module.exports = {
    todo:todo,
}