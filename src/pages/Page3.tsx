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
                <h2>Page 3</h2>
                <div className='py-10 flex flex-wrap flex-row justify-center items-center'>
                    {Array(4).fill(null).map((_, i) => (
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