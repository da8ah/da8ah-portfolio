import Tooltip from "@/components/Tooltip";
import { LangContext } from "@/context/LangProvider";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { MotionProps, motion } from 'framer-motion';
import { useContext } from "react";
import eye from '/page1/skills/soft/icons8-eye-64.png';
import strength from '/page1/skills/soft/icons8-strength-96.png';
import schedule from '/page1/skills/soft/icons8-schedule-96.png';
import justice from '/page1/skills/soft/icons8-justice-96.png';
import design from '/page1/skills/hard/icons8-design-96.png';
import laptop from '/page1/skills/hard/icons8-laptop-coding-96.png';
import database from '/page1/skills/hard/icons8-database-96.png';
import cloud from '/page1/skills/hard/icons8-upload-to-the-cloud-96.png';
import photo from '/page1/skills/hard/icons8-photo-editor-96.png';
import video from '/page1/skills/hard/icons8-video-gallery-96.png';
import store from '/page1/skills/hard/icons8-play-store-96.png';
import diagram from '/page1/skills/hard/icons8-diagram-96.png';
import lab from '/page1/skills/hard/icons8-lab-96.png';
import file from '/page1/skills/hard/icons8-video-file-96.png';
import support from '/page1/skills/hard/icons8-online-support-96.png';
import remote from '/page1/skills/hard/icons8-remote-desktop-96.png';
import save from '/page1/skills/hard/icons8-save-all-96.png';
import clean from '/page1/skills/hard/icons8-clean-96.png';

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
                                    <IconLeft i={props.index} j={j} />
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
                                    <IconRight j={j} />
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

function IconLeft(props: { i: number, j: number }) {
    const { i, j } = props
    const icons = [
        [
            { src: design, alt: 'design' },
            { src: laptop, alt: 'laptop' },
            { src: database, alt: 'database' },
            { src: cloud, alt: 'cloud' }
        ],
        [
            { src: photo, alt: 'photo' },
            { src: laptop, alt: 'laptop' },
            { src: video, alt: 'video' },
            { src: store, alt: 'store' },
        ],
        [
            { src: diagram, alt: 'diagram' },
            { src: laptop, alt: 'laptop' },
            { src: lab, alt: 'lab' },
            { src: file, alt: 'file' },
        ],
        [
            { src: support, alt: 'support' },
            { src: remote, alt: 'remote' },
            { src: save, alt: 'save' },
            { src: clean, alt: 'clean' },
        ]
    ]

    return <img className='w-[30px] h-[30px] mr-1' src={icons[i][j].src} alt={icons[i][j].alt} />
}

function IconRight(props: { j: number }) {
    const { j } = props
    const icons = [
        { src: eye, alt: 'eye' },
        { src: strength, alt: 'strength' },
        { src: schedule, alt: 'schedule' },
        { src: justice, alt: 'justice' }
    ]

    return <img className='w-[30px] h-[30px] mr-1' src={icons[j].src} alt={icons[j].alt} />
}