import Skills from "@/layouts/Skills";
import Spinner from "@/layouts/Spinner";
import { motion } from 'framer-motion';
import bgImg from "/cyberpunk.png";

export default function Page1(props: { className: string, text: { page1: { h1: string, roles: string[], profiles: string[], skills: string[], skillItems: [string[], string[]] } } }) {
    return <div className={props.className}>
        <div className='relative overflow-hidden w-full h-screen rounded-[20px] flex flex-row justify-center items-center'>
            <motion.div
                className={`absolute z-0 w-[110%] h-[110%] content-none bg-gradient-to-r from-[#3a98f0] to-[#4A2FBD]`}
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity
                }}
            />
            <div className='relative z-[1] w-[99.5%] h-[99%] rounded-[20px] flex flex-row justify-center items-center bg-[#242424] shadow-[inset_0_0_50px_10px_#4A2FBD]'>
                <div className='w-[60%]'>
                    <Skills text={{ ...props.text }} />
                </div>
                <div className='w-[40%] py-2 flex flex-col justify-center items-center'>
                    <img className='relative object-cover h-[90%]' src={bgImg} alt='library' />
                    <div className='absolute top-5'>
                        <Spinner />
                    </div>
                </div>
            </div>
        </div>
    </div>
}