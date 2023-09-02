import { LangContext } from '@/context/LangProvider'
import { ThemeContext } from '@/context/ThemeProvider'
import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

export default function App() {
  const { themeMode, toggleThemeMode } = useContext(ThemeContext)
  const { lang, changeLang } = useContext(LangContext)
  const [cycle, toggleCycle] = useState<0 | 1>()

  useEffect(() => { }, [themeMode])

  const pagesClassName = 'relative snap-always snap-center w-full h-screen flex flex-col justify-center items-center'
  return (
    <div className='relative w-full flex flex-col justify-center items-center'>
      <div className='z-[100] top-5 left-10 fixed flex flex-row justify-center items-center'>
        <motion.span
          key={cycle}
          className='fixed top-5 left-10 w-[50px] h-[50px] rounded-full bg-white'
          animate={{
            display: ['block', 'none'],
            transform: ['scale(0)', 'scale(100)', 'scale(0)']
          }}
          transition={{
            duration: 1
          }}
        />
        <button
          type='button'
          title='theme'
          className='w-[50px] h-[50px] bg-white dark:bg-black text-black dark:text-white rounded-[80px] uppercase'
          onClick={() => {
            toggleCycle(prev => prev === 0 ? 1 : 0)
            setTimeout(() => {
              toggleThemeMode()
            }, 200)
          }}
        >{themeMode}</button>
        <button
          type='button'
          title='lang'
          className='-z-[1] w-[50px] h-[25px] -ml-1 bg-black text-white rounded-[0_10px_10px_0] uppercase'
          onClick={() => changeLang(lang === 'es' ? 'en' : 'es')}
        >{lang}</button>
      </div>
      <Page1 className={pagesClassName} />
      <Page2 className={pagesClassName} />
      <Page3 className={pagesClassName} />
    </div>
  )
}
