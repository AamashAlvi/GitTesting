const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const cors = require("cors");


const app = express();


// app.use(express.json()) allows your Express app to understand and work with JSON data from the client. 
app.use(express.json());
app.use(cors());


// this is to create a todo
app.post("/todo" , async function(req,res)
{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success)
    {
        res.status(411).json({

            message: "You have sent the wrong inputs"
        })
        return;
    }
    // that means if everything goes right put it in the mongoDB

   await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    res.json({
        message: "Todo created"
    })

})

// this is to fetch all the todos from the database
app.get("/todos" ,async function(req, res)
{
    const todos = await todo.find()

    res.json({
        todos
    })

})

// this is to mark (update) the todo completed 
app.put("/completed" ,async function(req, res)
{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if(!parsePayload.success)
    {
        res.status(411).json({

            message:"You have sent the wrong inputs" 
        })

        return;
    }

    await todo.update({

        _id: req.body.id    
    },
    {
        completed : true
    })

    res.json({
        message : "Todo marked as done"
    })



})

app.listen(3001);
