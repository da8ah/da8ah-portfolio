import styles from '@/assets/animations.module.css'
import Logo, { LogoProps } from '@/components/Logo'
import { motion } from 'framer-motion'
import reactLogo from '/page1/toolkit/react.svg'
import viteLogo from '/page1/toolkit/vite.svg'

export default function Toolkit() {

    const initialTime = 30
    const logos: Omit<LogoProps, 'style'>[] = [
        {
            img: {
                src: viteLogo,
                alt: 'Vite logo',
                className: styles.SpinnerImage,
            },
            className: styles.SpinnerItem,
            duration: initialTime
        },
        {
            img: {
                src: viteLogo,
                alt: 'Vite logo',
                className: styles.SpinnerImage,
            },
            className: styles.SpinnerItem,
            duration: initialTime
        },
        {
            img: {
                src: viteLogo,
                alt: 'Vite logo',
                className: styles.SpinnerImage,
            },
            className: styles.SpinnerItem,
            duration: initialTime
        },
        {
            img: {
                src: viteLogo,
                alt: 'Vite logo',
                className: styles.SpinnerImage,
            },
            className: styles.SpinnerItem,
            duration: initialTime
        },
        {
            img: {
                src: reactLogo,
                alt: 'React logo',
                className: styles.SpinnerImage,
            },
            className: styles.SpinnerItem,
            duration: initialTime
        },
        {
            img: {
                src: reactLogo,
                alt: 'React logo',
                className: styles.SpinnerImage,
            },
            className: styles.SpinnerItem,
            duration: initialTime
        },
        {
            img: {
                src: reactLogo,
                alt: 'React logo',
                className: styles.SpinnerImage,
            },
            className: styles.SpinnerItem,
            duration: initialTime
        },
        {
            img: {
                src: reactLogo,
                alt: 'React logo',
                className: styles.SpinnerImage,
            },
            className: styles.SpinnerItem,
            duration: initialTime
        }
    ]

    return <div className='box-content w-[250px] h-[250px] relative flex justify-center items-center'>
        <motion.div
            className='absolute w-[95%] h-[95%] flex justify-center items-center'
            // className='absolute w-[55%] h-[55%] flex justify-center items-center bg-white cursor-not-allowed bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] text-white focus:outline-none focus:shadow-2xl focus:shadow-purple-500'
            animate={{
                rotate: 360
            }}
            transition={{
                duration: initialTime,
                repeat: Infinity,
            }}
        >
            {logos.map((logo, index) => {
                return <Logo
                    key={`logo-${index}`}
                    style={{ '--i': index } as React.CSSProperties}
                    {...logo}
                    img={{
                        ...logo.img,
                        style: { '--i': index } as React.CSSProperties
                    }}
                />
            })}
        </motion.div>
    </div>
}