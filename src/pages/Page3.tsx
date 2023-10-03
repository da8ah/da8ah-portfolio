import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";
import { motion } from 'framer-motion';
import Card from "@/components/Card";
import libraryImg from "/page1/library.jpg";

export default function Page3(props: { className: string }) {
    const { themeMode } = useContext(ThemeContext)

    return <section className={props.className}>
        <div className='relative overflow-hidden w-full h-screen rounded-[20px] flex flex-row justify-center items-center'>
            {themeMode === 'dark' && <motion.span
                className='absolute z-0 w-[200%] h-[50%] content-none bg-gradient-to-r from-[#ff284c] to-[#ac0e0e]'
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    easeInOut: "linear"
                }}
            />}
            <div className='z-[1] w-[99.5%] h-[99%] rounded-[20px] flex flex-col justify-evenly items-center bg-white dark:bg-[#242424]'>
                <div className='py-10 grid grid-rows-2 grid-cols-4 gap-2 justify-items-center'>
                    {Array(8).fill(null).map((_, i) => (
                        <Card
                            key={`card-${i}`}
                            title="Project"
                            description="Tipo"
                            imgURL={libraryImg}
                        />)
                    )}
                </div>
            </div>
        </div>
    </section>
}