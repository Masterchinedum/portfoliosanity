// schemas/webProject.ts
export const webProject = {
    name: 'webProject',
    title: 'Web Projects',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
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
        name: 'description',
        title: 'Description',
        type: 'text',
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
        name: 'techStack',
        title: 'Tech Stack',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule: any) => Rule.required(),
      },
    ],
  };