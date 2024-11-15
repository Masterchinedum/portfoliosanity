export const scientificProject = {
    name: 'scientificProject',
    title: 'Scientific Projects',
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
        name: 'link',
        title: 'Project URL',
        type: 'url',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'abstract',
        title: 'Abstract',
        type: 'text',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'projectType',
        title: 'Project Type',
        type: 'string',
        options: {
          list: [
            { title: 'Research Paper', value: 'Research Paper' },
            { title: 'Case Study', value: 'Case Study' },
            { title: 'Experiment', value: 'Experiment' },
          ],
        },
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
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule: any) => Rule.required(),
      },
    ],
  };