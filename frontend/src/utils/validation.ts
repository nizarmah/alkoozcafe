export const validateName = (name: SanityName | null) =>
  !!name && !!name.nameArabic && !!name.nameEnglish

export const validatePrice = (price: SanityPrice | null) =>
  !!price && !!price.amount && !!price.currency

export const validatePriceList = (priceList: SanityPrice[] | null) =>
  !!priceList && priceList.filter((price) => validatePrice(price)).length > 0

export const validateItem = (item: SanityItem | null) =>
  !!item && validateName(item.name) && validatePriceList(item.priceList)

export const validateItemList = (itemList: SanityItem[] | null) =>
  !!itemList && itemList.filter((item) => validateItem(item)).length > 0

export const validateCategory = (category: SanityCategory) =>
  validateName(category.name) && validateItemList(category.itemList)
