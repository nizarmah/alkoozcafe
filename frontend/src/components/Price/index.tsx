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
    <span className='text-base print:text-lg print:font-bold px-6 print:px-0 mb-1 mr-6 bg-green-200 print:bg-transparent text-green-800 print:text-slate-900 rounded-full'>{price}</span>
  )
}

export default Price
