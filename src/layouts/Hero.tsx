import { ThemeContext } from "@/context/ThemeProvider";
import Abilities from "@/layouts/Abilities";
import Toolkit from "@/layouts/Toolkit";
import { MotionProps } from "framer-motion";
import { useContext } from "react";
import bgVideo from "/page1/bg-magician.mp4";
import bgImg from "/page1/library.png";
import bgPfp from "/page1/pfp.png";

export default function Hero(props: { index: number, animation: MotionProps }) {
    const { themeMode } = useContext(ThemeContext)

    return <>
        {themeMode === 'dark' ?
            <video className='z-0 absolute object-contain w-[90%] h-[90%]' muted loop autoPlay>
                <source src={bgVideo} type="video/mp4" />
            </video>
            :
            <>
                <div className='absolute z-[1] top-0 w-[50%] h-[50%] flex justify-center items-center'>
                    <img className='object-cover rounded-[10px] w-[120px] h-[150px]' src={bgPfp} alt='pfp' />
                </div>
                <img className='z-0 absolute object-contain w-full h-[80%]' src={bgImg} alt='library' />
            </>
        }
        <div className='relative box-border w-full p-10 flex flex-col justify-between'>
            <div className='z-[1] flex-1 p-5'>
                <Abilities />
            </div>
            <div className='z-[1] relative flex-1 flex flex-col justify-center items-center'>
                <Toolkit index={props.index} animation={props.animation} />
            </div>
            <div className='flex-1 py-16' />
        </div>
    </>
}