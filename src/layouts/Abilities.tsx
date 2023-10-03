import Tooltip from '@/components/Tooltip';
import { motion } from 'framer-motion';
import creativity from '/page1/abilities/icons8-creativity-96.png';

export default function Abilities() {
    const abilities = [
        {
            src: creativity,
            alt: 'creativity'
        },
        {
            src: creativity,
            alt: 'creativity'
        },
        {
            src: creativity,
            alt: 'creativity'
        }
    ]
    const imgClassName = 'object-contain w-[40px] h-[40px] mx-2'
    return <>
        {abilities.map((ability, index) => (
            <Tooltip
                key={`ability-${index}`}
                align='start'
                side='left'
            >
                <motion.div
                    className='cursor-help rounded-full w-[50px] h-[50px] my-2 p-2 flex justify-center items-center dark:bg-[#242424] dark:shadow-[0_0_5px_0_black] hover:dark:shadow-[0_0_5px_0_yellow]'
                    whileHover={{ scale: 1.1 }}
                >
                    <img className={imgClassName} src={ability.src} alt={ability.alt} />
                </motion.div>
                <div>Ability</div>
            </Tooltip>
        ))
        }
    </>
}