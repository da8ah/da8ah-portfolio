import { ThemeContext } from "@/context/ThemeProvider";
import { motion } from 'framer-motion';
import { useContext, useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "/page1/slides/space.png";
import slide2 from "/page1/slides/krypto.png";
import slide3 from "/page1/slides/digency.png";
import { SpaceAnimations } from "@/layouts/SlideAnimations";

export default function Page2(props: { className: string }) {
    const { themeMode } = useContext(ThemeContext)

    const [isHover, setHover] = useState(false)
    const variants = {
        open: { opacity: [0, 1], scale: [0.9, 1] },
        close: { scale: [1, 1.1, 1] }
    }

    const images = [
        {
            src: slide1,
            alt: "",
            animations: <SpaceAnimations />
        },
        {
            src: slide2,
            alt: "",
            animations: undefined
        },
        {
            src: slide3,
            alt: "",
            animations: undefined
        }
    ]
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
                        effect={'coverflow'}
                        rewind
                        className='absolute z-0 w-full h-[80%] flex justify-center items-center'
                        grabCursor={true}
                        centeredSlides={true}
                        spaceBetween={10}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        // loop={true}
                        // autoplay={!isHover && {
                        //     delay: 5000,
                        //     disableOnInteraction: false,
                        //     pauseOnMouseEnter: true
                        // }}
                        onSlideChange={changeSlide}
                    >
                        {images.map((img, i) => (
                            <SwiperSlide
                                key={`slide-${i}`}
                                virtualIndex={i}
                                className='w-[90%] flex justify-center items-center'
                            >
                                <div
                                    className='relative w-[80%] h-[80%] bg-transparent flex justify-center items-center shadow-[10px_40px_10px_5px_black]'
                                    onClick={() => setHover(true)}
                                >
                                    <motion.img
                                        key={`slide-img-${bgIndex}`}
                                        className='object-contain rounded-lg'
                                        src={img.src}
                                        alt='library'
                                        animate={{
                                            scale: [0.9, 1],
                                            // opacity: [0.5, 1]
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className='absolute bg-white w-[200px] h-[200px] -left-[100px] -bottom-[50px]'>
                                        {img.animations}
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                    <motion.div
                        className={`absolute ${isHover ? "bg-opacity-80" : "opacity-0 z-[-1]"} z-[1] rounded-xl w-[70%] h-[70%] bg-black p-2`}
                        animate={isHover ? "open" : "close"}
                        variants={variants}
                        transition={{ duration: 0.5 }}
                        onClick={() => setHover(false)}
                    >
                        <h3>Project {bgIndex}</h3>
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