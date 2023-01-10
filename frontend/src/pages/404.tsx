import * as React from 'react'
import { Link, HeadFC } from 'gatsby'

import Background from '../components/Background'
import Header from '../components/Header'

const NotFoundPage: React.FC = () => {
  return (
    <main className='text-slate-900'>
      <Background />
      <div className='px-2 lg:px-24 lg:px-16 md:px-8'>
        <Header />
        <div className='w-full xl:w-2/3 xl:px-12 lg:w-5/6 lg:px-6'>
          <div className='pt-12 pb-4 px-6 md:pt-28 md:pb-12'>
            <h1 className='text-4xl font-bold mb-16'>Page Not Found</h1>
            <Link to='/' className='text-md font-normal'>Go Home</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Al Kooz Café</title>
