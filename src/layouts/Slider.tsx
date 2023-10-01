import { LangContext } from "@/context/LangProvider";
import { SpaceAnimations } from "@/layouts/SlideAnimations";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide4 from "/page1/slides/bookstore.png";
import slide3 from "/page1/slides/digency.png";
import slide2 from "/page1/slides/krypto.png";
import slide1 from "/page1/slides/space.png";

export default function Slider() {

    const responsive = {
        // the naming can be any, depends on you.
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const [isModalOpen, setModalState] = useState(false)
    const variants = {
        open: { opacity: [0, 1], scale: [0.9, 1] },
        close: { scale: [1, 1.1] }
    }

    const [activeIndex, setActiveIndex] = useState(0)
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
    const changeSlide = (previousSlide: number, currentSlide: number, dataSize: number) => {
        let activeSlide = 0
        // right arrow
        if (previousSlide < currentSlide) activeSlide = currentSlide - 2 === dataSize ? 0 : currentSlide - 2
        // left arrow
        else activeSlide = currentSlide + (currentSlide <= dataSize && currentSlide >= 2 ? -2 : dataSize - 2);
        setActiveIndex(activeSlide)
    }

    return <Carousel
        keyBoardControl
        infinite
        centerMode
        autoPlay={!isModalOpen}
        responsive={responsive}
        className="w-full h-[70%] owl-carousel owl-theme text-center"
        itemClass="px-1 flex justify-center"
        afterChange={(previousSlide, { currentSlide }) => changeSlide(previousSlide, currentSlide, images.length)}
    >
        {images.map((img, i) => (
            <div
                key={`slide-${i}`}
                className={`relative ${activeIndex !== i ? "w-[90%]" : "w-full"} h-full rounded-[10px] flex justify-center items-center bg-transparent shadow-[10px_40px_10px_5px_black]`}
                onClick={() => activeIndex === i && setModalState(prev => !prev)}
            >
                {activeIndex !== i ?
                    <img
                        className='pointer-events-none object-contain rounded-[10px] opacity-10'
                        src={img.src}
                        alt={img.alt}
                    />
                    :
                    <>
                        <motion.img
                            key={`slide-img-${activeIndex}`}
                            className='object-contain rounded-[10px] shadow-[inset_2px_2px_2px_5px_black]'
                            src={img.src}
                            alt={img.alt}
                            animate={{ opacity: [0.5, 1] }}
                            transition={{ duration: 0.5 }}
                        />
                        <AnimatePresence>
                            {!isModalOpen &&
                                <motion.div
                                    key={activeIndex}
                                    className='absolute bg-transparent w-[200px] h-[200px] -left-[100px] -bottom-[50px]'
                                    animate={{ scale: [0.5, 1] }}
                                    exit={{
                                        opacity: 0,
                                        scale: [1, 0.9],
                                        display: !isModalOpen ? "flex" : "none"
                                    }}
                                >
                                    {img.animations}
                                </motion.div>
                            }
                        </AnimatePresence>
                        <motion.div
                            className={`absolute ${isModalOpen ? "bg-opacity-80 hover:bg-opacity-100" : "opacity-0 z-[-1]"} rounded-[10px] z-[10] cursor-pointer w-full h-full bg-black p-2 shadow-[0_0_5px_2px_black]`}
                            animate={isModalOpen ? "open" : "close"}
                            variants={variants}
                            transition={{ duration: 0.5 }}
                        >
                            <Modal activeIndex={0} />
                        </motion.div>
                    </>
                }
            </div>
        )
        )}
    </Carousel>
}

function Modal(props: { activeIndex: number }) {
    const { text } = useContext(LangContext)

    return <div className='w-full h-full flex flex-col justify-center items-center' >
        <div className='rounded-lg z-10 py-2 w-full flex justify-between items-center bg-black'>
            <span className='w-[20%] text-xl'>📌</span>
            <h1 className='w-[60%] text-2xl'>{text.page2.slides[props.activeIndex].title}</h1>
            <ul className='w-[20%] flex justify-end items-center'>
                <li>
                    <a
                        className='rounded-xl px-2 flex justify-end items-center bg-[teal] hover:bg-black'
                        href={text.page2.slides[props.activeIndex].repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='mx-1'>Repo</div><GitHubLogoIcon />
                    </a>
                </li>
                <li>
                    <a
                        className='rounded-xl px-2 flex justify-end items-center bg-[royalblue] hover:bg-black'
                        href={text.page2.slides[props.activeIndex].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Demo <ExternalLinkIcon />
                    </a>
                </li>
            </ul>
        </div>
        <div className='flex-1 flex justify-center items-center'>
            <ul className='w-[30%]'>
                <li>React</li>
                <li>Tailwind</li>
            </ul>
            <p>{text.page2.slides[props.activeIndex].desc}</p>
        </div>
    </div>
}