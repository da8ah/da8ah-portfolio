import styles from '@/assets/animations.module.css'
import Logo from '@/components/Logo'
import Tooltip from '@/components/Tooltip'
import { MotionProps, motion } from 'framer-motion'
import azure from '/tooling/azure.svg'
import bash from '/tooling/bash.svg'
import expo from '/tooling/expo.svg'
import figma from '/tooling/figma.svg'
import git from '/tooling/git.svg'
import java from '/tooling/java.svg'
import js from '/tooling/javascript.svg'
import nodejs from '/tooling/nodejs.svg'
import python from '/tooling/python.svg'
import qwik from '/tooling/qwik.svg'
import react from '/tooling/react.svg'
import spiro from '/tooling/spiro.svg'
import tailwind from '/tooling/tailwindcss.svg'
import ts from '/tooling/typescript.svg'
import ubuntu from '/tooling/ubuntu.svg'
import vite from '/tooling/vite.svg'
import vscode from '/tooling/vscode.svg'
import gimp from '/tooling/gimp.svg'
import google from '/tooling/google.svg'
import zustand from '/tooling/zustand.ico'
import viewer from '/tooling/icons8-teamviewer-96.png'
import office from '/tooling/icons8-microsoft-office-2019-96.png'
import canva from '/tooling/icons8-canva-96.png'
import ccleaner from '/tooling/icons8-ccleaner-96.png'
import anydesk from '/tooling/icons8-anydesk-96.png'
import malware from '/tooling/icons8-malwarebytes-96.png'
import windows from '/tooling/icons8-windows-96.png'

export default function Toolkit(props: { index: number, animation: MotionProps }) {

    const logos = [
        [
            { src: vite, alt: 'vite', href: 'https://github.com/vitejs/vite/blob/main/docs/images/vite.svg' },
            { src: ts, alt: 'typescript' },
            { src: nodejs, alt: 'nodejs' },
            { src: figma, alt: 'figma' },
            { src: qwik, alt: 'qwik' },
            { src: react, alt: 'react', href: 'https://github.com/vitejs/vite/blob/main/docs/images/react.svg' },
            { src: tailwind, alt: 'tailwind' },
            { src: azure, alt: 'azure' }
        ],
        [
            { src: vite, alt: 'vite' },
            { src: ts, alt: 'typescript' },
            { src: nodejs, alt: 'nodejs' },
            { src: figma, alt: 'figma' },
            { src: react, alt: 'react', href: 'https://github.com/vitejs/vite/blob/main/docs/images/react.svg' },
            { src: spiro, alt: 'spiro' },
            { src: expo, alt: 'expo' },
            { src: zustand, alt: 'zustand' }
        ],
        [
            { src: ubuntu, alt: 'ubuntu' },
            { src: ts, alt: 'typescript' },
            { src: js, alt: 'javascript' },
            { src: java, alt: 'java' },
            { src: python, alt: 'python' },
            { src: bash, alt: 'bash' },
            { src: git, alt: 'git' },
            { src: vscode, alt: 'vscode' },
        ],
        [
            { src: office, alt: 'office', href: 'https://icons8.com/icon/vIbsCQXkSp6l/microsoft-office-2019' },
            { src: google, alt: 'google', href: 'https://github.com/devicons/devicon/blob/master/icons/google/google-original.svg' },
            { src: canva, alt: 'canva', href: 'https://icons8.com/icon/iWw83PVcBpLw/canva' },
            // { src: anydesk, alt: 'anydesk', href: 'https://icons8.com/icon/cDG2YNX6xhA6/anydesk' },
            { src: viewer, alt: 'viewer', href: 'https://icons8.com/icon/bClIoRlXM2zu/teamviewer' },
            { src: ccleaner, alt: 'ccleaner', href: 'https://icons8.com/icon/36508/ccleaner' },
            { src: malware, alt: 'malware', href: 'https://icons8.com/icon/nVOD4a60D2CM/malwarebytes' },
            { src: gimp, alt: 'gimp', href: 'https://github.com/devicons/devicon/blob/master/icons/gimp/gimp-original.svg' },
            { src: windows, alt: 'windows', href: 'https://icons8.com/icon/gXoJoyTtYXFg/windows-10' }
        ]
    ]

    return <>
        <Tooltip
            key='toolkit'
            align='center'
            side='top'
        >
            <div className='cursor-help absolute z-[1] rounded-full w-[250px] h-[250px]' />
            <div className='flex flex-wrap justify-center items-center'>
                {logos[props.index].map((logo) => (
                    <img
                        className='w-[30px] h-[30px] mr-1' src={logo.src} alt={logo.alt}
                        onAuxClick={() => window.open(logo.href, '_blank', 'noopener noreferrer')}
                    />
                ))}
            </div>
        </Tooltip>
        <motion.div
            className='box-content z-0 w-[250px] h-[250px] relative flex justify-center items-center'
            {...props.animation}
        >
            <motion.div
                className='absolute w-[95%] h-[95%] flex justify-center items-center'
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                }}
            >
                {logos[props.index].map((logo, index) => {
                    return <Logo
                        key={`logo-${index}`}
                        style={{ '--i': index } as React.CSSProperties}
                        duration={30}
                        className={styles.SpinnerItem}
                        img={{
                            ...logo,
                            className: styles.SpinnerImage,
                            style: { '--i': index } as React.CSSProperties
                        }}
                    />
                })}
            </motion.div>
        </motion.div>
    </>
}