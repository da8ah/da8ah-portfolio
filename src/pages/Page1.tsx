import { LangContext } from "@/context/LangProvider";
import { ThemeContext } from "@/context/ThemeProvider";
import Build from "@/layouts/Build";
import Hero from "@/layouts/Hero";
import { motion } from 'framer-motion';
import { useContext, useState } from "react";

export default function Page1(props: { className: string }) {
    const { text } = useContext(LangContext)
    const { themeMode } = useContext(ThemeContext)
    const [direction, setDirection] = useState<'left' | 'right'>()
    const [index, setIndex] = useState(0)

    const onLeftPress = (value?: number) => {
        setDirection('left')
        if (value === undefined) setIndex(rol => rol === 0 ? text.page1.roles[1].length - 1 : rol - 1)
        else setIndex(value)
    }
    const onRightPress = (value?: number) => {
        setDirection('right')
        if (value === undefined) setIndex(rol => rol === text.page1.roles[1].length - 1 ? 0 : rol + 1)
        else setIndex(value)
    }

    const animations = {
        left: {
            translateX: [-10, 0]
        },
        right: {
            translateX: [10, 0]
        }
    }
    const animation = {
        key: index,
        initial: { translateX: 0 },
        animate: direction && animations[direction]
    }

    return <section className={props.className}>
        <div className='relative overflow-hidden w-full lg:h-screen md:rounded-[20px] flex flex-row justify-center items-center'>
            {themeMode === 'dark' && <motion.span
                className='hidden lg:block absolute z-0 w-[200%] h-[50%] content-none bg-gradient-to-r from-[#ff284c] to-[#ac0e0e]'
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    easeInOut: "linear"
                }}
            />}
            <div className='relative z-[1] w-screen lg:w-[99.5%] lg:h-[99%] lg:rounded-[20px] flex flex-col-reverse lg:flex-row justify-center items-center bg-white dark:bg-[#242424]'>
                <div className='z-[1] px-1 lg:px-0 w-full lg:w-[60%] flex flex-col justify-center items-center'>
                    <Build index={index} animation={animation} onLeftPress={onLeftPress} onRightPress={onRightPress} />
                </div>
                <div className='relative box-border w-full lg:w-[40%] lg:h-full py-2 flex flex-col justify-center items-center'>
                    <Hero index={index} animation={animation} />
                </div>
            </div>
        </div>
    </section>
}