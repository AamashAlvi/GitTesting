
// {props} are passed though array destructing 
// the todos function will pass all the todos through the props 
export function Todos ({todos}){

    return <div>
        {/* the map function will iterate over all the todos and will map it over the <div> given below */}
        {todos.map(function(todo)
        {
            return <div>

                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                {/* this says if a todo is true then mark as completed or if the todo is false "Mark as Done" */}
                <button>{todo.completed == true ? "Completed" : "Mark As Done"}</button>

            </div>
        })}

    </div>

}