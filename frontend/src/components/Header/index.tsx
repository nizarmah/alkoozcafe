import * as React from 'react'

import Logo from '../Logo'

const Header: React.FC = () => {
  return (
    <header className='relative z-50 w-full flex-none text-sm font-semibold leading-6'>
      <nav className='mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
        <div className='relative flex items-center py-7'>
          <div className='absolute inset-x-0 bottom-0 h-px bg-slate-900/10'></div>
          <a className='relative mr-auto flex grow items-center ' href='/'>
            <Logo className='mx-4 h-8 top-[20%] fill-slate-900' />
            <span className='text-2xl block flex-1'>Al Kooz Café</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header