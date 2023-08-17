export default {
    name: 'projects',
    type: 'document',
      title: 'Projects',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
      },
    {
        name: 'description',
        type: 'string',
        title: 'Description',
    },
    {
        name: 'link',
        type: 'url',
        title: 'Repository Link',
    },
    {
        title: "Tags",
        name: "tags",
        type: "array",
        of: [{type: "string"}],
        options: {
        layout: "tags"
        }
    }
      ]
  }