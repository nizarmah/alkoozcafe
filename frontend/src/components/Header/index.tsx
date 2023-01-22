import * as React from 'react'

import Logo from '../Logo'

type HeaderProps = {
  className: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <header className='relative z-50 w-full flex-none text-sm font-semibold leading-6'>
        <nav className='mx-auto max-w-container px-4 sm:px-6 lg:px-8 print:px-0'>
          <div className='relative flex items-center py-7'>
            <div className='absolute inset-x-0 bottom-0 h-px bg-slate-900/10'></div>
            <a className='relative mr-auto flex grow items-center ' href='/'>
              <Logo className='mx-4 h-8 print:h-4 top-[20%] fill-slate-900' />
              <span className='text-2xl print:text-base block flex-1'>Al Kooz Café</span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header