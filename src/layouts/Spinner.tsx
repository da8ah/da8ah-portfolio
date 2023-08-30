import styles from '@/assets/animations.module.css'
import reactLogo from '@/assets/react.svg'
import Logo, { LogoProps } from '@/components/Logo'
import { motion } from 'framer-motion'
import viteLogo from '/vite.svg'

export default function Spinner() {

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

    return <div className='w-[30em] h-[30em] relative flex justify-center items-center'>
        <motion.div
            // id='loader'
            className='absolute w-[55%] h-[55%] flex justify-center items-center bg-white cursor-not-allowed bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] text-white focus:outline-none focus:shadow-2xl focus:shadow-purple-500'
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