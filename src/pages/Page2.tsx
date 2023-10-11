import Slider from "@/layouts/Slider";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import play from '/page2/icons8-play-96.png';
import stop from '/page2/icons8-stop-96.png';

export default function Page2(props: { className: string }) {

    const [ref, inView] = useInView({ threshold: 0 })
    const [playing, setPlay] = useState(false)
    const [paused, setPause] = useState(false)

    useEffect(() => { if (!paused) setPlay(inView) }, [inView])

    return <section className={props.className}>
        <div className='w-full flex flex-col justify-center items-center'>
            <div
                ref={ref}
                className='relative z-[1] w-full h-screen rounded-[20px] flex flex-col justify-center items-center bg-white dark:bg-[#242424]'
            >
                <div className='w-full flex justify-center items-center'>
                    <motion.img
                        key={`button-${playing ? 'playing' : 'paused'}`}
                        className={`rounded-full p-2 w-[70px] h-[70px] cursor-pointer ${playing ? 'shadow-[0_0_5px_1px_black]' : 'hover:shadow-[0_0_5px_1px_black]'}`}
                        src={playing ? play : stop}
                        alt={playing ? 'play' : 'pause'}
                        animate={{ opacity: [0.5, 1], scale: [0.5, 1] }}
                        onClick={() => { setPlay(!playing); setPause(playing) }}
                        onAuxClick={() => window.open(playing ? 'https://icons8.com/icon/ZyOJrX7NHhIC/play' : 'https://icons8.com/icon/yuL17jVfISu0/stop', '_blank', 'noopener noreferrer')}
                    />
                </div>
                <Slider inView={inView} isPlaying={playing} setPlay={setPlay} setPause={setPause} />
            </div>
        </div>
    </section>
}