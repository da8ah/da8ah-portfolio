import { ThemeContext } from "@/context/ThemeProvider";
import { motion } from 'framer-motion';
import { useContext } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import { Autoplay, EffectCoverflow, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import spaceImg from "/page1/slides/space.png";

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
                <div className='z-[1] w-[99.5%] h-[99%] rounded-[20px] flex flex-col justify-evenly items-center bg-white dark:bg-[#242424]'>
                    <div
                        style={{ backgroundImage: `url(${spaceImg})` }}
                        className='relative bg-contain bg-center bg-no-repeat bg-[rgba(36,36,36,.8)] w-full h-full flex flex-col justify-center items-center'
                    >
                        <h2 className='py-2'>Carousel 1</h2>
                        <Swiper
                            modules={[Autoplay, EffectCoverflow, FreeMode]}
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
                            freeMode={true}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}
                        >
                            {Array(5).fill(null).map((_, i) => (
                                <SwiperSlide
                                    key={`carousel-0-card-${i}`}
                                    virtualIndex={i}
                                    className='w-[90%] flex justify-center items-center'
                                >
                                    <div>Project</div>
                                </SwiperSlide>
                            )
                            )}
                        </Swiper>
                    </div>
                    {/* <div
                        className='relative bg-[teal] w-full flex flex-col justify-center items-center'
                        onMouseEnter={() => setAutoPlay(false)}
                        onMouseLeave={() => setAutoPlay(true)}
                    >
                        <h2 className='py-2'>Carousel 2</h2>
                        <Swiper
                            key='carousel-1'                            
                            rewind
                            className="z-10 w-full owl-carousel owl-theme text-center"
                            autoplay
                        >
                            {Array(6).fill(null).map((_, i) => (
                                <SwiperSlide
                                    key={`carousel-1-card-${i}`}
                                >
                                <Card
                                title="Si"
                                description="Si"
                                imgURL={libraryImg}
                                />
                                </SwiperSlide>
                            )
                            )}
                        </Swiper>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
}