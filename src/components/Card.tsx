import { motion } from 'framer-motion';
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
    const textVariants = {
        open: { display: "flex", bottom: 60 },
        close: { bottom: 20, display: "none" }
    }

    return (
        <div
            style={{ backgroundImage: `url(${imgURL})` }}
            className='relative rounded-lg overflow-hidden bg-cover bg-no-repeat w-[300px] h-[200px]'
            onMouseEnter={() => setOpenState(true)}
            onMouseLeave={() => setOpenState(false)}
        >
            <motion.div
                className="absolute top-0 w-full bg-gradient-to-r from-[rgba(170,54,124,0.9)] to-[rgba(74,47,189,0.9)]"
                animate={isOpen ? "open" : "close"}
                variants={variants}
                transition={{
                    duration: 0.1,
                    easeInOut: "linear"
                }}
            />
            <motion.div
                className="absolute left-10 w-full text-center flex flex-col justify-end items-start"
                animate={isOpen ? "open" : "close"}
                variants={textVariants}
                transition={{
                    duration: 0.3,
                    easeInOut: "linear"
                }}
            >
                <h4 className="my-1 text-2xl font-bold">{title}</h4>
                <span className="italic tracking-wider">{description}</span>
            </motion.div>
        </div>
    );
}