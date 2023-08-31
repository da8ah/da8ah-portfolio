import Skills from "@/layouts/Skills";
import Spinner from "@/layouts/Spinner";
import { motion } from 'framer-motion';
import bgImg from "/cyberpunk.jpg";

export default function Page1(props: { className: string }) {
    return <div className={props.className}>
        <div className='relative overflow-hidden w-full h-screen rounded-[20px] flex flex-row justify-center items-center bg-[#242424]'>
            <motion.div
                className={`absolute z-0 w-[110%] h-[110%] content-none bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]`}
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity
                }}
            />
            <div className='relative z-10 w-[99%] h-[99%] rounded-[20px] flex flex-row justify-center items-center bg-[#242424] shadow-2xl shadow-purple-500'>
                <div className='w-[60%]'>
                    <Skills />
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