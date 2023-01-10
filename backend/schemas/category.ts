import { defineField, defineType } from 'sanity'

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
      type: 'number',
      name: 'priority',
      title: 'Priority'
    })
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
