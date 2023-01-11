export type Price = {
  amount: string
  currency: string
}

export const getPricePreview = (price: Price) => {
  switch (price.currency) {
    case 'usd':
      return {
        title: `$${price.amount}`
      }

    case 'lbp':
      return {
        title: `${price.amount} L.L.`
      }

    default:
      return {
        title: `${price.amount} ${price.currency}`
      }
  }
}
