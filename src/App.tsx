import reactLogo from '@/assets/react.svg'
import './App.css'
import Logo, { LogoProps } from "./components/Logo"
import Spiner from './layouts/Spiner'
import Page from './pages/Page'
import viteLogo from '/vite.svg'


export default function App() {

  const pages = [
    {
      title: 'Page 1'
    },
    {
      title: 'Page 2'
    },
    {
      title: 'Page 3'
    }
  ]

  const logos: Omit<LogoProps, 'style'>[] = [
    {
      src: viteLogo,
      href: 'https://vitejs.dev',
      className: 'logo',
      alt: 'Vite logo'
    },
    {
      src: reactLogo,
      href: 'https://react.dev',
      className: 'logo react',
      alt: 'React logo'
    }
  ]

  return (
    <>
      {pages.map((page, index) => {
        return <Page key={`page-${index}`}>
          <div className={`${(index === 0 || index === pages.length - 1) ? 'snap-always ' : ''}snap-center w-full flex flex-col justify-center items-center`}>
            <div className='flex flex-row justify-center items-center'>
              {logos.map((logo, index) => {
                return <Logo {...logo} key={`logo-${index}`} style={{ [`--i` as never]: index }} />
              })}
            </div>
            <Spiner />
            <h1>Hello World!</h1>
            <h2 className="text-center text-3xl font-bold underline">{page.title}</h2>
          </div>
        </Page>
      })}
    </>
  )
}
