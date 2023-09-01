import textEn from '@/assets/en.text.json'
import textES from '@/assets/es.text.json'
import { useState } from 'react'
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

export default function App() {
  const [isES, toggleLanguage] = useState(true)
  const className = 'relative snap-always snap-center w-full h-screen flex flex-col justify-center items-center'
  return (
    <>
      <button
        type='button'
        title='lang'
        className='z-[100] fixed top-5 left-10 w-[50px] h-[50px] bg-black text-white rounded-[80px]'
        onClick={() => toggleLanguage(isES => !isES)}
      >{isES ? "ES" : "EN"}</button>
      <Page1 className={className} text={isES ? textES : textEn} />
      <Page2 className={className} />
      <Page3 className={className} />
    </>
  )
}
