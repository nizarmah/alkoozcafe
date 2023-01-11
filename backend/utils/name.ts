export type Name = {
  nameEnglish: string
  nameArabic: string
}

export const getNamePreview = (name: Name) =>
  `${name.nameEnglish} - ${name.nameArabic}`