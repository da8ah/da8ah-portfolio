import { LangContext } from '@/context/LangProvider'
import { ThemeContext } from '@/context/ThemeProvider'
import { useContext } from 'react'
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

export default function App() {
  const { themeMode, toggleThemeMode } = useContext(ThemeContext)
  const { lang, changeLang } = useContext(LangContext)
  const className = 'relative snap-always snap-center w-full h-screen flex flex-col justify-center items-center'
  return (
    <>
      <div className='z-[100] top-5 left-10 fixed flex flex-row justify-center items-center'>
        <button
          type='button'
          title='theme'
          className='w-[50px] h-[50px] bg-black text-white rounded-[80px] uppercase'
          onClick={() => toggleThemeMode()}
        >{themeMode}</button>
        <button
          type='button'
          title='lang'
          className='w-[50px] h-[25px] -ml-1 bg-black text-white rounded-[0_10px_10px_0] uppercase'
          onClick={() => changeLang(lang === 'es' ? 'en' : 'es')}
        >{lang}</button>
      </div>
      <Page1 className={className} />
      <Page2 className={className} />
      <Page3 className={className} />
    </>
  )
}
