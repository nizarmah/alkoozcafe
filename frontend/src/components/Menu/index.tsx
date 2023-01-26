import * as React from 'react'

import Category from '../Category'
import { keygen } from '../../utils/keygen'

type MenuProps = {
  className: string
  data: SanityMenu
}

const Menu: React.FC<MenuProps> = ({ className, data: { categoryList } }) => {
  const ROW_HEIGHT = 600

  const onCategoryLoad = React.useCallback(
    (categoryElement: HTMLDivElement, itemsListElement: HTMLDivElement) => {
      const rowSpan = Math.ceil(itemsListElement.clientHeight / ROW_HEIGHT)

      categoryElement.style.gridRowEnd = `span ${rowSpan}`
    }, [ROW_HEIGHT])

  return (
    <div className={className}>
      <div className='print:hidden pt-12 print:pt-6 pb-4 print:pb-6 px-6 print:px-0 md:pt-28 print:md:pt-6 md:pb-12 print:md:pb-6'>
        <h1 className='text-4xl font-bold'>Menu</h1>
      </div>
      <div className={`grid grid-cols-1 print:grid-cols-3 auto-rows-auto print:auto-rows-[${ROW_HEIGHT}px] print:gap-x-8 print:gap-y-8 print:pt-0`}>
        {
          categoryList.map((category) =>
            (
              <Category
                className='col-span-1 first:mt-6 print:first:mt-2 my-12 print:my-0 print:mt-2 bg-white print:bg-transparent bg-opacity-50 print:bg-opacity-100 rounded-md border print:border-none border-slate-900/8 break-inside-avoid'
                data={category}
                key={keygen(category.name.nameEnglish)}
                onLoad={onCategoryLoad}
              />
            )
          )
        }
      </div>
    </div>
  )
}

export default Menu
