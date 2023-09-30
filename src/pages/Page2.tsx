import { ThemeContext } from "@/context/ThemeProvider";
import Slider from "@/layouts/Slider";
import { motion } from 'framer-motion';
import { useContext } from "react";

export default function Page2(props: { className: string }) {
    const { themeMode } = useContext(ThemeContext)

    return <section className={props.className}>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='relative overflow-hidden w-full h-screen rounded-[20px] flex flex-row justify-center items-center'>
                {themeMode === 'dark' && <motion.span
                    className='absolute z-0 w-[200%] h-[50%] content-none bg-gradient-to-r from-[#ff284c] to-[#ac0e0e]'
                    animate={{
                        rotate: -360
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        easeInOut: "linear"
                    }}
                />}
                <div className='relative z-[1] w-[99.5%] h-[99%] rounded-[20px] flex flex-col justify-center items-center bg-white dark:bg-[#242424]'>
                    <Slider />
                </div>
            </div>
        </div>
    </section>
}