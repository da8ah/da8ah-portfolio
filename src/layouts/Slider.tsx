import { LangContext } from "@/context/LangProvider";
import { SpaceAnimations } from "@/layouts/SlideAnimations";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from 'framer-motion';
import { useContext, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide4 from "/page1/slides/bookstore.png";
import slide3 from "/page1/slides/digency.png";
import slide2 from "/page1/slides/krypto.png";
import slide1 from "/page1/slides/space.png";

export default function Slider() {
    const { text } = useContext(LangContext)

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
                        {!isModalOpen && <div className='absolute bg-transparent w-[200px] h-[200px] -left-[100px] -bottom-[50px]'>
                            {img.animations}
                        </div>}
                        <motion.div
                            className={`absolute ${isModalOpen ? "bg-opacity-80" : "opacity-0 z-[-1]"} rounded-[10px] z-[10] cursor-pointer w-full h-full bg-black p-2 shadow-[0_0_5px_2px_black]`}
                            animate={isModalOpen ? "open" : "close"}
                            variants={variants}
                            transition={{ duration: 0.5 }}
                        >
                            <div className='w-full h-full flex flex-col justify-center items-center' >
                                <div className='z-10 w-full flex justify-between items-center'>
                                    <span className='w-[30%]' />
                                    <h1 className='w-[30%]'>{text.page2.slides[0].title}</h1>
                                    <div className='w-[30%] flex justify-end items-center'>
                                        <a
                                            className='px-2 flex justify-end items-center hover:text-[royalblue]'
                                            href={text.page2.slides[0].repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Repo <GitHubLogoIcon />
                                        </a>
                                        <a
                                            className='px-2 flex justify-end items-center hover:text-[royalblue]'
                                            href={text.page2.slides[0].demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Demo <ExternalLinkIcon />
                                        </a>
                                    </div>
                                </div>
                                <div className='flex-1 flex flex-col justify-center items-center'>
                                    <p>{text.page2.slides[0].desc}</p>
                                    <ul>
                                        <li>Tech Stack</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </>
                }
            </div>
        )
        )}
    </Carousel>
}
