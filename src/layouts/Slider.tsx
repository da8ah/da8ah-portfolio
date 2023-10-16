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
import animate from '/tooling/animate.ico';
import jsonwebtoken from '/tooling/auth0.svg';
import autoprefixer from '/tooling/autoprefixer.svg';
import azure from '/tooling/azure.svg';
import babel from '/tooling/babel.svg';
import dotenv from '/tooling/dotenv.svg';
import eslint from '/tooling/eslint.svg';
import expo from '/tooling/expo.svg';
import express from '/tooling/express.svg';
import figma from '/tooling/figma.svg';
import flashlist from '/tooling/flashlist.png';
import gimp from '/tooling/gimp.svg';
import evaicons from '/tooling/heart.svg';
import canva from '/tooling/icons8-canva-96.png';
import office from '/tooling/icons8-microsoft-office-2019-96.png';
import photos from '/tooling/icons8-photos-96.png';
import jest from '/tooling/jest.svg';
import mongodb from '/tooling/mongodb.svg';
import mongoose from '/tooling/mongoose.svg';
import nodejs from '/tooling/nodejs.svg';
import npm from '/tooling/npm.svg';
import passport from '/tooling/passport.svg';
import pnpm from '/tooling/pnpm.svg';
import postcss from '/tooling/postcss.svg';
import prettier from '/tooling/prettier.png';
import qwik from '/tooling/qwik.svg';
import radix from '/tooling/radix.svg';
import reacticons from '/tooling/react-icons.svg';
import react from '/tooling/react.svg';
import spiro from '/tooling/spiro.svg';
import stripe from '/tooling/stripe.png';
import swc from '/tooling/swc.svg';
import tailwindcss from '/tooling/tailwindcss.svg';
import typescript from '/tooling/typescript.svg';
import uikitten from '/tooling/uikitten.png';
import vite from '/tooling/vite.svg';
import zustand from '/tooling/zustand.ico';


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
            href: 'https://nodejs.org/'
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
        }]
    ]

    return <div className='w-full h-full flex flex-col justify-center items-center text-white' >
        <div className='rounded-lg z-10 py-2 w-full flex justify-center items-center'>
            <h1 className='w-[60%] uppercase font-bold text-center text-2xl text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-600 to-[royalblue] drop-shadow-[0_0_50px_10px_black]'>
                {text.page2.slides[props.activeIndex].title}
            </h1>
        </div>
        <div className='flex-1 flex flex-col justify-center items-center'>
            <ul className='w-full px-20 flex flex-wrap justify-center items-center'>
                {logos[props.activeIndex].map((logo, i) => (
                    <motion.li
                        key={i}
                        className='w-[65px] h-[50px] flex flex-col justify-center items-center m-2 p-2 rounded-sm bg-white dark:bg-[#242424] hover:shadow-[0_0_2px_1px_white]'
                        whileHover={{ scale: 0.9 }}
                        onClick={(e) => { e.stopPropagation(); window.open(logo.href, '_blank', 'noopener noreferrer') }}
                    >
                        <div className='box-border w-full h-full p-1'>
                            <img className='object-contain w-full h-full' src={logo.src} alt={logo.alt} />
                        </div>
                        <p className='capitalize text-[.7rem] px-1'>{logo.title}</p>
                    </motion.li>
                ))}
            </ul>
        </div>
        <ul className='w-full flex flex-row-reverse justify-center items-center'>
            <li className='px-4'>
                <motion.a
                    className='rounded-xl px-4 flex justify-end items-center bg-[royalblue]'
                    href={text.page2.slides[props.activeIndex].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: .9 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className='mx-1'>{text.page2.slideTitle}</h2><ExternalLinkIcon />
                </motion.a>
            </li>
            <li className='px-4'>
                <motion.a
                    className='rounded-xl px-4 flex justify-end items-center bg-[crimson]'
                    href={text.page2.slides[props.activeIndex].repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: .9 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className='mx-1'>Repo</h2><GitHubLogoIcon />
                </motion.a>
            </li>
        </ul>
    </div>
}