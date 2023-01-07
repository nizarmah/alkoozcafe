import { defineField, defineType } from 'sanity'

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
    defineField({
      type: 'reference',
      to: [{type: 'category'}],
      name: 'category',
      title: 'Category',
      description: 'The category the item belongs to',
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection) {
      const name = `${selection.name.nameEnglish} - ${selection.name.nameArabic}`

      return {
        title: name
      }
    },
  },
})
