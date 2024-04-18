import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {

  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault()

    if (!todo) return

    // console.log(todo);

    addTodo({
      todo: todo,   // (Optional) we can only write todo since field name and value name is same
      completed: false
    })

    setTodo('');
  }

  return (
    <div
      className='text-white absolute bottom-1/4 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-20 flex justify-center items-center'
      onSubmit={add}
    >
      <form className='h-full flex' >
        <input
          type="text"
          placeholder='Enter you task !!'
          value={todo} // from useState -> wiring
          onChange={(e) => setTodo(e.target.value)}
          className='w-96 h-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 text-2xl'
        />
        <button
          type='submit'
          className="h-full rounded-r-lg px-4 py-2 bg-green-600 hover:bg-opacity-90 text-white"
        >
          Add
        </button>
      </form>
    </div>
  )

}

export default TodoForm