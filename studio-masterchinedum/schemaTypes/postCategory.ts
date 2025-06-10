// sanity/schemas/postCategory.ts
import { Rule } from '@sanity/types'

export const postCategory = {
    name: 'postcategory',
    title: 'Post Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule: Rule) => rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  }