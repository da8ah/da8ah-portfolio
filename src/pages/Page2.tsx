import Card from "@/components/Card";
import { ThemeContext } from "@/context/ThemeProvider";
import { motion } from 'framer-motion';
import { useContext, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import libraryImg from "/page1/library.jpg";

export default function Page2(props: { className: string }) {

    const { themeMode } = useContext(ThemeContext)
    const [autoPlay0, setAutoPlay0] = useState(true)
    const [autoPlay1, setAutoPlay1] = useState(true)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return <section className={props.className}>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='relative overflow-hidden w-full h-screen rounded-[20px] flex flex-row justify-center items-center'>
                {themeMode === 'dark' && <motion.span
                    className={`absolute z-0 w-[200%] h-[50%] content-none bg-gradient-to-r from-[#ff284c] to-[#ac0e0e]`}
                    animate={{
                        rotate: -360
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        "easeInOut": "linear"
                    }}
                />}
                <div className='z-[1] w-[99.5%] h-[99%] rounded-[20px] flex flex-col justify-evenly items-center bg-white dark:bg-[#242424]'>
                    <div
                        className='relative bg-[teal] w-full flex flex-col justify-center items-center'
                        onMouseEnter={() => setAutoPlay0(false)}
                        onMouseLeave={() => setAutoPlay0(true)}
                    >
                        <h2 className='py-2'>Carousel 1</h2>
                        <Carousel
                            infinite
                            centerMode
                            responsive={responsive}
                            className="z-10 w-full owl-carousel owl-theme text-center"
                            itemClass="flex justify-center"
                            autoPlay={autoPlay0}
                            customTransition={autoPlay0 ? "transform 10s linear" : undefined}
                            transitionDuration={autoPlay0 ? 10000 : 100}
                            keyBoardControl={true}
                        >
                            {Array(3).fill(null).map((_, i) => <Card
                                key={`carousel-0-card-${i}`}
                                title="Si"
                                description="Si"
                                imgURL={libraryImg}
                            />)}
                        </Carousel>
                    </div>
                    <div
                        className='relative bg-[teal] w-full flex flex-col justify-center items-center'
                        onMouseEnter={() => setAutoPlay1(false)}
                        onMouseLeave={() => setAutoPlay1(true)}
                    >
                        <h2 className='py-2'>Carousel 2</h2>
                        <Carousel
                            rtl
                            infinite
                            centerMode
                            responsive={responsive}
                            className="z-10 w-full owl-carousel owl-theme text-center"
                            itemClass="flex justify-center"
                            autoPlay={autoPlay1}
                            autoPlaySpeed={100}
                            customTransition="transform 10s linear"
                            transitionDuration={10000}
                            keyBoardControl={true}
                        >
                            {Array(3).fill(null).map((_, i) => <Card
                                key={`carousel-1-card-${i}`}
                                title="Si"
                                description="Si"
                                imgURL={libraryImg}
                            />)}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
}