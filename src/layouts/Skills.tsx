import Tooltip from "@/components/Tooltip";
import { LangContext } from "@/context/LangProvider";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { MotionProps, motion } from 'framer-motion';
import { useContext } from "react";
import laptop from '/page1/skills/icons8-laptop-coding-96.png';

export default function Skills(props: { index: number, animation: MotionProps }) {
    const { text } = useContext(LangContext)
    return <div className='w-full'>
        <div className='flex flex-row justify-evenly items-center'>
            <div className='w-[50%] flex flex-col items-center'>
                <h1 className='flex italic'><DotFilledIcon color='red' />{text.page1.skills.titles[0]}</h1>
                <ul className="py-2 text-left">
                    {text.page1.skills.hard[props.index].map((item, j) => (
                        <motion.li
                            {...props.animation}
                            key={`skill-${props.index}-item-${j}`}
                            className="py-1"
                        >
                            <Skill key={`skill-hard-item-${j}`}>
                                <motion.div
                                    className='cursor-help w-[250px] p-2 flex flex-row items-end rounded-[5px] dark:shadow-[0_0_5px_0_black] hover:text-white hover:bg-gradient-to-b hover:from-[#f0463a] hover:to-[#ff284c]'
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Icon i={0} j={j} />
                                    <p>{item}</p>
                                </motion.div>
                                <div className='w-full h-full space-x-4'>Hello World</div>
                            </Skill>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div className='w-[50%] flex flex-col items-center'>
                <h1 className='flex italic'><DotFilledIcon color='royalblue' />{text.page1.skills.titles[1]}</h1>
                <ul className="py-2 text-left">
                    {text.page1.skills.soft.map((item, j) => (
                        <li
                            key={`skill-${props.index}-item-${j}`}
                            className="py-1"
                        >
                            <Skill key={`skill-soft-item-${j}`}>
                                <motion.div
                                    className='cursor-help w-[200px] p-2 flex flex-row items-end rounded-[5px] dark:shadow-[0_0_5px_0_black] hover:text-white hover:bg-gradient-to-b hover:from-[#516dca] hover:to-[#3054ce]'
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Icon i={1} j={j} />
                                    <p>{item}</p>
                                </motion.div>
                                <div className='w-full h-full space-x-4'>Hello World</div>
                            </Skill>
                        </li>
                    ))}
                </ul>
            </div>
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