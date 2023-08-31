import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

export default function App() {
  const className = 'relative snap-always snap-center w-full h-screen flex flex-col justify-center items-center'
  return (
    <>
      <Page1 className={className} />
      <Page2 className={className} />
      <Page3 className={className} />
    </>
  )
}
