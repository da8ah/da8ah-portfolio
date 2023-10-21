import { LangContext } from '@/context/LangProvider'
import { ThemeContext } from '@/context/ThemeProvider'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { useContext, useState } from 'react'

export default function Configuration() {
    const { themeMode, toggleThemeMode } = useContext(ThemeContext)
    const { lang, changeLang } = useContext(LangContext)
    const [cycle, toggleCycle] = useState<0 | 1>()

    return <div className='z-[100] top-1 left-1 lg:top-5 lg:left-10 fixed flex flex-row justify-center items-center'>
        {cycle !== undefined && <motion.span
            key={cycle}
            className='cursor-pointer fixed top-5 left-10 w-[50px] h-[50px] rounded-full bg-white bg-opacity-90'
            animate={{
                display: ['block', 'none'],
                transform: ['scale(0)', 'scale(100)', 'scale(0)']
            }}
            transition={{
                duration: 1
            }}
        />}
        <motion.button
            key={`conf-${cycle}`}
            type='button'
            className='w-[50px] h-[50px] rounded-[80px] dark:shadow-[0_0_5px_0_black] text-white bg-[#242424] flex justify-center items-center'
            whileHover={{ rotate: 360, transition: { duration: 2 } }}
            onClick={() => {
                toggleCycle(prev => prev === 0 ? 1 : 0)
                setTimeout(() => {
                    toggleThemeMode()
                }, 200)
            }}
        >{themeMode === 'dark' ? <SunIcon height={30} width={30} /> : <MoonIcon height={30} width={30} />}</motion.button>
        <motion.button
            type='button'
            className='-z-[1] w-[50px] h-[25px] font-keania -ml-1 dark:bg-white dark:text-black dark:shadow-[0_0_5px_0_white] text-white bg-[#242424] rounded-[0_10px_10px_0] uppercase'
            whileHover={{ scale: 1.1 }}
            onClick={() => changeLang(lang === 'es' ? 'en' : 'es')}
        >{lang}</motion.button>
    </div>
}