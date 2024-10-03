const zod = require("zod");


    const createTodo = zod.object({

        title: zod.string(),
        description: zod.string()
    })

    
    const updateTodo = zod.object({

        id: zod.string(),
    })

    // it will export boht the objects
    module.exports={
        createTodo: createTodo,
        updateTodo: updateTodo,
    }

