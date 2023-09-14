import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Card(props: {
    title: string
    description: string
    imgURL: string
}) {
    const { title, description, imgURL } = props
    const [isOpen, setOpenState] = useState(false)

    const variants = {
        open: { display: "flex", height: "200px" },
        close: { height: "0px" }
    }

    return (
        <div
            style={{ backgroundImage: `url(${imgURL})` }}
            className='relative rounded-3xl bg-cover bg-no-repeat w-[300px] h-[200px]'
            onMouseEnter={() => setOpenState(true)}
            onMouseLeave={() => setOpenState(false)}
        >
            <AnimatePresence>
                <motion.div
                    className="absolute rounded-3xl top-0 w-full text-center flex flex-col justify-end items-start bg-gradient-to-r from-[rgba(170,54,124,0.9)] to-[rgba(74,47,189,0.9)]"
                    animate={isOpen ? "open" : "close"}
                    variants={variants}
                    exit={{ display: "none" }}
                    transition={{
                        duration: 0.1,
                        "easeInOut": "linear"
                    }}
                >
                    <h4 className="my-1 text-2xl font-bold">{title}</h4>
                    <span className="italic tracking-wider">{description}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}