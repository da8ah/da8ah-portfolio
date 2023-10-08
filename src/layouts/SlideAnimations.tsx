import { motion } from 'framer-motion';
import slide4Brick from "/page2/slides/boche/icons8-brick-94.png";
import slide4Horse from "/page2/slides/boche/icons8-rocking-horse-94.png";
import slide4Bear from "/page2/slides/boche/icons8-teddy-bear-94.png";
import slide5Coffee from "/page2/slides/bookstore/icons8-coffee-cup-64.png";
import slide5Like from "/page2/slides/bookstore/icons8-like-64.png";
import slide3Bell from "/page2/slides/digency/icons8-bell-94.png";
import slide3Megaphone from "/page2/slides/digency/icons8-megaphone-94.png";
import slide3Movie from "/page2/slides/digency/icons8-movie-94.png";
import slide3Wedding from "/page2/slides/digency/icons8-wedding-day-94.png";
import slide3Youtube from "/page2/slides/digency/icons8-youtube-94.png";
import slide2Bitcoin from "/page2/slides/krypto/bitcoin.png";
import slide2Building from "/page2/slides/krypto/building.png";
import slide2Etherium from "/page2/slides/krypto/etherium.png";
import slide1Clouds from "/page2/slides/space/clouds.png";
import slide1Planet from "/page2/slides/space/planet.png";
import slide1Rocket from "/page2/slides/space/rocket.png";

export const SpaceAnimations = () => {
    return <>
        <motion.img
            className='absolute w-[70px] h-[70px] bottom-3 right-1/3'
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
        <motion.img
            className='absolute w-[200px] h-[50px] bottom-0 left-0'
            src={slide1Clouds}
            alt={slide1Clouds}
            animate={{
                scale: [1, 0.9, 1]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
        />
        <motion.img
            className='absolute w-[90px] h-[160px] bottom-0 right-3'
            src={slide1Rocket}
            alt={slide1Rocket}
            animate={{
                translateY: [0, 10, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
        />
    </>
}

export const KryptoAnimations = () => {
    return <>
        <motion.img
            className='absolute w-[100px] h-[160px] bottom-3 right-1/4'
            src={slide2Building}
            alt={slide2Building}
            animate={{
                scale: [1, 0.9, 1]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
        />
        <motion.img
            className='absolute w-[60px] h-[70px] bottom-0 left-0'
            src={slide2Etherium}
            alt={slide2Etherium}
            animate={{
                translateY: [10, 0, 10]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
        />
        <motion.img
            className='absolute w-[60px] h-[70px] bottom-0 right-0'
            src={slide2Bitcoin}
            alt={slide2Bitcoin}
            animate={{
                translateY: [0, 10, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
        />
    </>
}

export const DigencyAnimations = () => {
    return <>
        <motion.img
            className='absolute w-[70px] h-[60px] top-3 left-3'
            src={slide3Youtube}
            alt={slide3Youtube}
            animate={{
                translateY: [0, 10, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/qLVB1tIe9Ts9/youtube', '_blank', 'noopener noreferrer')}
        />
        <motion.img
            className='absolute w-[70px] h-[70px] bottom-3 left-3'
            src={slide3Wedding}
            alt={slide3Wedding}
            animate={{
                translateX: [0, 10, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/HFfgVaJNpYdO/wedding-day', '_blank', 'noopener noreferrer')}
        />
        <motion.img
            className='absolute w-[70px] h-[70px] bottom-3 right-3'
            src={slide3Movie}
            alt={slide3Movie}
            animate={{
                translateY: [0, -10, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/F2R6V3ECtTmF/documentary', '_blank', 'noopener noreferrer')}
        />
        <motion.img
            className='absolute w-[70px] h-[70px] top-3 right-3'
            src={slide3Megaphone}
            alt={slide3Megaphone}
            animate={{
                translateX: [0, -10, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/MuBvfid167aN/megaphone', '_blank', 'noopener noreferrer')}
        />
        <motion.img
            className='absolute w-[70px] h-[70px]'
            src={slide3Bell}
            alt={slide3Bell}
            animate={{
                scale: [1, 0.9, 1]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/q83D9p2dPS2W/bell', '_blank', 'noopener noreferrer')}
        />
    </>
}

export const BocheAnimations = () => {
    return <>
        <motion.img
            className='absolute w-[100px] h-[100px]'
            src={slide4Bear}
            alt={slide4Bear}
            animate={{
                scale: [1, 0.9, 1]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/2QbGlbjEvTes/teddy-bear', '_blank', 'noopener noreferrer')}
        />
        <motion.img
            className='absolute w-[80px] h-[80px] bottom-4 left-3'
            src={slide4Brick}
            alt={slide4Brick}
            animate={{
                translateY: [0, 10, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/yWDrzc0ldyqH/brick', '_blank', 'noopener noreferrer')}
        />
        <motion.img
            className='absolute w-[80px] h-[80px] bottom-4 right-3'
            src={slide4Horse}
            alt={slide4Horse}
            animate={{
                translateY: [10, 0, 10]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/lhFZO9M1ER3Z/rocking-horse', '_blank', 'noopener noreferrer')}
        />
    </>
}

export const BookStoreAnimations = () => {
    return <>
        <motion.img
            className='absolute w-[70px] h-[70px] left-7 top-0'
            src={slide5Like}
            alt={slide5Like}
            animate={{
                scale: [1, 0.9, 1],
                rotateY: [180, 0, 180]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/rQRJn99727Xs/like', '_blank', 'noopener noreferrer')}
        />
        <motion.img
            className='absolute w-[70px] h-[70px] left-7 mt-4'
            src={slide5Coffee}
            alt={slide5Coffee}
            animate={{
                scale: [1, 0.9, 1]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/q2uqJux970cP/coffee-cup', '_blank', 'noopener noreferrer')}
        />
    </>
}