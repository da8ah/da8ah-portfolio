import SelectMenu from "@/components/SelectMenu";
import ShiningText from "@/components/ShiningText";
import { LangContext } from "@/context/LangProvider";
import Skills from "@/layouts/Skills";
import { MotionProps, motion } from 'framer-motion';
import { useContext, useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function Build(props: { index: number, animation: MotionProps, onLeftPress: (value?: number) => void, onRightPress: (value?: number) => void }) {
    const { text } = useContext(LangContext)
    const [start, setStart] = useState(true)

    useEffect(() => { setStart(false) }, [])

    return <div className='flex flex-col'>
        <div className='py-5'>
            <h1
                className='cursor-pointer uppercase font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 via-orange-500 to-red-600 drop-shadow-[0_0_50px_10px_black]'
                onClick={() => setStart(true)}
            >
                {start && <ShiningText text={text.page1.title} setStartToFalse={() => setStart(false)} />}
                {!start && text.page1.title}
            </h1>
            <div className='py-5 flex flex-col justify-around items-center'>
                <span className='italic'>Roles</span>
                <div className='flex flex-row justify-center items-center'>
                    <button
                        className='p-1 rounded-[10px_0_0_10px] bg-gradient-to-b from-[#3a98f0] to-[#4A2FBD]'
                        onClick={() => props.onLeftPress()}
                    ><ArrowLeftIcon /></button>
                    <motion.div
                        className='capitalize w-[200px] mx-2 shadow-lg shadow-purple-500 tracking-wide ring-1 ring-white bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]'
                        {...props.animation}
                    >
                        <SelectMenu selected={props.index} data={text.page1.roles} handlers={{ left: props.onLeftPress, right: props.onRightPress }} />
                        {/* {text.page1.roles[props.index]} */}
                    </motion.div>
                    <button
                        className='p-1 rounded-[0_10px_10px_0] bg-gradient-to-b from-[#3a98f0] to-[#4A2FBD]'
                        onClick={() => props.onRightPress()}
                    ><ArrowRightIcon /></button>
                </div>
            </div>
            <motion.div
                className="py-5 px-20 flex flex-col justify-center items-center"
                {...props.animation}
            >
                {text.page1.profiles[props.index]}
            </motion.div>
        </div>
        <Skills index={props.index} animation={props.animation} />
    </div>
}