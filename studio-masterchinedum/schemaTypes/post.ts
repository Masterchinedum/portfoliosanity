// sanity/schemas/post.ts

export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'featured',
      title: 'Featured Posts',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'listimage',
      title: 'List Image',
      description:"This will show on the blog listing page prefarrably 300x300 pixels  ",
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description:"This will show on the single blog post page prefarrably 1200x600 pixels ",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'postcategory',
      title: 'Post Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'postcategory' } }],
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}