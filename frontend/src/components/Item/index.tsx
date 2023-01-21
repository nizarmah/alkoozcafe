import * as React from 'react'

import Name from '../Name'
import Price from '../Price'
import { keygen } from '../../utils/keygen'
import { validatePrice } from '../../utils/validation'

type ItemProps = {
  className: string
  data: SanityItem
}

const Item: React.FC<ItemProps> = ({ className, data: { name, priceList } }) => {
  const filteredPriceList = priceList.filter(
    (price) => validatePrice(price))

  if (filteredPriceList.length === 0) return null

  return (
    <div className={className}>
      <div className='relative flex flex-col items-center'>
        <Name
          className='w-full text-lg font-light flex-1 mt-4 mb-1'
          data={name}
        />
        <div className='w-full flex mt-1 mb-5'>
          {
            filteredPriceList.map((price) =>
              <Price
                data={price}
                key={keygen(price.amount.toString())}
              />
            )
          }
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 h-px bg-slate-900/5'></div>
    </div>
  )
}

export default Item
