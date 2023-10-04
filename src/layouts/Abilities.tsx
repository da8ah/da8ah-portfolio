import Tooltip from '@/components/Tooltip';
import { motion } from 'framer-motion';
import creativity from '/page1/abilities/icons8-creativity-96.png';
import diploma from '/page1/abilities/icons8-diploma-96.png';
import strength from '/page1/abilities/icons8-strength-96.png';

export default function Abilities() {
    const abilities = [
        {
            src: creativity,
            alt: 'creativity',
            href: 'https://icons8.com/icon/24W3YiVHWvNC/creativity'
        },
        {
            src: diploma,
            alt: 'diploma',
            href: 'https://icons8.com/icon/7o9vtHniHh4l/diploma'
        },
        {
            src: strength,
            alt: 'strength',
            href: 'https://icons8.com/icon/MyDyhaNB2oZy/strength'
        }
    ]
    return <>
        {abilities.map((ability, index) => (
            <Tooltip
                key={`ability-${index}`}
                align='start'
                side='left'
            >
                <motion.div
                    className='rounded-full w-[50px] h-[50px] my-2 p-2 flex justify-center items-center dark:bg-[#242424] dark:shadow-[0_0_5px_0_black] hover:dark:shadow-[0_0_5px_0_yellow]'
                    whileHover={{ scale: 1.1 }}
                >
                    <img
                        className='object-contain cursor-help w-[40px] h-[40px]' src={ability.src} alt={ability.alt}
                        onAuxClick={() => window.open(ability.href, '_blank', 'noopener noreferrer')}
                    />
                </motion.div>
                <div>
                    <h1 className='flex justify-center items-center'>
                        <img
                            className='object-contain cursor-help w-[40px] h-[40px]' src={ability.src} alt={ability.alt}
                            onAuxClick={() => window.open(ability.href, '_blank', 'noopener noreferrer')}
                        />
                        Ability
                    </h1>
                </div>
            </Tooltip>
        ))
        }
    </>
}