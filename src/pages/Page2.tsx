import { ThemeContext } from "@/context/ThemeProvider";
import { motion } from 'framer-motion';
import { useContext, useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "/page1/slides/space.jpeg";
import slide2 from "/page1/slides/banner.png";

export default function Page2(props: { className: string }) {
    const { themeMode } = useContext(ThemeContext)

    const [isHover, setHover] = useState(false)
    const variants = {
        open: { opacity: [0, 1], scale: [0.9, 1] },
        close: { opacity: 0 }
    }

    const images = [slide1, slide2]
    const [bgIndex, setBgIndex] = useState(0)
    const changeSlide = () => setBgIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))

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
                    <Swiper
                        modules={[Autoplay, EffectCoverflow]}
                        key='carousel-0'
                        rewind
                        className='absolute z-0 w-full h-[80%] flex justify-center items-center'
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        loop={true}
                        autoplay={!isHover && {
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        onSlideChange={changeSlide}
                        onSlideChangeTransitionEnd={changeSlide}
                    >
                        {images.map((img, i) => (
                            <SwiperSlide
                                key={`carousel-0-card-${i}`}
                                virtualIndex={i}
                                className='w-[90%] flex justify-center items-center'
                            >
                                <motion.img
                                    key={img}
                                    className='object-contain rounded-lg w-[50%] h-[70%]'
                                    src={img}
                                    alt='library'
                                    animate={{ opacity: [0.5, 1] }}
                                    transition={{ duration: 0.5 }}
                                />
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                    <motion.div
                        className={`${isHover ? "opacity-100" : "opacity-0"} z-[1] w-[50%] h-[70%] bg-black p-2 rounded-[10px]`}
                        animate={isHover ? "open" : "close"}
                        variants={variants}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <h3>Project {images[bgIndex]}</h3>
                        <p>Description</p>
                        <ul>
                            <li>Tech Stack</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
}