import Tooltip from "@/components/Tooltip";
import { LangContext } from "@/context/LangProvider";
import { MotionProps, motion } from 'framer-motion';
import { useContext } from "react";

export default function Skills(props: { index: number, animation: MotionProps }) {
    const { text } = useContext(LangContext)
    return <div className='w-full'>
        <div className='py-5 flex flex-row justify-evenly items-center'>
            {text.page1.skills.titles.map((skill, i) => (
                <div key={`skill-container-${i}`}>
                    <h1 key={`skill-title-${i}`}>{skill}</h1>
                    <ul key={`skill-items-${i}`} className="py-5 text-left">
                        {text.page1.skills.items[props.index][i].map((item, j) => (
                            <motion.li
                                {...props.animation}
                                key={`skill-${props.index}-item-${j}`}
                                className="py-2"
                            >
                                <Skill key={`skill-${i}-item-${j}`}>
                                    <div>{item}</div>
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
    return <Tooltip key={props.key} cardClassName='z-[100] w-[100px] h-[100px] bg-black'>
        {props.children}
    </Tooltip>
}