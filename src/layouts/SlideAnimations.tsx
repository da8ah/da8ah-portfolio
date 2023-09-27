import { motion } from 'framer-motion';
import slide1Rocket from "/page1/slides/rocket.png";
import slide1Planet1 from "/page1/slides/planet1.png";

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
            src={slide1Planet1}
            alt={slide1Planet1}
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