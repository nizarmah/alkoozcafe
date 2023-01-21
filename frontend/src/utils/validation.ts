export const validateName = (
  name: NullableSanityName | null
): name is SanityName =>
  !!name && !!name.nameArabic && !!name.nameEnglish

export const validatePrice = (
  price: NullableSanityPrice | null
): price is SanityPrice =>
  !!price && !!price.amount && !!price.currency
