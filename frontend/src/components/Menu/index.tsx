import * as React from 'react'

import Category from '../Category'
import { keygen } from '../../utils/keygen'

type MenuProps = {
  className: string
  data: SanityMenu
}

const Menu: React.FC<MenuProps> = ({ className, data: { categoryList } }) => (
  <div className={className}>
    <div className='print:hidden pt-12 print:pt-6 pb-4 print:pb-6 px-6 print:px-0 md:pt-28 print:md:pt-6 md:pb-12 print:md:pb-6'>
      <h1 className='text-4xl font-bold'>Menu</h1>
    </div>

    {/*
      Use CSS Multi-column:
        • column-fill: auto so columns are filled top-to-bottom then left-to-right
    */}
    <div className='print:columns-3 md:gap-x-8 print:gap-x-8 column-fill-auto'>
      {
        categoryList.map((category) =>
          (
            <Category
              className='my-12 print:my-0 bg-white print:bg-transparent bg-opacity-50 print:bg-opacity-100 rounded-md border print:border-none border-slate-900/8 break-inside-auto'
              data={category}
              key={keygen(category.name.nameEnglish)}
            />
          )
        )
      }
    </div>
  </div>
)

export default Menu
