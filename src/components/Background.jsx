import React from 'react'

function Background() {
    return (
        <div className='fixed w-full h-screen bg-zinc-900 z-[2]'>
            <div className="w-full p-10 flex justify-center items-center font-semibold text-zinc-400 text-xl">Todos.</div>
            <div className="absolute text-[200px] text-zinc-950 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center font-serif py-20">Work.</div>
        </div>
    )
}

export default Background
