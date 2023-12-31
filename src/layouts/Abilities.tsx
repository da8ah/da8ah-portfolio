import Tooltip from '@/components/Tooltip';
import { LangContext } from '@/context/LangProvider';
import { motion } from 'framer-motion';
import { useContext } from 'react';
const innovation = '/page1/abilities/icons8-build-64.png';
const intelligence = '/page1/abilities/icons8-creativity-64.png';
const creativity = '/page1/abilities/icons8-creativity-96.png';
const diploma = '/page1/abilities/icons8-diploma-96.png';
const usa = '/page1/abilities/icons8-first-flag-of-the-usa-96.png';
const focus = '/page1/abilities/icons8-focus-64.png';
const graduation = '/page1/abilities/icons8-graduation-96.png';
const hiking = '/page1/abilities/icons8-hiking-64.png';
const strength = '/page1/abilities/icons8-strength-96.png';

export default function Abilities() {
    const { text } = useContext(LangContext)

    const abilities = [
        {
            src: diploma,
            alt: 'diploma',
            href: 'https://icons8.com/icon/7o9vtHniHh4l/diploma',
            icons: [
                {
                    src: graduation,
                    alt: 'graduation',
                    href: 'https://icons8.com/icon/12197/graduation-cap'
                },
                {
                    src: usa,
                    alt: 'usa',
                    href: 'https://icons8.com/icon/8H3RoQrvhfs3/first-flag-of-the-usa'
                }
            ]
        },
        {
            src: creativity,
            alt: 'creativity',
            href: 'https://icons8.com/icon/24W3YiVHWvNC/creativity',
            icons: [
                {
                    src: intelligence,
                    alt: 'intelligence',
                    href: 'https://icons8.com/icon/NrWt77eMmvjB/creativity'
                },
                {
                    src: innovation,
                    alt: 'innovation',
                    href: 'https://icons8.com/icon/ukQDPmDGR4H4/build'
                }
            ]
        },
        {
            src: strength,
            alt: 'strength',
            href: 'https://icons8.com/icon/MyDyhaNB2oZy/strength',
            icons: [
                {
                    src: hiking,
                    alt: 'hiking',
                    href: 'https://icons8.com/icon/1MGLqN4JZbRp/hiking'
                },
                {
                    src: focus,
                    alt: 'focus',
                    href: 'https://icons8.com/icon/sVIGxAUlcoIP/focus'
                }
            ]
        }
    ]

    return <>
        {abilities.map((ability, index) => (
            <Tooltip
                key={`ability-${ability.alt}`}
                tooltipKey={`ability-${index}`}
                align='start'
                side='left'
            >
                <motion.div
                    className='rounded-full w-[60px] h-[60px] my-2 p-2 flex justify-center items-center bg-gradient-to-b from-white to-gray-300 hover:shadow-[0_0_5px_3px_deepskyblue] dark:bg-[#242424] dark:from-transparent dark:to-transparent dark:shadow-[0_0_5px_0_black] hover:dark:shadow-[0_0_5px_2px_crimson]'
                    whileHover={{ scale: 1.1 }}
                >
                    <img
                        className='object-contain cursor-help w-full h-full' src={ability.src} alt={ability.alt}
                        onAuxClick={() => window.open(ability.href, '_blank', 'noopener noreferrer')}
                    />
                </motion.div>
                <div className='w-full h-full p-1 flex flex-col justify-center items-center'>
                    <img
                        className='object-contain w-[40px] h-[40px]' src={ability.src} alt={ability.alt}
                        onAuxClick={() => window.open(ability.href, '_blank', 'noopener noreferrer')}
                    />
                    <h1 className='flex justify-start items-center px-2 text-center'>
                        {text.page1.abilities.titles[index]}
                    </h1>
                    <div className='w-full flex-1 flex flex-col justify-around items-center'>
                        {text.page1.abilities.desc[index].map((item, i) => (
                            <div key={`ability-desc-${i}`} className='w-full flex justify-between items-center'>
                                <img
                                    className='mx-1 rounded-[1px] dark:shadow-[0_0_5px_0_black] p-1 object-contain w-[40px] h-[40px]' src={ability.icons[i].src} alt={ability.icons[i].alt}
                                    onAuxClick={() => window.open(ability.icons[i].href, '_blank', 'noopener noreferrer')}
                                />
                                <p className={`w-full p-1 ${index === 0 && i === 0 ? 'text-[0.6rem]' : 'text-sm'}`}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Tooltip>
        ))}
    </>
}