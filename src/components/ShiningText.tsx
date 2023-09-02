import { motion } from 'framer-motion';

export default function ShiningText(props: { text: string, setStartToFalse: () => void }) {
    return <> {
        props.text.split("").map((letter, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 2 }}
                onAnimationComplete={props.setStartToFalse}
            >
                {letter}
            </motion.span>))
    }
    </>
}