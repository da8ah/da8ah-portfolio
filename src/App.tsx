import './App.css'
import Spinner from '@/layouts/Spinner'
import Page from './pages/Page'

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

  return (
    <>
      {pages.map((page, index) => {
        return <Page key={`page-${index}`}>
          <div className={`${(index === 0 || index === pages.length - 1) ? 'snap-always ' : ''}snap-center w-full flex flex-col justify-center items-center`}>
            <Spinner />
            <h2 className="text-center text-3xl font-bold underline">{page.title}</h2>
          </div>
        </Page>
      })}
    </>
  )
}
