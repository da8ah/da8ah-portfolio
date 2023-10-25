import Tooltip from "@/components/Tooltip";
import { LangContext } from "@/context/LangProvider";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { MotionProps, motion } from 'framer-motion';
import { useContext } from "react";
const clean = '/page1/skills/hard/icons8-clean-96.png';
const database = '/page1/skills/hard/icons8-database-96.png';
const design = '/page1/skills/hard/icons8-design-96.png';
const diagram = '/page1/skills/hard/icons8-diagram-96.png';
const lab = '/page1/skills/hard/icons8-lab-96.png';
const laptop = '/page1/skills/hard/icons8-laptop-coding-96.png';
const support = '/page1/skills/hard/icons8-online-support-96.png';
const photo = '/page1/skills/hard/icons8-photo-editor-96.png';
const store = '/page1/skills/hard/icons8-play-store-96.png';
const remote = '/page1/skills/hard/icons8-remote-desktop-96.png';
const save = '/page1/skills/hard/icons8-save-all-96.png';
const cloud = '/page1/skills/hard/icons8-upload-to-the-cloud-96.png';
const file = '/page1/skills/hard/icons8-video-file-96.png';
const video = '/page1/skills/hard/icons8-video-gallery-96.png';
const eye = '/page1/skills/soft/icons8-eye-64.png';
const justice = '/page1/skills/soft/icons8-justice-96.png';
const medal = '/page1/skills/soft/icons8-medal-96.png';
const schedule = '/page1/skills/soft/icons8-schedule-96.png';

