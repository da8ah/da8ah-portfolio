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
                            key={`button-${playing ? 'playing' : 'paused'}`}
                            className={`rounded-full p-2 w-[70px] h-[70px] cursor-pointer ${playing && 'dark:shadow-[0_0_5px_0_black]'} hover:dark:shadow-[0_0_5px_1px_black]`}
                            src={playing ? play : pause}
                            alt={playing ? 'play' : 'pause'}
                            animate={{ opacity: [0.5, 1], scale: [0.5, 1] }}
                            onClick={() => { setPlay(!playing); setPause(playing) }}
                            onAuxClick={() => window.open(playing ? 'https://icons8.com/icon/GwYlS5m5Goz6/play' : 'https://icons8.com/icon/Z2aInWmsldJ6/pause', '_blank', 'noopener noreferrer')}
                        />
                    </div>
                    <Slider inView={inView} isPlaying={playing} setPlay={setPlay} setPause={setPause} />
                </div>
            </div>
        </div>
    </section>
}