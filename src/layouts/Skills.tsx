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
                    <h1 key={`skill-title-${i}`}>{skill}</h1>
                    <ul key={`skill-items-${i}`} className="py-5 text-left">
                        {text.page1.skills.items[props.index][i].map((item, j) => (
                            <motion.li
                                {...props.animation}
                                key={`skill-${props.index}-item-${j}`}
                                className="py-2"
                            >
                                <Skill key={`skill-${i}-item-${j}`}>
                                    <div className='cursor-pointer flex flex-row items-end'>
                                        <Icon i={i} j={j} />
                                        {item}
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
        cardClassName='z-[100] w-[100px] h-[100px] bg-[orange]'
        arrowClassName='fill-[orange]'
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

    return <img className='w-[30px] h-[30px] mx-2' src={icons[i][j].src} alt={icons[i][j].alt} />
}