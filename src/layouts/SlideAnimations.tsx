import { motion } from 'framer-motion';
import slide1Rocket from "/page1/slides/space/rocket.png";
import slide1Planet from "/page1/slides/space/planet.png";

export const SpaceAnimations = () => {
    return <>
        <motion.img
            className='absolute w-[90px] h-[160px] bottom-0 right-3'
            src={slide1Rocket}
            alt={slide1Rocket}
            animate={{
                translateY: [0, 10, 0],
                // scale: [1, 0.9, 1]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
        />
        <motion.img
            className='absolute w-[90px] h-[90px] bottom-0 left-0'
            src={slide1Planet}
            alt={slide1Planet}
            animate={{
                scale: [1, 0.9, 1]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
        />
    </>
}