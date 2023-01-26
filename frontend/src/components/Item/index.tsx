import * as React from 'react'

import Name from '../Name'
import Price from '../Price'
import { keygen } from '../../utils/keygen'

type ItemProps = {
  className: string
  data: SanityItem
}

const Item: React.FC<ItemProps> = ({ className, data: { name, priceList } }) =>
  (
    <div className={className}>
      <div className='relative flex flex-col items-center'>
        <Name
          className='w-full text-lg print:text-lg font-light print:font-semibold flex-1 mt-4 print:mt-0 mb-1 print:mb-0'
          data={name}
        />
        <div className='w-full flex mt-1 print:mt-0 mb-5 print:mb-0'>
          {
            priceList.map((price) =>
              (
                <Price
                  data={price}
                  key={keygen(price.amount.toString())}
                />
              )
            )
          }
        </div>
      </div>
      <div className='print:hidden absolute inset-x-0 bottom-0 h-px bg-slate-900/5'></div>
    </div>
  )

export default Item
