import Build from "@/layouts/Build";
import Toolkit from "@/layouts/Toolkit";
import { motion } from 'framer-motion';
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeProvider";
import bgVideo from "/page1/magician.mp4";
import bgImg from "/page1/library.jpg";

export default function Page1(props: { className: string }) {
    const { themeMode } = useContext(ThemeContext)
    const [direction, setDirection] = useState<'left' | 'right'>()
    const [index, setIndex] = useState(0)

    const onLeftPress = () => {
        setDirection('left')
        setIndex(rol => rol === 0 ? 2 : rol - 1)
    }
    const onRightPress = () => {
        setDirection('right')
        setIndex(rol => rol === 2 ? 0 : rol + 1)
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
        <div className='relative overflow-hidden w-full h-screen rounded-[20px] flex flex-row justify-center items-center dark:shadow-[0_0_20px_10px_#4A2FBD]'>
            {themeMode === 'dark' && <motion.span
                className={`absolute z-0 w-[110%] h-[110%] content-none bg-gradient-to-r from-[#3a98f0] to-[#4A2FBD]`}
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity
                }}
            />}
            <div className='relative z-[1] w-[99.5%] h-[99%] rounded-[20px] flex flex-row justify-center items-center bg-white dark:bg-black dark:shadow-[inset_0_0_20px_10px_#4A2FBD]'>
                <div className='z-[1] w-[60%] flex flex-col justify-center items-center'>
                    {/* <img className='z-[0] absolute object-contain w-[90%] h-[90%]' src={bgImg} alt='library' /> */}
                    <Build index={index} animation={animation} onLeftPress={onLeftPress} onRightPress={onRightPress} />
                </div>
                <div className='w-[40%] py-2 flex flex-col justify-center items-center'>
                    {themeMode === 'dark' ?
                        <video className='z-0 absolute object-contain w-[90%] h-[90%]' muted loop autoPlay>
                            <source src={bgVideo} type="video/mp4" />
                        </video>
                        :
                        <img className='z-0 absolute object-contain w-[90%] h-[90%]' src={bgImg} alt='library' />
                    }
                    <div className='absolute top-5'>
                        <Toolkit />
                    </div>
                </div>
            </div>
        </div>
    </section>
}