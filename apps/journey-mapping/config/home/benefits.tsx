import { IContent } from '@spwntch/react-ui';

export const BENEFITS: IContent = {
  heading: { content: 'Why Choose Our Journey Mapping Service?' },
  bullets: [
    {
      heading: 'Comprehensive Visualization Tools',
      body: [
        'Map out the entire customer journey with intuitive tools and customizable templates.',
      ],
      image: {
        src: '/images/benefits/pexels-startup-stock-photos-7067.webp',
        attribution: {
          photographer: {
            name: 'Startup Stock Photos',
            url: 'https://www.pexels.com/photo/four-assorted-color-glue-stick-bottles-7067/',
          },
        },
      },
    },
    {
      heading: 'Real-Time Data Integration',
      body: [
        'Incorporate live data to keep your customer journey maps updated and accurate.',
      ],

      image: {
        src: '/images/benefits/pexels-pixabay-159519.webp',
        attribution: {
          photographer: {
            name: 'Pixabay',
            url: 'https://www.pexels.com/photo/multi-colored-folders-piled-up-159519/',
          },
        },
      },
    },
    {
      heading: 'Cross-Departmental Alignment',
      body: [
        'Ensure all teams are aligned around a unified vision of the customer journey.',
      ],
      image: {
        src: '/images/benefits/hannah-busing-Zyx1bK9mqmA-unsplash.webp',
        darken: '75%',
        attribution: {
          photographer: {
            name: 'Christina Morillo',
            url: 'https://www.pexels.com/photo/two-people-working-on-laptops-1181210/',
          },
        },
      },
    },
    {
      heading: 'Customer Persona Development',
      body: [
        'Create detailed personas to better understand and target your customers.',
      ],
      image: {
        src: '/images/benefits/pexels-cottonbro-4855325.webp',
        attribution: { photographer: { name: '', url: '' } },
      },
    },
    {
      heading: 'Analytical Tools and Reporting',
      body: [
        'Track performance with robust analytics and get actionable insights to optimize your customer journeys.',
      ],
      image: {
        src: '/images/benefits/pexels-marketingtuig-185576.webp',
        attribution: { photographer: { name: '', url: '' } },
      },
    },
  ],
  ctas: [
    {
      label: 'Learn More',
      variant: { variant: 'secondary' }, // Replace with the appropriate button variant from your buttonVariants definition
    },
  ],
  // Supporting visuals can be added here if required by the component
};
