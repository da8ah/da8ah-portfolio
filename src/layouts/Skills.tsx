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
                    <h1 key={`skill-${i}`}>{skill}</h1>
                    <ul key={`items-${i}`} className="py-5 text-left">
                        {text.page1.skills.items[props.index][i].map((item, j) => (
                            <motion.li
                                {...props.animation}
                                key={`items-${i}-${j}`}
                                className="py-2"
                            >
                                <Tooltip key={`tooltip-${i}-${j}`} /> {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
}