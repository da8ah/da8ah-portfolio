import Tooltip from "@/components/Tooltip";
import { LangContext } from "@/context/LangProvider";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { MotionProps, motion } from 'framer-motion';
import { useContext } from "react";
import clean from '/page1/skills/hard/icons8-clean-96.png';
import database from '/page1/skills/hard/icons8-database-96.png';
import design from '/page1/skills/hard/icons8-design-96.png';
import diagram from '/page1/skills/hard/icons8-diagram-96.png';
import lab from '/page1/skills/hard/icons8-lab-96.png';
import laptop from '/page1/skills/hard/icons8-laptop-coding-96.png';
import support from '/page1/skills/hard/icons8-online-support-96.png';
import photo from '/page1/skills/hard/icons8-photo-editor-96.png';
import store from '/page1/skills/hard/icons8-play-store-96.png';
import remote from '/page1/skills/hard/icons8-remote-desktop-96.png';
import save from '/page1/skills/hard/icons8-save-all-96.png';
import cloud from '/page1/skills/hard/icons8-upload-to-the-cloud-96.png';
import file from '/page1/skills/hard/icons8-video-file-96.png';
import video from '/page1/skills/hard/icons8-video-gallery-96.png';
import eye from '/page1/skills/soft/icons8-eye-64.png';
import justice from '/page1/skills/soft/icons8-justice-96.png';
import medal from '/page1/skills/soft/icons8-medal-96.png';
import schedule from '/page1/skills/soft/icons8-schedule-96.png';

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
        className='w-[30px] h-[30px] mr-1' src={icons[i][j].src} alt={icons[i][j].alt}
        onAuxClick={() => window.open(icons[i][j].href, '_blank', 'noopener noreferrer')}
    />
}

function IconRight(props: { j: number }) {
    const { j } = props
    const icons = [
        { src: eye, alt: 'eye', href: 'https://icons8.com/icon/QWBYZnd6mql8/eye' },
        { src: medal, alt: 'medal', href: 'https://icons8.com/icon/KFssnxqXHKfA/medal' },
        { src: schedule, alt: 'schedule', href: 'https://icons8.com/icon/13526/schedule' },
        { src: justice, alt: 'justice', href: 'https://icons8.com/icon/12928/scales' }
    ]

    return <img
        className='w-[30px] h-[30px] mr-1' src={icons[j].src} alt={icons[j].alt}
        onAuxClick={() => window.open(icons[j].href, '_blank', 'noopener noreferrer')}
    />
}