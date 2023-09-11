import SelectMenu from "@/components/SelectMenu";
import ShiningText from "@/components/ShiningText";
import { LangContext } from "@/context/LangProvider";
import Skills from "@/layouts/Skills";
import { MotionProps, motion } from 'framer-motion';
import { useContext, useEffect, useState } from "react";
import { DotFilledIcon, TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";

export default function Build(props: { index: number, animation: MotionProps, onLeftPress: (value?: number) => void, onRightPress: (value?: number) => void }) {
    const { text } = useContext(LangContext)
    const [start, setStart] = useState(true)

    useEffect(() => { setStart(false) }, [])

    return <div className='flex flex-col'>
        <div className='py-2'>
            <h1
                className='cursor-pointer uppercase font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 via-orange-500 to-red-600 drop-shadow-[0_0_50px_10px_black]'
                onClick={() => setStart(true)}
            >
                {start && <ShiningText text={text.page1.title} setStartToFalse={() => setStart(false)} />}
                {!start && text.page1.title}
            </h1>
            <div className='py-5 flex flex-col justify-around items-center'>
                <span className='flex pb-3 italic'><DotFilledIcon color='#AA367C' />Roles</span>
                <div className='flex flex-row justify-center items-center'>
                    <button
                        className='p-1 rounded-[10px_0_0_10px] dark:shadow-[0_0_5px_0_black] hover:text-white hover:bg-gradient-to-b hover:from-[#3a98f0] hover:to-[#4A2FBD]'
                        onClick={() => props.onLeftPress()}
                    ><TriangleLeftIcon /></button>
                    <motion.div
                        className='capitalize w-[250px] py-1 mx-2 rounded-[5px] text-white hover:shadow-lg hover:shadow-purple-500 tracking-wide bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]'
                        {...props.animation}
                    >
                        <SelectMenu selected={props.index} data={text.page1.roles} handlers={{ left: props.onLeftPress, right: props.onRightPress }} />
                        {/* {text.page1.roles[props.index]} */}
                    </motion.div>
                    <button
                        className='p-1 rounded-[0_10px_10px_0] dark:shadow-[0_0_5px_0_black] hover:text-white hover:bg-gradient-to-b hover:from-[#3a98f0] hover:to-[#4A2FBD]'
                        onClick={() => props.onRightPress()}
                    ><TriangleRightIcon /></button>
                </div>
            </div>
            <motion.div
                className="py-3 px-20 flex justify-center items-center"
                {...props.animation}
            >
                <p className="p-2 rounded-[5px] shadow-[0_0_40px_20px_teal] dark:shadow-[0_0_5px_0_black] dark:hover:shadow-[0_0_40px_20px_teal] text-justify">
                    {text.page1.profiles[props.index]}
                </p>
            </motion.div>
        </div>
        <Skills index={props.index} animation={props.animation} />
    </div>
}