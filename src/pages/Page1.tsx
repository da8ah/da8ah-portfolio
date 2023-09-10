import { LangContext } from "@/context/LangProvider";
import { ThemeContext } from "@/context/ThemeProvider";
import Abilities from "@/layouts/Abilities";
import Build from "@/layouts/Build";
import Toolkit from "@/layouts/Toolkit";
import { motion } from 'framer-motion';
import { useContext, useState } from "react";
import bgImg from "/page1/library.jpg";
import bgVideo from "/page1/magician.mp4";
import Tooltip from "@/components/Tooltip";

export default function Page1(props: { className: string }) {
    const { text } = useContext(LangContext)
    const { themeMode } = useContext(ThemeContext)
    const [direction, setDirection] = useState<'left' | 'right'>()
    const [index, setIndex] = useState(0)

    const onLeftPress = (value?: number) => {
        setDirection('left')
        if (value === undefined) setIndex(rol => rol === 0 ? text.page1.roles.length - 1 : rol - 1)
        else setIndex(value)
    }
    const onRightPress = (value?: number) => {
        setDirection('right')
        if (value === undefined) setIndex(rol => rol === text.page1.roles.length - 1 ? 0 : rol + 1)
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
        <div className='relative overflow-hidden w-full h-screen rounded-[20px] flex flex-row justify-center items-center dark:shadow-[0_0_20px_10px_#ff617c]'>
            {themeMode === 'dark' && <motion.span
                className={`absolute z-0 w-[110%] h-[110%] content-none bg-gradient-to-r from-[#ff284c] to-[#ac0e0e]`}
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity
                }}
            />}
            <div className='relative z-[1] w-[99.5%] h-[99%] rounded-[20px] flex flex-row justify-center items-center bg-white dark:bg-black dark:shadow-[inset_0_0_20px_10px_#ac0e0e]'>
                <div className='z-[1] w-[60%] flex flex-col justify-center items-center'>
                    <Build index={index} animation={animation} onLeftPress={onLeftPress} onRightPress={onRightPress} />
                </div>
                <div className='relative box-border w-[40%] h-full py-2 flex flex-col justify-center items-center'>
                    {themeMode === 'dark' ?
                        <video className='z-0 absolute object-contain w-[90%] h-[90%]' muted loop autoPlay>
                            <source src={bgVideo} type="video/mp4" />
                        </video>
                        :
                        <img className='z-0 absolute object-contain w-full h-[80%]' src={bgImg} alt='library' />
                    }
                    <div className='relative box-border w-full p-10 flex flex-col justify-between'>
                        <div className='z-[1] flex-1 p-5'>
                            <Abilities />
                        </div>
                        <div className='z-[1] relative flex-1 flex flex-col justify-center items-center'>
                            <Toolkit />
                            <Tooltip
                                key='toolkit'
                                cardClassName='z-[100] w-[100px] h-[100px] bg-[orange]'
                                arrowClassName='fill-transparent'
                                align='center'
                                side='top'
                            >
                                <div className='cursor-pointer absolute rounded-full w-[250px] h-[250px]' />
                                <div>Toolkit</div>
                            </Tooltip>
                        </div>
                        <div className='flex-1 py-16' />
                    </div>
                </div>
            </div>
        </div>
    </section>
}