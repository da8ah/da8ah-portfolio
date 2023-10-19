import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Card(props: {
    index: number
    title: string
    description: string
    imgURL: string
}) {
    const { index, title, description, imgURL } = props
    const [isOpen, setOpenState] = useState(false)

    const variants = {
        open: { display: "flex", height: "200px" },
        close: { height: "0px" }
    }
    const textVariants = {
        open: { display: "flex", bottom: 0 },
        close: { bottom: -10, display: "none" }
    }

    return (
        <div
            style={{ backgroundImage: `url(${imgURL})` }}
            className='relative rounded-[5px] overflow-hidden bg-cover bg-no-repeat w-[300px] h-[200px] text-white'
            onMouseEnter={() => setOpenState(true)}
            onMouseLeave={() => setOpenState(false)}
        >
            <motion.div
                className="absolute top-0 w-full bg-gradient-to-b from-[rgba(0,191,255,0.3)] to-[rgba(65,105,225,0.3)] dark:from-[rgba(220,20,60,0.3)] dark:to-[rgba(139,0,0,0.3)]"
                animate={isOpen ? "open" : "close"}
                variants={variants}
                transition={{
                    duration: 0.1,
                    easeInOut: "linear"
                }}
            />
            <motion.div
                className="relative w-full h-full text-center flex flex-col items-start"
                animate={isOpen ? "open" : "close"}
                variants={textVariants}
                transition={{
                    duration: 0.3,
                    easeInOut: "linear"
                }}
            >
                <div className='w-full bg-gradient-to-bl from-[deepskyblue] to-[royalblue] dark:from-[crimson] dark:to-[darkred]'>
                    <h4 className="my-1 text-xl font-bold font-mono">{title}</h4>
                </div>
                <div className='flex-1 flex w-full p-2 bg-opacity-20 hover:bg-opacity-90 bg-black'>
                    <p className="tracking-wider text-justify font-roboto">
                        {description}
                        {index === 0 &&
                            (<>
                                <span> Web: </span>
                                <a
                                    className='text-[royalblue] underline'
                                    href='https://beetech.ec/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >beetech.ec</a>
                            </>)
                        }
                    </p>
                </div>
            </motion.div>
        </div>
    );
}