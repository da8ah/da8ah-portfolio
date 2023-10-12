import { LangContext } from "@/context/LangProvider";
import { BocheAnimations, BookStoreAnimations, DigencyAnimations, KryptoAnimations, SpaceAnimations } from "@/layouts/SlideAnimations";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide4 from "/page2/slides/boche.png";
import slide5 from "/page2/slides/bookstore.png";
import slide3 from "/page2/slides/digency.png";
import slide2 from "/page2/slides/krypto.png";
import slide1 from "/page2/slides/space.png";
import qwikLogo from '/tooling/qwik.svg';
import reactLogo from '/tooling/react.svg';
import tsLogo from '/tooling/typescript.svg';
import viteLogo from '/tooling/vite.svg';

export default function Slider(props: { inView: boolean, isPlaying: boolean, setPlay: (value: boolean) => void, setPause: (value: boolean) => void }) {

    useEffect(() => { if (props.isPlaying) setModalState(false) }, [props.isPlaying])

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
            alt: "space portfolio",
            animations: <SpaceAnimations />
        },
        {
            src: slide2,
            alt: "krypto website",
            animations: <KryptoAnimations />
        },
        {
            src: slide3,
            alt: "digency website",
            animations: <DigencyAnimations />
        },
        {
            src: slide4,
            alt: "boche website",
            animations: <BocheAnimations />
        },
        {
            src: slide5,
            alt: "bookstore app",
            animations: <BookStoreAnimations />
        }
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
        infinite
        centerMode
        autoPlay={props.inView && props.isPlaying && !isModalOpen}
        responsive={responsive}
        className="w-full h-[70%] owl-carousel owl-theme text-center"
        itemClass="cursor-grab px-1 flex justify-center"
        afterChange={(previousSlide, { currentSlide }) => changeSlide(previousSlide, currentSlide, images.length)}
    >
        {images.map((img, i) => (
            <div
                key={`slide-${i}`}
                className={`relative ${activeIndex !== i ? "w-[90%]" : "w-full"} h-full rounded-[10px] flex justify-center items-center bg-transparent dark:shadow-[10px_40px_10px_5px_black]`}
                onClick={() => {
                    if (activeIndex === i) {
                        setModalState(prev => !prev)
                        props.setPlay(isModalOpen)
                        props.setPause(!isModalOpen)
                    }
                }}
            >
                {activeIndex !== i ?
                    <img
                        className='pointer-events-none object-contain rounded-[10px] opacity-80 dark:opacity-10'
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
                                    className='absolute bg-transparent w-[200px] h-[200px] -left-[100px] -bottom-[50px] flex justify-center items-center'
                                    initial={{ opacity: 0.5 }}
                                    animate={{ opacity: 1, scale: [0.5, 1] }}
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
                            className={`absolute ${isModalOpen ? "bg-opacity-80 hover:bg-opacity-90" : "opacity-0 z-[-1]"} rounded-[10px] z-[10] cursor-pointer w-full h-full bg-black p-2 shadow-[0_0_5px_2px_black]`}
                            animate={isModalOpen ? "open" : "close"}
                            variants={variants}
                            transition={{ duration: 0.5 }}
                        >
                            {isModalOpen && <Modal activeIndex={0} />}
                        </motion.div>
                    </>
                }
            </div>
        )
        )
        }
    </Carousel >
}

function Modal(props: { activeIndex: number }) {
    const { text } = useContext(LangContext)
    const logos = [
        {
            src: viteLogo,
            alt: 'Vite logo',
            title: 'vite',
            href: 'https://vitejs.dev/'
        },
        {
            src: tsLogo,
            alt: 'Typescript logo',
            title: 'typescript',
            href: 'https://www.typescriptlang.org/'
        },
        {
            src: qwikLogo,
            alt: 'Qwik logo',
            title: 'qwik',
            href: 'https://qwik.builder.io/'
        },
        {
            src: reactLogo,
            alt: 'React logo',
            title: 'react',
            href: 'https://react.dev/'
        }
    ]

    return <div className='w-full h-full flex flex-col justify-center items-center text-white' >
        <div className='rounded-lg z-10 py-2 w-full flex justify-between items-center'>
            <h1 className='w-[60%] uppercase font-bold text-left text-2xl text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-600 to-[royalblue] drop-shadow-[0_0_50px_10px_black]'>
                {text.page2.slides[props.activeIndex].title}
            </h1>
            <p className='text-justify'>{text.page2.slides[props.activeIndex].desc}</p>
        </div>
        <div className='flex-1 flex flex-col justify-center items-center'>
            <ul className='w-full flex flex-wrap justify-around items-center'>
                {logos.map((logo, i) => (
                    <li
                        key={i}
                        className='w-[60px] h-[60px] flex flex-col justify-center items-center mx-2 p-2 rounded-sm bg-white dark:bg-[#242424] hover:shadow-[0_0_2px_1px_white]'
                        onClick={(e) => { e.stopPropagation(); window.open(logo.href, '_blank', 'noopener noreferrer') }}
                    >
                        <div className='flex-1 flex p-1'>
                            <img className='object-contain w-full h-full' src={logo.src} alt={logo.alt} />
                        </div>
                        <p className='capitalize text-[.7rem] px-1'>{logo.title}</p>
                    </li>
                ))}
            </ul>
        </div>
        <ul className='w-full flex flex-row-reverse justify-center items-center'>
            <li className='px-4'>
                <a
                    className='rounded-xl px-4 flex justify-end items-center bg-[royalblue] hover:opacity-50 hover:underline'
                    href={text.page2.slides[props.activeIndex].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className='mx-1'>{text.page2.slideTitle}</h2><ExternalLinkIcon />
                </a>
            </li>
            <li className='px-4'>
                <a
                    className='rounded-xl px-4 flex justify-end items-center bg-[crimson] hover:opacity-50'
                    href={text.page2.slides[props.activeIndex].repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className='mx-1'>Repo</h2><GitHubLogoIcon />
                </a>
            </li>
        </ul>
    </div>
}