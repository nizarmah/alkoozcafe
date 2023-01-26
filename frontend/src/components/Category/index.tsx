import * as React from 'react'

import Name from '../Name'
import Item from '../Item'
import { keygen } from '../../utils/keygen'

type CategoryProps = {
  className: string
  data: SanityCategory
  onLoad?: (
    categoryElement: HTMLDivElement,
    itemListElement: HTMLDivElement
  ) => void
}

const Category: React.FC<CategoryProps> = ({
  className,
  data: { name, itemList },
  onLoad = () => {}
}) => {
  const categoryRef = React.useCallback((element: HTMLDivElement) =>
    onLoad(element, element.lastElementChild as HTMLDivElement), [])

  return (
    <div ref={categoryRef} className={className}>
      <div className='relative flex items-center print:mb-2'>
        <div className='absolute inset-x-0 bottom-0 h-px bg-slate-900/10'></div>
        <Name
          className='text-2xl print:text-2xl font-medium flex-1 py-7 print:py-2 px-8 print:px-0'
          data={name}
        />
      </div>
      <div className='relative flex-row items-center px-12 print:px-1'>
        {
          itemList.map((item) =>
            (
              <Item
                className='first:mt-0 last:mb-0 relative'
                data={item}
                key={keygen(item.name.nameEnglish)}
              />
            )
          )
        }
      </div>
    </div>
  )
}

export default Category
