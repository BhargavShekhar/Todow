import React from 'react'
import { useState } from 'react';
import { useTodo } from '../contexts';
import { FaRegFileAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoIosSave } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { motion } from "framer-motion"


/* local storage is updating and form is submitting so the problem is in New Card cause its not rendering*/


function NewCard({ todo, reference }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)

    // to display message using Use State
    const [todoMsg, setTodoMsg] = useState(todo.todo)  // todo -> prams of NewCard, todo.todo -> todos msg

    // updating TodoContext
    const { updateTodo, deleteTodo } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }


    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileTap={{ scale: 1.05 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 400 }}

        >
            <div className='relative bg-zinc-950/50 text-white h-1/2 w-4/6 px-6 py-8 rounded-[50px] shadow-xl shadow-zinc-950 overflow-hidden ml-7 mt-5'>
                <FaRegFileAlt className='text-yellow-200' />
                {/* <p className='mt-7 text-yellow-100'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam odio dolor beatae officia, sint corporis cum voluptas!
                </p> */}
                <input
                    type="text"
                    className={`mt-7 text-yellow-100 border outline-none w-full bg-transparent rounded-lg text-2xl text-wrap p-2
                    ${isTodoEditable ? "border-black px-2" : "border-transparent"}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                />

                <button
                    className='mt-8 '
                    onClick={() => {
                        if (isTodoEditable) {
                            editTodo();
                        }
                        else {
                            setIsTodoEditable((prev) => !prev);
                        }
                    }}
                >
                    {
                        (isTodoEditable) ? <IoIosSave /> : <CiEdit className='text-2xl text-yellow-400' />
                    }
                </button>

                <button
                    className='relative text-red-600 bottom-[44%] left-[84%]'
                    onClick={() => deleteTodo(todo.id)}
                >
                    <ImCancelCircle />
                </button>

            </div>
        </motion.div>
    )
}

export default NewCard
