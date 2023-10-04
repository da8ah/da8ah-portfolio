import { motion } from 'framer-motion'

export type LogoProps = {
    img: {
        style?: React.CSSProperties,
        src: string,
        alt: string,
        className: string
    },
    style?: React.CSSProperties,
    className: string,
    duration: number
}

export default function Logo(props: LogoProps) {
    return <div {...props}>
        <motion.img
            {...props.img}
            animate={{
                rotate: -45
            }}
            transition={{
                duration: props.duration,
                repeat: Infinity
            }}
        />
    </div>
}