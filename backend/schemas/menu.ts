import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'menu',
  title: 'Menu',
  fields: [
    defineField({
      type: 'array',
      name: 'categoryList',
      title: 'Categories',
      of: [{
        type: 'reference',
        to: [{type: 'category'}]
      }],
      description: 'The ordered list of categories should appear on the menu'
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Al Kooz Café Menu'
      }
    }
  }
})
