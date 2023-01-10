import * as React from 'react'

import Name from '../Name'
import Item from '../Item'
import { keygen } from '../../utils/keygen'

type CategoryProps = {
  className: string
  data: GroupSanityItem
}

const Category: React.FC<CategoryProps> = ({ className, data }) => {
  const itemList: SanityItem[] = data.nodes
  if (itemList.length === 0) {
    return null
  }

  const category: SanityCategory = itemList[0].category

  return (
    <div className={className}>
      <div className='relative flex items-center'>
        <div className='absolute inset-x-0 bottom-0 h-px bg-slate-900/10'></div>
        <Name
          className='text-2xl font-medium flex-1 py-7 px-8'
          data={category.name}
        />
      </div>
      <div className='relative flex-row items-center px-8'>
        {
          itemList.map((item) =>
            <Item
              className='first:mt-0 last:mb-0 relative'
              data={item}
              key={keygen(item.name.nameEnglish)}
            />
          )
        }
      </div>
    </div>
  )
}

export default Category