import React, { useRef, useState, useEffect } from 'react'
import Card from './Card'
import TodoForm from './TodoForm';
import { TodoProvider } from '../contexts';
import NewCard from './NewCard';

function Foreground() {

  const ref = useRef(null);

  /* Data Set */
  const data = [
    {
      description: "Lets Go it is Rendering Yayyy!!😁👍",
      filesize: "0.7mb",
      close: true,
      tag: {
        isOpen: true,
        tagTittle: "Download Now",
        tagColor: "green"
      },
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi soluta inventore ex fugit sint?😁👍",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: false,
        tagTittle: "Download Now",
        tagColor: "green"
      },
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi soluta inventore ex fugit sint?😁👍",
      filesize: "0.4mb",
      close: false,
      tag: {
        isOpen: true,
        tagTittle: "Download Now",
        tagColor: "green"
      },
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi soluta inventore ex fugit sint?😁👍",
      filesize: "0.4mb",
      close: true,
      tag: {
        isOpen: false,
        tagTittle: "Download Now",
        tagColor: "green"
      },
    },
  ]

  // console.log(data)  // TODO remove this  

  // Storing the values of todos coming from context
  const [todos, setTodos] = useState([])

  /* --- Defining the functionality of TodoContext --- */

  // will get from the form
  const addTodo = (todo) => {
    // destructure and pass the value so that previous value of the context does not get deleted
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])  // previous todo + {new todo id , ...new todo object} (Destructured)
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => (
      prev.map((prevTodo) => (
        prevTodo.id === id ? todo : prevTodo    // update if the given id matches object id in context else return the i'th todo
      ))
    ))
  }

  const toggleTodo = (id) => {
    setTodos((prev) => (
      prev.map((prevTodo) => (
        prevTodo.id === id ? { ...prev, completed: !prev.completed } : prevTodo
      ))
    ))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => (
      prev.filter((todo) => (
        todo.id !== id      // creates a new objects which have all the other id except the given one
      ))
    ))
  }

  /* Loading the Todos using Local Storage -(keeps key-value pair) */

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) // pasing the key "todos" to retrive data
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) // passing the key value(useState) pair to set up local storage data
  }, [todos])

  return (

    <TodoProvider value={{ addTodo, updateTodo, toggleTodo, deleteTodo }}>
      <div ref={ref} className="fixed w-full h-full z-[3] flex">
        {/* <Card /> */}
        {/* {data.map((item, index) => (
          <Card cardData={item} key={index} reference={ref} />
        ))} */}
        {/* Loop through Context and render the Card */}
        {todos.map((todo) => (
          <div key={todo.id}>
            <NewCard todo={todo} reference={ref} />
          </div>
        ))}

        {/* Input field will be inserted here */}
        <TodoForm />
      </div>
    </TodoProvider>
  )
}

export default Foreground
