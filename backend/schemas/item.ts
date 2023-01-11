import { defineField, defineType } from 'sanity'

import { getPricePreview, Price } from '../utils/price'

export default defineType({
  type: 'document',
  name: 'item',
  title: 'Item',
  fields: [
    defineField({
      type: 'name',
      name: 'name',
      title: 'Name',
    }),
    defineField({
      type: 'array',
      name: 'priceList',
      title: 'Prices',
      of: [{type: 'price'}],
      description: 'The list of prices for a specific item (can be only one price)',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      priceList: 'priceList'
    },
    prepare(selection) {
      const name = `${selection.name.nameEnglish} - ${selection.name.nameArabic}`
      const priceList: string[] = selection.priceList.map((price: Price) => getPricePreview(price))

      return {
        title: name,
        description: priceList.join(', ')
      }
    },
  },
})
