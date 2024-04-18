import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        // All fiels(objects) will be added here in the array
        {
            id: 1,
            todo: 'Todo message',
            completed: false
        }
    ],
    addTodo: (todo) => {},   // Todo message will be passed,
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
    updateTodo: (todo, id) => {}
})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider