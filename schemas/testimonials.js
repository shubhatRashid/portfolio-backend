export default {
    name: 'testimonials',
    type: 'document',
      title: 'Testimonials',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        title: 'Image',
        name: 'image',
        type: 'url',
      },
    {
        name: 'designation',
        type: 'string',
        title: 'Designation',
    },
    {
        name: 'company',
        type: 'string',
        title: 'Company',
    },
    {
        name: 'testimonial',
        type: 'string',
        title: 'Testimonial',
    },
    
      ]
  }