import { ThemeContext } from "@/context/ThemeProvider";
import { SpaceAnimations } from "@/layouts/SlideAnimations";
import { motion } from 'framer-motion';
import { useContext, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide4 from "/page1/slides/bookstore.png";
import slide3 from "/page1/slides/digency.png";
import slide2 from "/page1/slides/krypto.png";
import slide1 from "/page1/slides/space.png";

export default function Page2(props: { className: string }) {
    const { themeMode } = useContext(ThemeContext)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
            // partialVisibilityGutter: 100
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            // partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            // partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            // partialVisibilityGutter: 0
        },
    };

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
        },
        {
            src: slide4,
            alt: "",
            animations: undefined
        },
    ]
    const [bgIndex, setBgIndex] = useState(0)
    const changeSlide = (previousSlide: number, currentSlide: number, dataSize: number) => {
        let index = 0
        if (previousSlide < currentSlide) index = currentSlide - 2
        else index = currentSlide + (currentSlide === dataSize - 1 ? -2 : 2)
        setBgIndex(index === dataSize ? 0 : index)
    }

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
                    <Carousel
                        infinite
                        autoPlay
                        centerMode
                        responsive={responsive}
                        className="w-full h-[70%] owl-carousel owl-theme text-center"
                        itemClass="px-1 flex justify-center"
                        keyBoardControl={true}
                        afterChange={(previousSlide, { currentSlide }) => changeSlide(previousSlide, currentSlide, images.length)}
                    >
                        {images.map((img, i) => (
                            <div
                                key={`slide-${i}`}
                                className={`relative ${bgIndex !== i ? "w-[90%]" : "w-full"} h-full rounded-lg flex justify-center items-center bg-transparent shadow-[10px_40px_10px_5px_black]`}
                                onClick={() => setHover(true)}
                            >
                                {bgIndex !== i ?
                                    <img
                                        key={`slide-img-${bgIndex}`}
                                        className='pointer-events-none object-contain rounded-lg opacity-10'
                                        src={img.src}
                                        alt='library'
                                    />
                                    :
                                    <>
                                        <motion.img
                                            key={`slide-img-${bgIndex}`}
                                            className='object-contain rounded-lg'
                                            src={img.src}
                                            alt='library'
                                            animate={{
                                                // scale: [0.9, 1],
                                                opacity: [0.5, 1]
                                            }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <div className='absolute bg-transparent w-[200px] h-[200px] -left-[100px] -bottom-[50px]'>
                                            {img.animations}
                                        </div>
                                        <motion.div
                                            className={`absolute ${isHover ? "bg-opacity-80" : "opacity-0 z-[-1]"} z-[10] cursor-pointer rounded-xl w-full h-full bg-black p-2`}
                                            animate={isHover ? "open" : "close"}
                                            variants={variants}
                                            transition={{ duration: 0.5 }}
                                            onMouseLeave={() => setHover(false)}
                                        >
                                            <h3>Project {bgIndex}</h3>
                                            <p>Description</p>
                                            <ul>
                                                <li>Tech Stack</li>
                                            </ul>
                                        </motion.div>
                                    </>
                                }
                            </div>
                        )
                        )}
                    </Carousel>
                </div>
            </div>
        </div>
    </section>
}