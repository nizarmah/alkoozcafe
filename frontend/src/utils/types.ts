interface NullableSanityName {
  nameEnglish: string | null
  nameArabic: string | null
}

interface SanityName extends NullableSanityName {
  nameEnglish: string
  nameArabic: string
}

type SanityCurrency = 'usd' | 'lbp'

interface NullableSanityPrice {
  amount: number | null
  currency: SanityCurrency | null
}

interface SanityPrice extends NullableSanityPrice {
  amount: number
  currency: SanityCurrency
}

interface NullableSanityItem {
  name: NullableSanityName | null
  priceList: NullableSanityPrice[] | null
}

interface SanityItem extends NullableSanityItem {
  name: SanityName
  priceList: SanityPrice[]
}

interface NullableSanityCategory {
  name: NullableSanityName | null
  itemList: NullableSanityItem[] | null
}

interface SanityCategory extends NullableSanityCategory {
  name: SanityName
  itemList: SanityItem[]
}

interface NullableSanityMenu {
  categoryList: NullableSanityCategory[] | null
}

interface SanityMenu extends NullableSanityMenu {
  categoryList: SanityCategory[]
}
