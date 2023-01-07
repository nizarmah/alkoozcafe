import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'object',
  name: 'name',
  title: 'Name',
  fields: [
    defineField({
      type: 'string',
      name: 'nameEnglish',
      title: 'English Name',
      validation: Rule => [
        Rule.required(),
      ],
    }),
    defineField({
      type: 'string',
      name: 'nameArabic',
      title: 'Arabic Name',
      validation: Rule => [
        Rule.required(),
      ],
    }),
  ],
  preview: {
    select: {
      nameEnglish: 'nameEnglish',
      nameArabic: 'nameArabic',
    },
    prepare(selection) {
      return {
        title: `${selection.nameEnglish} - ${selection.nameArabic}`
      }
    },
  },
})
