import { LangContext } from "@/context/LangProvider";
import { ThemeContext } from "@/context/ThemeProvider";
import { BocheAnimations, BookStoreAnimations, DigencyAnimations, KryptoAnimations, SpaceAnimations } from "@/layouts/SlideAnimations";
import { CodeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const slide4 = "/page2/slides/boche.png";
const slide5 = "/page2/slides/bookstore.png";
const slide3 = "/page2/slides/digency.png";
const slide2 = "/page2/slides/krypto.png";
const slide1 = "/page2/slides/space.png";
const animate = '/tooling/animate.png';
const jsonwebtoken = '/tooling/auth0.svg';
const autoprefixer = '/tooling/autoprefixer.svg';
const azure = '/tooling/azure.svg';
const babel = '/tooling/babel.svg';
const dotenv = '/tooling/dotenv.svg';
const eslint = '/tooling/eslint.svg';
const expo = '/tooling/expo.svg';
const express = '/tooling/express.svg';
const figma = '/tooling/figma.svg';
const flashlist = '/tooling/flashlist.png';
const gimp = '/tooling/gimp.svg';
const evaicons = '/tooling/heart.svg';
const canva = '/tooling/icons8-canva-96.png';
const office = '/tooling/icons8-microsoft-office-2019-96.png';
const photos = '/tooling/icons8-photos-96.png';
const jest = '/tooling/jest.svg';
const mongodb = '/tooling/mongodb.svg';
const mongoose = '/tooling/mongoose.svg';
const nodejs = '/tooling/nodejs.svg';
const npm = '/tooling/npm.svg';
const passport = '/tooling/passport.svg';
const pnpm = '/tooling/pnpm.svg';
const postcss = '/tooling/postcss.svg';
const prettier = '/tooling/prettier.png';
const qwik = '/tooling/qwik.svg';
const radix = '/tooling/radix.svg';
const reacticons = '/tooling/react-icons.svg';
const react = '/tooling/react.svg';
const rome = '/tooling/rome.svg';
const spiro = '/tooling/spiro.svg';
const stripe = '/tooling/stripe.png';
const swc = '/tooling/swc.svg';
const tailwindcss = '/tooling/tailwindcss.svg';
const typescript = '/tooling/typescript.svg';
const uikitten = '/tooling/uikitten.png';
const vite = '/tooling/vite.svg';
const zustand = '/tooling/zustand.ico';


export default function Slider(props: { centerMode: boolean, inView: boolean, isPlaying: boolean, setPlay: (value: boolean) => void, setPause: (value: boolean) => void }) {
    const { themeMode } = useContext(ThemeContext)
    const { text } = useContext(LangContext)

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
        key='carousel'
        infinite
        centerMode={props.centerMode}
        autoPlay={props.inView && props.isPlaying && !isModalOpen}
        responsive={responsive}
        className="w-full h-[70%] owl-carousel owl-theme text-center"
        itemClass="cursor-grab px-1 flex justify-center"
        afterChange={(previousSlide, { currentSlide }) => changeSlide(previousSlide, currentSlide, images.length)}
    >
        {images.map((img, i) => (
            <div
                key={`slide-${i}`}
                className={`relative ${activeIndex !== i ? "w-[90%]" : "w-full"} h-full rounded-[10px] flex justify-center items-center bg-transparent shadow-none lg:dark:shadow-[10px_40px_10px_5px_black]`}
                onClick={() => {
                    if (activeIndex === i) {
                        setModalState(prev => !prev)
                        props.setPlay(isModalOpen)
                        props.setPause(!isModalOpen)
                    }
                }}
            >
                {activeIndex !== i ?
                    <>
                        {themeMode !== 'dark' && <span className='absolute w-full h-[90%] bg-black bg-opacity-70' />}
                        <img
                            key={`slide-img-${i}`}
                            className='pointer-events-none object-contain w-full h-full dark:rounded-[10px] dark:opacity-10'
                            src={img.src}
                            alt={img.alt}
                        />
                    </>
                    :
                    <>
                        <ul className={`z-[100] ${isModalOpen ? 'cursor-zoom-out' : 'cursor-zoom-in'} absolute w-full top-0 flex flex-row-reverse justify-between items-center`}>
                            {[text.page2.slides[activeIndex].demo, text.page2.slides[activeIndex].repo].map((href, i) => (
                                <li className='cursor-pointer'>
                                    <motion.a
                                        className={`${i === 0 ? 'rounded-[2px_10px_2px_2px]' : 'rounded-[10px_2px_2px_2px]'} m-1 w-[70px] h-[40px] px-4 flex justify-center items-center bg-white dark:bg-black bg-opacity-90`}
                                        title={i === 0 ? text.page2.slideTitle : 'Repo'}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: isModalOpen ? 1 : 0.2 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {i === 0 ? <ExternalLinkIcon width={30} height={30} /> : <CodeIcon width={30} height={30} />}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
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
                                    className='absolute bg-transparent w-[200px] h-[200px] -left-[100px] -bottom-[50px] hidden lg:flex justify-center items-center'
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
                            className={`absolute ${isModalOpen ? "cursor-zoom-out bg-opacity-90" : "cursor-zoom-in opacity-0 z-[-1]"} rounded-[10px] z-[10] w-full h-full bg-black p-2 shadow-[0_0_5px_2px_black]`}
                            animate={isModalOpen ? "open" : "close"}
                            variants={variants}
                            transition={{ duration: 0.5 }}
                        >
                            {isModalOpen && <Modal activeIndex={activeIndex} />}
                        </motion.div>
                    </>
                }
            </div>
        ))}
    </Carousel >
}

function Modal(props: { activeIndex: number }) {
    const { text } = useContext(LangContext)
    const logos = [
        [{
            src: vite,
            alt: 'vite',
            title: 'vite',
            href: 'https://vitejs.dev/'
        },
        {
            src: typescript,
            alt: 'typescript',
            title: 'typescript',
            href: 'https://www.typescriptlang.org/'
        },
        {
            src: react,
            alt: 'react',
            title: 'react',
            href: 'https://react.dev/'
        },
        {
            src: reacticons,
            alt: 'reacticons',
            title: 'icons',
            href: 'https://react.dev/'
        },
        {
            src: tailwindcss,
            alt: 'tailwindcss',
            title: 'tailwind',
            href: 'https://tailwindcss.com/'
        },
        {
            src: animate,
            alt: 'animate',
            title: 'animate',
            href: 'https://animate.style/'
        },
        {
            src: radix,
            alt: 'radix',
            title: 'radix',
            href: 'https://www.radix-ui.com/'
        },
        {
            src: autoprefixer,
            alt: 'autoprefixer',
            title: 'autoprefixer',
            href: 'https://github.com/postcss/autoprefixer'
        },
        {
            src: postcss,
            alt: 'postcss',
            title: 'postCSS',
            href: 'https://postcss.org/'
        },
        {
            src: npm,
            alt: 'npm',
            title: 'NPM',
            href: 'https://www.npmjs.com/'
        },
        {
            src: pnpm,
            alt: 'pnpm',
            title: 'PNPM',
            href: 'https://pnpm.io/'
        },
        {
            src: swc,
            alt: 'swc',
            title: 'SWC',
            href: 'https://swc.rs/'
        }],
        [{
            src: vite,
            alt: 'vite',
            title: 'vite',
            href: 'https://vitejs.dev/'
        },
        {
            src: typescript,
            alt: 'typescript',
            title: 'typescript',
            href: 'https://www.typescriptlang.org/'
        },
        {
            src: react,
            alt: 'react',
            title: 'react',
            href: 'https://react.dev/'
        },
        {
            src: reacticons,
            alt: 'reacticons',
            title: 'icons',
            href: 'https://react.dev/'
        },
        {
            src: tailwindcss,
            alt: 'tailwindcss',
            title: 'tailwind',
            href: 'https://tailwindcss.com/'
        },
        {
            src: autoprefixer,
            alt: 'autoprefixer',
            title: 'autoprefixer',
            href: 'https://github.com/postcss/autoprefixer'
        },
        {
            src: postcss,
            alt: 'postcss',
            title: 'postCSS',
            href: 'https://postcss.org/'
        },
        {
            src: npm,
            alt: 'npm',
            title: 'NPM',
            href: 'https://www.npmjs.com/'
        },
        {
            src: pnpm,
            alt: 'pnpm',
            title: 'PNPM',
            href: 'https://pnpm.io/'
        },
        {
            src: swc,
            alt: 'swc',
            title: 'SWC',
            href: 'https://swc.rs/'
        }],
        [{
            src: vite,
            alt: 'vite',
            title: 'vite',
            href: 'https://vitejs.dev/'
        },
        {
            src: typescript,
            alt: 'typescript',
            title: 'typescript',
            href: 'https://www.typescriptlang.org/'
        },
        {
            src: qwik,
            alt: 'qwik',
            title: 'qwik',
            href: 'https://qwik.builder.io/'
        },
        {
            src: tailwindcss,
            alt: 'tailwindcss',
            title: 'tailwind',
            href: 'https://tailwindcss.com/'
        },
        {
            src: eslint,
            alt: 'eslint',
            title: 'eslint',
            href: 'https://eslint.org/'
        },
        {
            src: prettier,
            alt: 'prettier',
            title: 'prettier',
            href: 'https://prettier.io/'
        },
        {
            src: autoprefixer,
            alt: 'autoprefixer',
            title: 'autoprefixer',
            href: 'https://github.com/postcss/autoprefixer'
        },
        {
            src: postcss,
            alt: 'postcss',
            title: 'postCSS',
            href: 'https://postcss.org/'
        },
        {
            src: npm,
            alt: 'npm',
            title: 'NPM',
            href: 'https://www.npmjs.com/'
        },
        {
            src: pnpm,
            alt: 'pnpm',
            title: 'PNPM',
            href: 'https://pnpm.io/'
        },
        {
            src: swc,
            alt: 'swc',
            title: 'SWC',
            href: 'https://swc.rs/'
        }],
        [{
            src: canva,
            alt: 'canva',
            title: 'canva',
            href: 'https://icons8.com/icon/iWw83PVcBpLw/canva'
        },
        {
            src: figma,
            alt: 'figma',
            title: 'figma',
            href: 'https://www.figma.com/'
        },
        {
            src: gimp,
            alt: 'gimp',
            title: 'gimp',
            href: 'https://www.gimp.org/'
        },
        {
            src: photos,
            alt: 'Microsoft photos',
            title: 'photos',
            href: 'https://icons8.com/icon/QdAGIsBAJMG7/photos'
        },
        {
            src: office,
            alt: 'office',
            title: 'office',
            href: 'https://icons8.com/icon/vIbsCQXkSp6l/microsoft-office-2019'
        }],
        [{
            src: react,
            alt: 'react native',
            title: 'native',
            href: 'https://reactnative.dev/'
        },
        {
            src: spiro,
            alt: 'react navigation',
            title: 'navigation',
            href: 'https://reactnavigation.org/'
        },
        {
            src: typescript,
            alt: 'Typescript logo',
            title: 'typescript',
            href: 'https://www.typescriptlang.org/'
        },
        {
            src: babel,
            alt: 'babel',
            title: 'babel',
            href: 'https://babeljs.io/'
        },
        {
            src: evaicons,
            alt: 'eva icons',
            title: 'Icons',
            href: 'https://akveo.github.io/eva-icons/#/'
        },
        {
            src: uikitten,
            alt: 'ui kitten',
            title: 'Kitten',
            href: 'https://akveo.github.io/react-native-ui-kitten/'
        },
        {
            src: expo,
            alt: 'expo',
            title: 'expo',
            href: 'https://expo.dev/'
        },
        {
            src: zustand,
            alt: 'zustand',
            title: 'zustand',
            href: 'https://zustand-demo.pmnd.rs/'
        },
        {
            src: flashlist,
            alt: 'flashlist',
            title: 'flashlist',
            href: 'https://shopify.github.io/flash-list/'
        },
        {
            src: stripe,
            alt: 'stripe',
            title: 'stripe',
            href: 'https://stripe.com/'
        },
        {
            src: nodejs,
            alt: 'nodejs',
            title: 'nodeJS',
            href: 'https://nodejs.org/about/'
        },
        {
            src: express,
            alt: 'expressjs',
            title: 'express',
            href: 'https://expressjs.com/'
        },
        {
            src: dotenv,
            alt: 'dotenv',
            title: 'dotenv',
            href: 'https://www.dotenv.org/'
        },
        {
            src: passport,
            alt: 'passportjs',
            title: 'passport',
            href: 'https://www.passportjs.org/'
        },
        {
            src: jsonwebtoken,
            alt: 'jsonwebtoken',
            title: 'JWT',
            href: 'https://github.com/auth0/node-jsonwebtoken'
        },
        {
            src: jest,
            alt: 'jest',
            title: 'jest',
            href: 'https://jestjs.io/'
        },
        {
            src: mongoose,
            alt: 'mongoose',
            title: 'mongoose',
            href: 'https://mongoosejs.com/'
        },
        {
            src: mongodb,
            alt: 'mongodb',
            title: 'mongoDB',
            href: 'https://www.mongodb.com/'
        },
        {
            src: azure,
            alt: 'azure',
            title: 'azure',
            href: 'https://azure.microsoft.com/'
        },
        {
            src: rome,
            alt: 'rome',
            title: 'rome',
            href: 'https://github.com/rome/tools'
        }]
    ]

    return <div className='w-full h-full flex flex-col justify-center items-center text-white' >
        <div className='rounded-lg z-10 w-full flex justify-center items-center'>
            <h1 className='w-[60%] rounded-lg uppercase font-bold text-center text-2xl text-white font-roboto'>
                {text.page2.slides[props.activeIndex].title}
            </h1>
        </div>
        <div className={`relative scroll-smooth ${Math.ceil(logos[props.activeIndex].length / 10) > 1 ? 'overflow-x-scroll' : 'overflow-x-hidden'} snap-x snap-mandatory w-full h-full mt-4 hidden lg:flex flex-col justify-center items-center`}>
            {Array(Math.ceil(logos[props.activeIndex].length / 10)).fill(null).map((_, i) => (
                <div
                    style={{ width: '100%', translate: `${i * 100}%` }}
                    className='absolute snap-center w-full h-full px-20 grid grid-rows-2 grid-cols-5'
                >
                    {logos[props.activeIndex].slice(i * 10, i * 10 + 10).map((logo, i) => (
                        <motion.div
                            key={i}
                            className='cursor-pointer w-[65px] h-[65px] flex flex-col justify-center items-center m-2 p-2 rounded-sm bg-gray-700 hover:shadow-[0_0_2px_1px_white]'
                            whileHover={{ scale: 0.9 }}
                            onClick={(e) => { e.stopPropagation(); window.open(logo.href, '_blank', 'noopener noreferrer') }}
                        >
                            <div className='box-border w-full h-full p-1'>
                                <img className='object-contain w-full h-full' src={logo.src} alt={logo.alt} />
                            </div>
                            <p className='capitalize text-[.7rem] px-1'>{logo.title}</p>
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    </div>
}