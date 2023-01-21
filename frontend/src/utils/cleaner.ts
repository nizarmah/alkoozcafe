import { validateName, validatePrice } from './validation'

const cleanPrice = (price: NullableSanityPrice): SanityPrice | null =>
  validatePrice(price) ? price : null

const cleanPriceList = (priceList: NullableSanityPrice[]): SanityPrice[] =>
  (priceList.map((price) => cleanPrice(price))).filter(Boolean) as SanityPrice[]

const cleanItem = (item: NullableSanityItem): SanityItem | null => {
  if (!validateName(item.name) || !item.priceList) return null

  const cleanedPriceList = cleanPriceList(item.priceList)
  if (cleanedPriceList.length === 0) return null

  return {
    name: item.name,
    priceList: cleanedPriceList
  }
}

const cleanItemList = (itemList: NullableSanityItem[]): SanityItem[] =>
  itemList.map((item) => cleanItem(item)).filter(Boolean) as SanityItem[]

const cleanCategory = (category: NullableSanityCategory): SanityCategory | null => {
  if (!validateName(category.name) || !category.itemList) return null

  const cleanedItemList = cleanItemList(category.itemList)
  if (cleanedItemList.length === 0) return null

  return {
    name: category.name,
    itemList: cleanedItemList
  }
}

const cleanCategoryList = (categoryList: NullableSanityCategory[]): SanityCategory[] =>
  categoryList.map((category) => cleanCategory(category)).filter(Boolean) as SanityCategory[]

export const cleanMenu = (menu: NullableSanityMenu): SanityMenu => {
  if (!menu.categoryList) return { categoryList: [] }

  return {
    categoryList: cleanCategoryList(menu.categoryList)
  }
}
