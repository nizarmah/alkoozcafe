import * as React from 'react'
import { keygen } from '../../utils/keygen'
import Category from '../Category'

type MenuProps = {
  className: string
  data: AllSanityItem
}

type CategoryType = {
  category: SanityCategory
  itemGroup: GroupSanityItem
}

const Menu: React.FC<MenuProps> = ({ className, data }) => {
  const categoryList = data.group.reduce((arr, itemGroup) => {
    const category = itemGroup.nodes[0]?.category
    if (category) {
      arr.push({ category, itemGroup })
    }

    return arr
  }, [] as CategoryType[])

  categoryList.sort((a, b) =>
    a.category.priority - b.category.priority)

  return (
    <div className={className}>
      <div className='pt-12 pb-4 px-6 md:pt-28 md:pb-12'>
        <h1 className='text-4xl font-bold'>Menu</h1>
      </div>
      <div>
        {
          categoryList.map(({ category, itemGroup }) =>
            <Category
              className='first:mt-6 my-12 bg-white bg-opacity-50 rounded-md border border-slate-900/8'
              data={itemGroup}
              key={keygen(category.name.nameEnglish)}
            />
          )
        }
      </div>
    </div>
  )
}

export default Menu
