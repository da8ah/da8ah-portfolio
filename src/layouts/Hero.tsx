import Tooltip from "@/components/Tooltip";
import { ThemeContext } from "@/context/ThemeProvider";
import Abilities from "@/layouts/Abilities";
import Toolkit from "@/layouts/Toolkit";
import { useContext } from "react";
import bgImg from "/page1/library.jpg";
import bgVideo from "/page1/bg-magician.mp4";

export default function Hero() {
    const { themeMode } = useContext(ThemeContext)

    return <>
        {themeMode === 'dark' ?
            <video className='z-0 absolute object-contain w-[90%] h-[90%]' muted loop autoPlay>
                <source src={bgVideo} type="video/mp4" />
            </video>
            :
            <img className='z-0 absolute object-contain w-full h-[80%]' src={bgImg} alt='library' />
        }
        <div className='relative box-border w-full p-10 flex flex-col justify-between'>
            <div className='z-[1] flex-1 p-5'>
                <Abilities />
            </div>
            <div className='z-[1] relative flex-1 flex flex-col justify-center items-center'>
                <Toolkit />
                <Tooltip
                    key='toolkit'
                    align='center'
                    side='top'
                >
                    <div className='cursor-help absolute rounded-full w-[250px] h-[250px]' />
                    <div>Toolkit</div>
                </Tooltip>
            </div>
            <div className='flex-1 py-16' />
        </div>
    </>
}