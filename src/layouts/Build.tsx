import SelectMenu from "@/components/SelectMenu";
import { LangContext } from "@/context/LangProvider";
import { ThemeContext } from "@/context/ThemeProvider";
import Skills from "@/layouts/Skills";
import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import { MotionProps, motion } from 'framer-motion';
import { useContext } from "react";

export default function Build(props: { index: number, animation: MotionProps, onLeftPress: (value?: number) => void, onRightPress: (value?: number) => void }) {
    const { text } = useContext(LangContext)
    const { themeMode } = useContext(ThemeContext)

    return <div className='w-full flex flex-col'>
        <div className='py-2'>
            <h1 className='uppercase font-bold dark:font-keania text-4xl dark:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-red-600 via-orange-500 to-yellow-500 drop-shadow-[0_0_50px_10px_black]'>
                Danilo Ochoa Hidalgo
                <br />
                <span className={`text-xl font-mono ${themeMode === 'dark' ? 'capitalize' : 'lowercase'}`}>({themeMode === 'dark' ? 'Tiber' : 'da8ah'})</span>
            </h1>
            <div className='py-5 flex flex-col justify-around items-center'>
                <div className='w-full flex flex-row justify-center items-center'>
                    <button
                        className='p-1 rounded-[10px_0_0_10px] dark:shadow-[0_0_5px_0_black] hover:text-white hover:bg-gradient-to-b hover:from-[#3a98f0] hover:to-[#4A2FBD]'
                        onClick={() => props.onLeftPress()}
                    ><TriangleLeftIcon /></button>
                    <motion.div
                        className='w-[50%] py-1 mx-2 rounded-[5px] text-white hover:shadow-lg hover:shadow-purple-500 tracking-wide bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]'
                        {...props.animation}
                    >
                        <SelectMenu selected={props.index} icons={text.page1.roles[0]} data={text.page1.roles[1]} handlers={{ left: props.onLeftPress, right: props.onRightPress }} />
                    </motion.div>
                    <button
                        className='p-1 rounded-[0_10px_10px_0] dark:shadow-[0_0_5px_0_black] hover:text-white hover:bg-gradient-to-b hover:from-[#3a98f0] hover:to-[#4A2FBD]'
                        onClick={() => props.onRightPress()}
                    ><TriangleRightIcon /></button>
                </div>
            </div>
        </div>
        <Skills index={props.index} animation={props.animation} />
    </div>
}