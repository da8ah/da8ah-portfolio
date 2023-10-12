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
        open: { display: "flex", bottom: 20 },
        close: { bottom: 10, display: "none" }
    }

    return (
        <div
            style={{ backgroundImage: `url(${imgURL})` }}
            className='relative rounded-lg overflow-hidden bg-cover bg-no-repeat w-[300px] h-[200px]'
            onMouseEnter={() => setOpenState(true)}
            onMouseLeave={() => setOpenState(false)}
        >
            <motion.div
                className="absolute top-0 w-full bg-gradient-to-b from-[rgba(220,20,60,0.8)] to-[rgba(139,0,0,0.8)]"
                animate={isOpen ? "open" : "close"}
                variants={variants}
                transition={{
                    duration: 0.1,
                    easeInOut: "linear"
                }}
            />
            <motion.div
                className="absolute w-full text-center flex flex-col justify-end items-start"
                animate={isOpen ? "open" : "close"}
                variants={textVariants}
                transition={{
                    duration: 0.3,
                    easeInOut: "linear"
                }}
            >
                <div className='w-full bg-[crimson]'>
                    <h4 className="my-1 text-xl font-bold">{title}</h4>
                </div>
                <div className='w-full rounded-[2px] p-2 bg-opacity-70 bg-black'>
                    <p className="tracking-wider text-justify">{description}</p>
                </div>
            </motion.div>
        </div>
    );
}