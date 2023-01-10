import * as React from 'react'

type PriceProps = {
  data: SanityPrice
}

const Price: React.FC<PriceProps> = ({ data }) => {
  const amount: number = data.amount
  const currency: SanityCurrency = data.currency

  let price: string = ''
  switch (currency) {
    case 'usd':
      price = `$${amount}`
      break

    case 'lbp':
      price = `${amount} L.L.`
      break
  }

  return (
    <span className='text-md px-6 mb-1 mr-6 bg-green-200 text-green-800 rounded-full'>{price}</span>
  )
}

export default Price
