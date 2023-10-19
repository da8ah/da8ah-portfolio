import Configuration from '@/components/Configuration'
import Connect from '@/components/Connect'
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

export default function App() {
  const pagesClassName = 'relative w-full h-screen flex flex-col justify-center items-center'
  return (
    <div className='relative box-border w-full flex flex-col justify-center items-center'>
      <Configuration />
      <Connect />
      <Page1 className={pagesClassName} />
      <Page2 className={pagesClassName} />
      <Page3 className={pagesClassName} />
    </div>
  )
}
