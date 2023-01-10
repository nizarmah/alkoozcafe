type SanityName = {
  nameEnglish: string
  nameArabic: string
}

type SanityCurrency = 'usd' | 'lbp'

type SanityPrice = {
  amount: number
  currency: SanityCurrency
}

type SanityCategory = {
  name: SanityName
  priority: number
}

type SanityItem = {
  name: SanityName
  priceList: SanityPrice[]
  category: SanityCategory
}

type GroupSanityItem = {
  nodes: SanityItem[]
  fieldValue: string
}

type AllSanityItem = {
  group: GroupSanityItem[]
}
