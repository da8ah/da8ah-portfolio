import ShiningText from "@/components/ShiningText";
import { LangContext } from "@/context/LangProvider";
import Skills from "@/layouts/Skills";
import { MotionProps, motion } from 'framer-motion';
import { useContext, useEffect, useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

export default function Build(props: { index: number, animation: MotionProps, onLeftPress: () => void, onRightPress: () => void }) {
    const { text } = useContext(LangContext)
    const [start, setStart] = useState(true)

    useEffect(() => { setStart(false) }, [])

    return <div className='flex flex-col'>
        <div className='py-5'>
            <h1
                className='uppercase font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 via-orange-500 to-red-600 drop-shadow-[0_0_50px_10px_black]'
                onClick={() => setStart(true)}
            >
                {start && <ShiningText text={text.page1.title} setStartToFalse={() => setStart(false)} />}
                {!start && text.page1.title}
            </h1>
            <div className='py-5 flex flex-row justify-center items-center'>
                <button onClick={props.onLeftPress}
                ><HiArrowCircleLeft /></button>
                <motion.h2
                    className='capitalize w-[200px] mx-2'
                    {...props.animation}
                >{text.page1.roles[props.index]}</motion.h2>
                <button onClick={props.onRightPress}
                ><HiArrowCircleRight /></button>
            </div>
            <motion.div
                className="px-20 flex flex-col justify-center items-center"
                {...props.animation}
            >
                {text.page1.profiles[props.index]}
            </motion.div>
        </div>
        <Skills index={props.index} animation={props.animation} />
    </div>
}