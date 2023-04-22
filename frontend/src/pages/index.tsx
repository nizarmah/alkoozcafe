import * as React from 'react'
import { HeadFC, Link } from 'gatsby'

import Seo from '../components/Seo'
import Background from '../components/Background'
import Header from '../components/Header'

type IndexPageProps = {}

const IndexPage: React.FC<IndexPageProps> = ({}) => {
  const baseUrl = window.location.href
  const pdfMenuUrl = new URL('/Al Kooz Cafe — Menu.pdf', baseUrl)

  return (
    <main className='text-slate-900'>
      <Seo />

      <iframe className='w-screen h-screen' frameBorder={0} src={`https://docs.google.com/viewer?embedded=true&url=${pdfMenuUrl}`}>
        <Background />
        <div className='px-2 lg:px-24 lg:px-16 md:px-8'>
          <Header className='w-full' />
          <div className='w-full xl:w-2/3 xl:px-12 lg:w-5/6 lg:px-6'>
            <div className='pt-12 pb-4 px-6 md:pt-28 md:pb-12'>
              <h1 className='text-4xl font-bold mb-16'>Something went wrong</h1>
              <p>Looks like your browser cannot display the Menu</p>
              <Link to='/Al%20Kooz%20Cafe%20—%20Menu.pdf' className='text-md font-normal'>Click here to download the Menu</Link>
            </div>
          </div>
        </div>
      </iframe>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Al Kooz Café</title>
