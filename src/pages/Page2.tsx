import { ThemeContext } from "@/context/ThemeProvider";
import Slider from "@/layouts/Slider";
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import pause from '/page2/icons8-pause-96.png';
import play from '/page2/icons8-play-96.png';

export default function Page2(props: { className: string }) {
    const { themeMode } = useContext(ThemeContext)

    const [ref, inView] = useInView({ threshold: 0 })
    const [playing, setPlay] = useState(false)
    const [paused, setPause] = useState(false)
    const variants = {
        active: { opacity: [0.5, 1], scale: [0.7, 1] },
        disabled: { opacity: [1, 0.5], scale: [1, 0.7] }
    }

    useEffect(() => { if (!paused) setPlay(inView) }, [inView])

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
                <div
                    ref={ref}
                    className='relative z-[1] w-[99.5%] h-[99%] rounded-[20px] flex flex-col justify-center items-center bg-white dark:bg-[#242424]'
                >
                    <div className='w-full flex justify-center items-center'>
                        <motion.img
                            className={`rounded-full p-1 w-[70px] h-[70px] ${!playing ? 'cursor-pointer hover:dark:shadow-[0_0_5px_0_black]' : 'cursor-not-allowed dark:shadow-[0_0_5px_0_black]'}`}
                            src={play}
                            alt="play"
                            animate={playing ? 'active' : 'disabled'}
                            variants={variants}
                            onClick={() => { if (!playing) setPlay(true); setPause(false) }}
                            onAuxClick={() => window.open('https://icons8.com/icon/GwYlS5m5Goz6/play', '_blank', 'noopener noreferrer')}
                        />
                        <motion.img
                            className={`rounded-full p-1 w-[70px] h-[70px] ${playing ? 'cursor-pointer hover:dark:shadow-[0_0_5px_0_black]' : 'cursor-not-allowed dark:shadow-[0_0_5px_0_black]'}`}
                            src={pause}
                            alt="pause"
                            animate={!playing ? 'active' : 'disabled'}
                            variants={variants}
                            onClick={() => { setPlay(false); setPause(true) }}
                            onAuxClick={() => window.open('https://icons8.com/icon/Z2aInWmsldJ6/pause', '_blank', 'noopener noreferrer')}
                        />
                    </div>
                    <Slider inView={inView} isPlaying={playing} setPlay={setPlay} setPause={setPause} />
                </div>
            </div>
        </div>
    </section>
}