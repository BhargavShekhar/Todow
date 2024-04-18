import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ cardData, reference }) {


    return (
        <>
            <motion.div
                drag
                dragConstraints={reference}
                whileTap={{ scale: 1.05 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 100, bounceDamping: 400 }}
                className="relative bg-zinc-950/50 text-white h-1/2 w-1/6 px-6 py-8 rounded-[50px] shadow-xl shadow-zinc-950 overflow-hidden ml-10 mt-5"
            >
                <FaRegFileAlt className='text-yellow-200' />
                <p className='mt-7 text-yellow-100'>
                    {cardData.description}
                </p>
                <footer className='absolute w-full bottom-0 left-0'>
                    <div className=' flex items-center justify-between  px-7 py-7'>
                        <h1 className='text-yellow-100'>{cardData.filesize}</h1>
                        {cardData.close ? <MdDownloading className='text-yellow-300' /> : <IoIosCloseCircleOutline className='text-red-200' />}
                    </div>
                    {cardData.tag.isOpen && (
                        <div className='bg-green-700 w-full flex justify-center items-center py-4'>
                            Download Now
                        </div>
                    )}
                </footer>
            </motion.div>
        </>
    )
}

export default Card
