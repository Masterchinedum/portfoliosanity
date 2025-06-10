// schemas/blog.ts
export const blog = {
    name: 'blog',
    title: 'Blog Posts',
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
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Tech Tutorials', value: 'Tech Tutorials' },
            { title: 'Scientific Insights', value: 'Scientific Insights' },
            { title: 'Career Journey', value: 'Career Journey' },
          ],
        },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'readTime',
        title: 'Read Time',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
          },
        ],
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule: any) => Rule.required(),
      },
    ],
  };