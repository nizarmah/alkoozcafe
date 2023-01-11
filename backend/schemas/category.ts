import { defineField, defineType } from 'sanity'

import { getNamePreview } from '../utils/name'

export default defineType({
  type: 'document',
  name: 'category',
  title: 'Category',
  fields: [
    defineField({
      type: 'name',
      name: 'name',
      title: 'Name',
    }),
    defineField({
      type: 'array',
      name: 'itemList',
      title: 'Items',
      of: [{
        type: 'reference',
        to: [{type: 'item'}]
      }],
      description: 'The list of items that belong to this category'
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection) {
      const name = getNamePreview(selection.name)

      return {
        title: name
      }
    },
  },
})
