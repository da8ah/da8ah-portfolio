import Tooltip from "@/components/Tooltip";
import { LangContext } from "@/context/LangProvider";
import { MotionProps, motion } from 'framer-motion';
import { useContext } from "react";
import laptop from '/page1/skills/icons8-laptop-coding-96.png'

export default function Skills(props: { index: number, animation: MotionProps }) {
    const { text } = useContext(LangContext)
    return <div className='w-full'>
        <div className='flex flex-row justify-evenly items-center'>
            {text.page1.skills.titles.map((skill, i) => (
                <div key={`skill-container-${i}`} className='w-[50%] flex flex-col items-center'>
                    <h1 key={`skill-title-${i}`} className='italic tracking-wider'>{skill}</h1>
                    <ul key={`skill-items-${i}`} className="py-5 text-left">
                        {text.page1.skills.items[props.index][i].map((item, j) => (
                            <motion.li
                                {...props.animation}
                                key={`skill-${props.index}-item-${j}`}
                                className="py-1"
                            >
                                <Skill key={`skill-${i}-item-${j}`}>
                                    <div className={`cursor-pointer w-[200px] p-2 flex flex-row items-end rounded-[5px] shadow-[0_0_5px_0_black] hover:bg-gradient-to-b ${i === 0 ? 'hover:from-[#f0463a] hover:to-[#ff284c]' : 'hover:from-[#3a98f0] hover:to-[#4A2FBD]'}`}>
                                        <Icon i={i} j={j} />
                                        <p>{item}</p>
                                    </div>
                                    <div className='w-full h-full space-x-4'>Hello World</div>
                                </Skill>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
}

function Skill(props: { key: string, children: [JSX.Element, JSX.Element] }) {
    return <Tooltip
        key={props.key}
    >
        {props.children}
    </Tooltip>
}

function Icon(props: { i: number, j: number }) {
    const { i, j } = props
    const icons = [
        [
            {
                src: laptop,
                alt: 'laptop',
            },
            {
                src: laptop,
                alt: 'laptop',
            },
            {
                src: laptop,
                alt: 'laptop',
            },
            {
                src: laptop,
                alt: 'laptop',
            },
        ],
        [
            {
                src: laptop,
                alt: 'laptop',
            },
            {
                src: laptop,
                alt: 'laptop',
            },
            {
                src: laptop,
                alt: 'laptop',
            },
            {
                src: laptop,
                alt: 'laptop',
            },
        ]
    ]

    return <img className='w-[30px] h-[30px] mr-1' src={icons[i][j].src} alt={icons[i][j].alt} />
}