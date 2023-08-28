import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


export default function App() {
  return (
    <>
      <div className='w-full flex flex-row' style={{ display: 'flex' }}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2 className="text-center text-3xl font-bold underline">Hello World!</h2>
    </>
  )
}
