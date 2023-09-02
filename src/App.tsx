import Configuration from '@/components/Configuration'
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

export default function App() {
  const pagesClassName = 'relative snap-always snap-center w-full h-screen flex flex-col justify-center items-center'
  return (
    <div className='relative w-full flex flex-col justify-center items-center'>
      <Configuration />
      <Page1 className={pagesClassName} />
      <Page2 className={pagesClassName} />
      <Page3 className={pagesClassName} />
    </div>
  )
}
