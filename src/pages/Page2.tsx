import { ThemeContext } from "@/context/ThemeProvider";
import { motion } from 'framer-motion';
import { useContext, useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import libraryImg from "/page1/library.jpg";
import spaceImg from "/page1/slides/space.png";

export default function Page2(props: { className: string }) {
    const { themeMode } = useContext(ThemeContext)
    const images = [spaceImg, libraryImg]
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
                <div className='relative z-[1] w-[99.5%] h-[99%] rounded-[20px] flex flex-col justify-evenly items-center bg-white dark:bg-[#242424]'>
                    <motion.img
                        className='z-0 absolute object-contain w-full h-[80%]'
                        src={images[bgIndex]}
                        alt='library'
                        transition={{
                            opacity: 0.1,
                            duration: 0.1,
                            easeInOut: "linear"
                        }}
                    />
                    <h2 className='py-2'>Carousel 1</h2>
                    <Swiper
                        modules={[Autoplay, EffectCoverflow]}
                        key='carousel-0'
                        rewind
                        className='w-full h-full py-32 flex justify-center items-center'
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
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        onSlideChange={changeSlide}
                        onSlideChangeTransitionEnd={changeSlide}
                    >
                        {Array(5).fill(null).map((_, i) => (
                            <SwiperSlide
                                key={`carousel-0-card-${i}`}
                                virtualIndex={i}
                                className='w-[90%] flex justify-center items-center'
                            >
                                <div className="w-[50%] h-full bg-black p-2 rounded-[10px]">
                                    <h3>Project</h3>
                                    <p>Description</p>
                                    <ul>
                                        <li>Tech Stack</li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
}