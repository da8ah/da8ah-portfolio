import { LangContext } from "@/context/LangProvider";
import Skills from "@/layouts/Skills";
import { motion } from 'framer-motion';
import { useContext, useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

export default function Build() {
    const { text } = useContext(LangContext)
    const [direction, setDirection] = useState<'right' | 'left'>()
    const [index, setIndex] = useState(0)

    const variants = {
        right: {
            translateX: [10, 0]
        },
        left: {
            translateX: [-10, 0]
        }
    }

    return <div className='flex flex-col'>
        <div className='py-5'>
            <h1 className='uppercase'>{text.page1.h1}</h1>
            <div className='py-5 flex flex-row justify-center items-center'>
                <button onClick={() => {
                    setDirection('left')
                    setIndex(rol => rol === 0 ? 2 : rol - 1)
                }}
                ><HiArrowCircleLeft /></button>
                <motion.h2
                    key={index}
                    className='capitalize w-[200px] mx-2'
                    variants={variants}
                    initial={{ translateX: 0 }}
                    animate={direction && variants[direction]}
                >{text.page1.roles[index]}</motion.h2>
                <button onClick={() => {
                    setDirection('right')
                    setIndex(rol => rol === 2 ? 0 : rol + 1)
                }}
                ><HiArrowCircleRight /></button>
            </div>
            <motion.div
                key={index}
                className="px-20 flex flex-col justify-center items-center"
                variants={variants}
                initial={{ translateX: 0 }}
                animate={direction && variants[direction]}
            >
                {text.page1.profiles[index]}
            </motion.div>
        </div>
        <Skills />
    </div>
}