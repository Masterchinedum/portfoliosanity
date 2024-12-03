import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Posts',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'listimage',
      title: 'List Image',
      description: "This will show on the blog listing page preferably 300x300 pixels",
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: "This will show on the single blog post page preferably 1200x600 pixels",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'postcategory',
      title: 'Post Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'postcategory' } }],
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
            ],
          },
        },
        {
          type: 'code',
          name: 'codeBlock',
          title: 'Code Block',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'React JSX', value: 'jsx' },
              { title: 'React TSX', value: 'tsx' },
              { title: 'Python', value: 'python' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'Markdown', value: 'markdown' },
              { title: 'JSON', value: 'json' },
              { title: 'GraphQL', value: 'graphql' },
              { title: 'SQL', value: 'sql' },
            ],
            withFilename: true,
          },
        },
        {
          type: 'image',
          name: 'flexImage',
          title: 'Flexible Image',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'layout',
              title: 'Layout',
              type: 'string',
              options: {
                list: [
                  { title: 'Default', value: 'default' },
                  { title: 'Flex Left', value: 'flexLeft' },
                  { title: 'Flex Right', value: 'flexRight' },
                  { title: 'Centered', value: 'centered' },
                ],
                layout: 'radio',
              },
              initialValue: 'default',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        },
        {
          type: 'object',
          name: 'youtubeVideo',
          title: 'YouTube Video',
          fields: [
            defineField({
              name: 'url',
              title: 'YouTube Video URL',
              type: 'url',
              validation: (Rule) => Rule.required().custom((url) => {
                // Ensure url is a string
                if (typeof url !== 'string') {
                  return 'Please enter a valid YouTube video URL';
                }
                
                const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9\-_]+)/;
                return youtubeRegex.test(url) ? true : 'Please enter a valid YouTube video URL';
              }),
            }),
            defineField({
              name: 'title',
              title: 'Video Title',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Video Caption',
              type: 'string',
            }),
            defineField({
              name: 'startTime',
              title: 'Start Time (optional)',
              type: 'number',
              description: 'Start time in seconds (optional)',
              validation: (Rule) => Rule.min(0),
            }),
            defineField({
              name: 'stopTime',
              title: 'Stop Time (optional)',
              type: 'number',
              description: 'Stop time in seconds (optional)',
              validation: (Rule) => Rule.custom((stopTime, context) => {
                // Type-safe check for start time
                const startTime = context.parent && typeof context.parent === 'object' 
                  ? (context.parent as { startTime?: number }).startTime 
                  : undefined;
                
                // If start time is provided and stop time is provided
                if (startTime !== undefined && stopTime !== undefined) {
                  // Ensure both are numbers and stop time is greater
                  return (typeof stopTime === 'number' && typeof startTime === 'number' && stopTime > startTime)
                    ? true 
                    : 'Stop time must be greater than start time';
                }
                
                return true;
              }),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              url: 'url',
            },
            prepare(selection) {
              const { title, url } = selection;
              return {
                title: title || 'YouTube Video',
                subtitle: url,
                media: () => '🎥',
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});