export default function Skills(props: { index: number, animation: MotionProps }) {
    const { text } = useContext(LangContext)
    return <div className='w-full'>
        <div className='flex flex-col md:flex-row justify-evenly items-center'>
            <div className='w-[50%] flex flex-col items-center'>
                <h1 className='flex font-bold'><DotFilledIcon color='red' />{text.page1.skills.titles[0]}</h1>
                <ul className="py-2 text-left">
                    {text.page1.skills.hard[props.index].map((item, j) => (
                        <motion.li
                            {...props.animation}
                            key={`skill-${props.index}-item-${j}`}
                            className="py-1"
                        >
                            <Skill skillKey={`skill-hard-item-${j}`}>
                                <motion.div
                                    className='cursor-help w-[250px] p-2 flex flex-row items-end rounded-[5px] bg-gradient-to-b from-white to-gray-300 hover:text-white hover:bg-gradient-to-b hover:from-[#f0463a] hover:to-[#ff284c] dark:bg-[#242424] dark:from-transparent dark:to-transparent dark:shadow-[0_0_5px_0_black] dark:hover:from-[#f0463a] dark:hover:to-[#ff284c]'
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <IconLeft i={props.index} j={j} />
                                    <h2>{item[0]}</h2>
                                </motion.div>
                                <div className='w-full h-full p-1'>
                                    <div className='flex justify-end items-center'>
                                        <DotFilledIcon color='red' />
                                        <h3 className='w-full text-sm text-center uppercase'>{item[0]}</h3>
                                        <span className='w-[5%]' />
                                    </div>
                                    <div className='w-full h-[1px] bg-white' />
                                    <div className='w-full my-2 flex justify-center items-center'>
                                        <IconLeft i={props.index} j={j} width={50} height={50} />
                                    </div>
                                    <p className='flex-1 flex justify-center items-center p-1 text-xs text-justify'>{item[1]}</p>
                                </div>
                            </Skill>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div className='w-[50%] flex flex-col items-center'>
                <h1 className='flex font-bold'><DotFilledIcon color='royalblue' />{text.page1.skills.titles[1]}</h1>
                <ul className="py-2 text-left">
                    {text.page1.skills.soft.map((item, j) => (
                        <li
                            key={`skill-${props.index}-item-${j}`}
                            className="py-1"
                        >
                            <Skill skillKey={`skill-soft-item-${j}`}>
                                <motion.div
                                    className='cursor-help w-[250px] p-2 flex flex-row items-end rounded-[5px] bg-gradient-to-b from-white to-gray-300 hover:text-white hover:bg-gradient-to-b hover:from-[#516dca] hover:to-[#3054ce] dark:bg-[#242424] dark:from-transparent dark:to-transparent dark:shadow-[0_0_5px_0_black] dark:hover:from-[#516dca] dark:hover:to-[#3054ce]'
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <IconRight j={j} />
                                    <h2>{item[0]}</h2>
                                </motion.div>
                                <div className='w-full h-full p-1'>
                                    <div className='flex justify-end items-center'>
                                        <DotFilledIcon color='royalblue' />
                                        <h3 className='w-full text-sm text-center uppercase'>{item[0]}</h3>
                                    </div>
                                    <div className='w-full h-[1px] bg-white' />
                                    <div className='w-full my-2 flex justify-center items-center'>
                                        <IconRight j={j} width={50} height={50} />
                                    </div>
                                    <p className='p-1 text-xs text-justify'>{item[1]}</p>
                                </div>
                            </Skill>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
}

function Skill(props: { skillKey: string, children: [JSX.Element, JSX.Element] }) {
    return <Tooltip
        tooltipKey={`skill-${props.skillKey}`}
    >
        {props.children}
    </Tooltip>
}

function IconLeft(props: { i: number, j: number, width?: number, height?: number }) {
    const { i, j } = props
    const icons = [
        [
            { src: design, alt: 'design', href: 'https://icons8.com/icon/QVobCUiSKNwK/windows-10-personalization' },
            { src: laptop, alt: 'laptop', href: 'https://icons8.com/icon/l0UsZRTvcGel/laptop-coding' },
            { src: database, alt: 'database', href: 'https://icons8.com/icon/KZHjwwenS7oK/database' },
            { src: cloud, alt: 'cloud', href: 'https://icons8.com/icon/qZ1FibjKOsRJ/upload-to-the-cloud' }
        ],
        [
            { src: photo, alt: 'photo', href: 'https://icons8.com/icon/LbOP2UDmoEY6/photo-editor' },
            { src: laptop, alt: 'laptop', href: 'https://icons8.com/icon/l0UsZRTvcGel/laptop-coding' },
            { src: video, alt: 'video', href: 'https://icons8.com/icon/2TqzNz5iuT1a/video-gallery' },
            { src: store, alt: 'store', href: 'https://icons8.com/icon/rZwnRdJyYqRi/google-play' },
        ],
        [
            { src: diagram, alt: 'diagram', href: 'https://icons8.com/icon/2jHmblEslKYm/flow-chart' },
            { src: laptop, alt: 'laptop', href: 'https://icons8.com/icon/l0UsZRTvcGel/laptop-coding' },
            { src: lab, alt: 'lab', href: 'https://icons8.com/icon/AjHChwtr6ww5/microscope' },
            { src: file, alt: 'file', href: 'https://icons8.com/icon/LKoXsvJgltGD/video-file' },
        ],
        [
            { src: support, alt: 'support', href: 'https://icons8.com/icon/l342AIc0m0qQ/online-support' },
            { src: remote, alt: 'remote', href: 'https://icons8.com/icon/GTUAnLIBADuV/remote-desktop' },
            { src: save, alt: 'save', href: 'https://icons8.com/icon/V1DRq7E9daGm/save-all' },
            { src: clean, alt: 'clean', href: 'https://icons8.com/icon/Xnx8cxDef16O/broom' },
        ]
    ]

    return <img
        className={`w-[${props.width || 30}px] h-[${props.height || 30}px] mr-1`} src={icons[i][j].src} alt={icons[i][j].alt}
        onAuxClick={() => window.open(icons[i][j].href, '_blank', 'noopener noreferrer')}
    />
}

function IconRight(props: { j: number, width?: number, height?: number }) {
    const { j } = props
    const icons = [
        { src: eye, alt: 'eye', href: 'https://icons8.com/icon/QWBYZnd6mql8/eye' },
        { src: medal, alt: 'medal', href: 'https://icons8.com/icon/KFssnxqXHKfA/medal' },
        { src: schedule, alt: 'schedule', href: 'https://icons8.com/icon/13526/schedule' },
        { src: justice, alt: 'justice', href: 'https://icons8.com/icon/12928/scales' }
    ]

    return <img
        className={`w-[${props.width || 30}px] h-[${props.height || 30}px] mr-1`} src={icons[j].src} alt={icons[j].alt}
        onAuxClick={() => window.open(icons[j].href, '_blank', 'noopener noreferrer')}
    />
}