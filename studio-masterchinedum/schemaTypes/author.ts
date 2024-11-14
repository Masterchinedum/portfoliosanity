// sanity/schemas/author.ts
import { defineField, defineType } from 'sanity'
import { Rule } from '@sanity/types'

export const author = {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (rule: Rule) => rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'social',
        title: 'Social Links',
        type: 'object',
        fields: [
          { name: 'twitter', title: 'Twitter URL', type: 'url' },
          { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
          { name: 'github', title: 'GitHub URL', type: 'url' },
        ],
      },
    ],
  }