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
      <Page1 className={className} text={isES ? textES : textEn} />
      <Page2 className={className} />
      <Page3 className={className} />
      <button
        type='button'
        title='lang'
        className='z-100 fixed top-5 left-5 w-[100px] h-[30px] bg-black text-white rounded-[50px]'
        onClick={() => toggleLanguage(isES => !isES)}
      >Language</button>
    </>
  )
}
