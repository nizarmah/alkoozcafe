type SanityName = {
  nameEnglish: string
  nameArabic: string
}

type SanityCurrency = 'usd' | 'lbp'

type SanityPrice = {
  amount: number
  currency: SanityCurrency
}

type SanityItem = {
  name: SanityName
  priceList: SanityPrice[]
}

type SanityCategory = {
  name: SanityName
  itemList: SanityItem[]
}

type SanityMenu = {
  categoryList: SanityCategory[]
}
