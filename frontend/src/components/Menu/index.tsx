import * as React from 'react'

import Category from '../Category'
import { keygen } from '../../utils/keygen'
import { validateCategory } from '../../utils/validation'

type MenuProps = {
  className: string
  data: SanityMenu
}

const Menu: React.FC<MenuProps> = ({ className, data: { categoryList } }) => {
  const filteredCategoryList = categoryList.filter(
    (category) => validateCategory(category))

  if (filteredCategoryList.length === 0) return null

  return (
    <div className={className}>
      <div className='pt-12 pb-4 px-6 md:pt-28 md:pb-12'>
        <h1 className='text-4xl font-bold'>Menu</h1>
      </div>
      <div>
        {
          filteredCategoryList.map((category) =>
            <Category
              className='first:mt-6 my-12 bg-white bg-opacity-50 rounded-md border border-slate-900/8'
              data={category}
              key={keygen(category.name.nameEnglish)}
            />
          )
        }
      </div>
    </div>
  )
}

export default Menu
