import { motion } from 'framer-motion';
const slide4Brick = "/page2/slides/boche/icons8-brick-94.png";
const slide4Horse = "/page2/slides/boche/icons8-rocking-horse-94.png";
const slide4Bear = "/page2/slides/boche/icons8-teddy-bear-94.png";
const slide5Coffee = "/page2/slides/bookstore/icons8-coffee-cup-64.png";
const slide5Like = "/page2/slides/bookstore/icons8-like-64.png";
const slide3Bell = "/page2/slides/digency/icons8-bell-94.png";
const slide3Megaphone = "/page2/slides/digency/icons8-megaphone-94.png";
const slide3Movie = "/page2/slides/digency/icons8-movie-94.png";
const slide3Wedding = "/page2/slides/digency/icons8-wedding-day-94.png";
const slide3Youtube = "/page2/slides/digency/icons8-youtube-94.png";
const slide2Wallet = "/page2/slides/krypto/icons8-digital-wallet-64.png";
const slide2Ethereum = "/page2/slides/krypto/icons8-ethereum-96.png";
const slide2Nft = "/page2/slides/krypto/icons8-nft-60.png";
const slide1Clouds = "/page2/slides/space/clouds.png";
const slide1Planet = "/page2/slides/space/planet.png";
const slide1Rocket = "/page2/slides/space/rocket.png";

export const SpaceAnimations = () => {
    return <>
        <motion.img
            className='absolute w-[40px] h-[40px] left-8'
            src={slide1Planet}
            alt={slide1Planet}
            animate={{
                translateY: [0, -10, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
        />
        <motion.img
            className='absolute w-[180px] h-[40px] bottom-3'
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
            className='absolute w-[70px] h-[120px]'
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
            className='absolute w-[100px] h-[100px] bottom-3'
            src={slide2Wallet}
            alt={slide2Wallet}
            animate={{
                scale: [1, 0.9, 1]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/H8NM1TB8Ho5e/digital-wallet', '_blank', 'noopener noreferrer')}
        />
        <motion.img
            className='absolute w-[50px] h-[50px] top-5'
            src={slide2Ethereum}
            alt={slide2Ethereum}
            animate={{
                translateY: [10, 0, 10],
                rotateY: [180, 0, 180]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/IhWBOFHtv6vx/ethereum', '_blank', 'noopener noreferrer')}
        />
        <motion.img
            className='absolute w-[60px] h-[60px] bottom-0 left-0'
            src={slide2Nft}
            alt={slide2Nft}
            animate={{
                translateY: [0, 10, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                easeInOut: 'linear'
            }}
            onAuxClick={() => window.open('https://icons8.com/icon/3KPaRW3427k0/nft', '_blank', 'noopener noreferrer')}
        />
    </>
}

export const DigencyAnimations = () => {
    return <>
        <motion.img
            className='absolute w-[60px] h-[50px] top-3 left-3'
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
            className='absolute w-[60px] h-[60px] bottom-3 left-3'
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
            className='absolute w-[60px] h-[60px] bottom-3 right-3'
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
            className='absolute w-[60px] h-[60px] top-3 right-3'
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
            className='absolute w-[70px] h-[70px] bottom-4 left-3'
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
            className='absolute w-[70px] h-[70px] bottom-4 right-3'
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