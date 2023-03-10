import { defineField, defineType } from 'sanity'

import { getPricePreview } from '../utils/price'

export default defineType({
  type: 'object',
  name: 'price',
  title: 'price',
  fields: [
    defineField({
      type: 'number',
      name: 'amount',
      title: 'Amount',
      validation: Rule => [
        Rule.required(),
      ],
    }),
    defineField({
      type: 'string',
      name: 'currency',
      title: 'Currency',
      options: {
        list: [
          {
            title: 'USD',
            value: 'usd'
          },
          {
            title: 'LBP',
            value: 'lbp'
          }
        ],
        layout: 'radio',
      },
      initialValue: 'USD',
      validation: Rule => [
        Rule.required(),
      ],
    }),
  ],
  preview: {
    select: {
      amount: 'amount',
      currency: 'currency'
    },
    prepare(selection) {
      return getPricePreview(selection)
    },
  },
})
