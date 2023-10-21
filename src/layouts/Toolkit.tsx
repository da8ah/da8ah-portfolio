import Logo from '@/components/Logo'
import Tooltip from '@/components/Tooltip'
import { LangContext } from '@/context/LangProvider'
import { MotionProps, motion } from 'framer-motion'
import { useContext } from 'react'
import '@/assets/animations.css'
const store = '/page1/skills/hard/icons8-play-store-96.png'
const android = '/tooling/android.svg'
const azure = '/tooling/azure.svg'
const bash = '/tooling/bash.svg'
const cplusplus = '/tooling/cplusplus.svg'
const css3 = '/tooling/css3.svg'
const expo = '/tooling/expo.svg'
const express = '/tooling/express.svg'
const figma = '/tooling/figma.svg'
const gimp = '/tooling/gimp.svg'
const git = '/tooling/git.svg'
const google = '/tooling/google.svg'
const html5 = '/tooling/html5.svg'
const anydesk = '/tooling/icons8-anydesk-96.png'
const canva = '/tooling/icons8-canva-96.png'
const ccleaner = '/tooling/icons8-ccleaner-96.png'
const malware = '/tooling/icons8-malwarebytes-96.png'
const office = '/tooling/icons8-microsoft-office-2019-96.png'
const viewer = '/tooling/icons8-teamviewer-96.png'
const windows = '/tooling/icons8-windows-96.png'
const java = '/tooling/java.svg'
const js = '/tooling/javascript.svg'
const mongodb = '/tooling/mongodb.svg'
const mysql = '/tooling/mysql.svg'
const nextjs = '/tooling/nextjs.svg'
const nodejs = '/tooling/nodejs.svg'
const python = '/tooling/python.svg'
const qwik = '/tooling/qwik.svg'
const react = '/tooling/react.svg'
const spiro = '/tooling/spiro.svg'
const tailwind = '/tooling/tailwindcss.svg'
const ts = '/tooling/typescript.svg'
const ubuntu = '/tooling/ubuntu.svg'
const vite = '/tooling/vite.svg'
const vscode = '/tooling/vscode.svg'
const zustand = '/tooling/zustand.ico'


export default function Toolkit(props: { index: number, animation: MotionProps }) {

    const logos = [
        [
            { src: vite, alt: 'vite', href: 'https://github.com/vitejs/vite/blob/main/docs/images/vite.svg' },
            { src: ts, alt: 'typescript', href: 'https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg' },
            { src: nodejs, alt: 'nodejs', href: 'https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg' },
            { src: figma, alt: 'figma', href: 'https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg' },
            { src: qwik, alt: 'qwik', href: 'https://github.com/BuilderIO/qwik/blob/main/packages/docs/public/logos/qwik-logo.svg' },
            { src: react, alt: 'react', href: 'https://github.com/vitejs/vite/blob/main/docs/images/react.svg' },
            { src: tailwind, alt: 'tailwind', href: 'https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg' },
            { src: azure, alt: 'azure', href: 'https://github.com/devicons/devicon/blob/master/icons/azure/azure-original.svg' }
        ],
        [
            { src: android, alt: 'android', href: 'https://github.com/devicons/devicon/blob/master/icons/android/android-original.svg' },
            { src: ts, alt: 'typescript', href: 'https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg' },
            { src: nodejs, alt: 'nodejs', href: 'https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg' },
            { src: figma, alt: 'figma', href: 'https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg' },
            { src: react, alt: 'native', href: 'https://github.com/vitejs/vite/blob/main/docs/images/react.svg' },
            { src: spiro, alt: 'navigation', href: 'https://reactnavigation.org/img/spiro.svg' },
            { src: expo, alt: 'expo', href: 'https://expo.dev/brand' },
            { src: zustand, alt: 'zustand', href: 'https://github.com/pmndrs/zustand/blob/main/examples/demo/public/favicon.ico' }
        ],
        [
            { src: ubuntu, alt: 'ubuntu', href: 'https://github.com/devicons/devicon/blob/master/icons/ubuntu/ubuntu-plain.svg' },
            { src: ts, alt: 'typescript', href: 'https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg' },
            { src: js, alt: 'javascript', href: 'https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg' },
            { src: java, alt: 'java', href: 'https://github.com/devicons/devicon/blob/master/icons/java/java-original.svg' },
            { src: python, alt: 'python', href: 'https://github.com/devicons/devicon/blob/master/icons/python/python-original.svg' },
            { src: bash, alt: 'bash', href: 'https://github.com/devicons/devicon/blob/master/icons/bash/bash-original.svg' },
            { src: git, alt: 'git', href: 'https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg' },
            { src: vscode, alt: 'vscode', href: 'https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg' },
        ],
        [
            { src: office, alt: 'office', href: 'https://icons8.com/icon/vIbsCQXkSp6l/microsoft-office-2019' },
            { src: google, alt: 'google', href: 'https://github.com/devicons/devicon/blob/master/icons/google/google-original.svg' },
            { src: canva, alt: 'canva', href: 'https://icons8.com/icon/iWw83PVcBpLw/canva' },
            { src: viewer, alt: 'team viewer', href: 'https://icons8.com/icon/bClIoRlXM2zu/teamviewer' },
            { src: ccleaner, alt: 'ccleaner', href: 'https://icons8.com/icon/36508/ccleaner' },
            { src: malware, alt: 'malware', href: 'https://icons8.com/icon/nVOD4a60D2CM/malwarebytes' },
            { src: gimp, alt: 'gimp', href: 'https://github.com/devicons/devicon/blob/master/icons/gimp/gimp-original.svg' },
            { src: windows, alt: 'windows', href: 'https://icons8.com/icon/gXoJoyTtYXFg/windows-10' }
        ]
    ]

    return <>
        <Tooltip
            tooltipKey='toolkit'
            align='center'
            side='top'
        >
            <div className='cursor-help absolute z-[1] rounded-full w-[250px] h-[250px]' />
            <div className='w-full h-full p-1 flex flex-col justify-evenly items-center'>
                <Modal index={props.index} logos={logos[props.index]} />
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
                        className='SpinnerItem'
                        img={{
                            ...logo,
                            className: 'SpinnerImage',
                            style: { '--i': index } as React.CSSProperties
                        }}
                    />
                })}
            </motion.div>
        </motion.div>
    </>
}

