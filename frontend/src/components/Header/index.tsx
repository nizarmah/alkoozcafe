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
            <a className='relative mr-auto flex mr-8 items-center ' href='/'>
              <Logo className='mx-4 h-8 print:h-6 top-[20%] fill-slate-900' />
              <span className='text-2xl print:text-2xl block flex-1'>Al Kooz Café & Restaurant</span>
            </a>

            <div className='relative flex'>
              <span className='relative mr-auto flex items-center print:text-base block flex-1'>
                Cedar's Road, Barouk, Mount Lebanon
                &nbsp;—&nbsp;&nbsp;
                <a href='tel:+96181612357'>81 612 357</a>
                &nbsp;&nbsp;—&nbsp;&nbsp;
                <a href='tel:+96171750416'>71 750 416</a>
              </span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header