function Modal(props: { index: number, logos: { src: string, alt: string, href: string }[] }) {
    const { text } = useContext(LangContext)

    const logos = [
        [
            { src: html5, alt: 'html5', href: 'https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg' },
            { src: css3, alt: 'css3', href: 'https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg' },
            { src: js, alt: 'javascript', href: 'https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg' },
            { src: mongodb, alt: 'mongodb', href: 'https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg' },
            { src: mysql, alt: 'mysql', href: 'https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original.svg' },
            { src: express, alt: 'express', href: 'https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg' },
            { src: nextjs, alt: 'nextjs', href: 'https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original.svg' },
        ],
        [
            { src: azure, alt: 'azure', href: 'https://github.com/devicons/devicon/blob/master/icons/azure/azure-original.svg' },
            { src: express, alt: 'express', href: 'https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg' },
            { src: nextjs, alt: 'nextjs', href: 'https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original.svg' },
            { src: mongodb, alt: 'mongodb', href: 'https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg' },
            { src: mysql, alt: 'mysql', href: 'https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original.svg' },
            { src: store, alt: 'play store', href: 'https://icons8.com/icon/rZwnRdJyYqRi/google-play' },
        ],
        [
            { src: windows, alt: 'windows', href: 'https://icons8.com/icon/gXoJoyTtYXFg/windows-10' },
            { src: cplusplus, alt: 'c++', href: 'https://github.com/devicons/devicon/blob/master/icons/cplusplus/cplusplus-original.svg' }
        ],
        [
            { src: anydesk, alt: 'anydesk', href: 'https://icons8.com/icon/cDG2YNX6xhA6/anydesk' },
            { src: ubuntu, alt: 'ubuntu', href: 'https://github.com/devicons/devicon/blob/master/icons/ubuntu/ubuntu-plain.svg' },
        ]
    ]
    const merged = [...props.logos, ...logos[props.index]]

    const indexes = [
        [[8, 9, 10], [4, 5, 6, 3, 0], [1, 2, 13, 14], [7, 11, 12]],
        [[4, 0], [6, 5, 7, 3], [1, 2, 9, 10], [13, 8, 11, 12]],
        [[2, 1, 4, 3, 9], [8, 0, 5, 6, 7]],
        [[7, 0, 1, 2, 6], [3, 8], [9, 4, 5]]
    ]

    return <>
        {text.page1.toolkits[props.index].map((title: string, i: number) => (
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='w-full text-xs text-left italic capitalize'>{title}</h1>
                <div className='w-full flex justify-start items-center'>
                    {indexes[props.index][i].map((index) => (
                        <img
                            className='w-[30px] h-[30px] mr-1' src={merged[index].src} alt={merged[index].alt} title={merged[index].alt}
                            onAuxClick={() => window.open(merged[index].href, '_blank', 'noopener noreferrer')}
                        />
                    ))}
                </div>
            </div>
        ))}
    </>
}