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
        src: '/images/benefits/visualization.webp',
      }
    },
    {
      heading: 'Real-Time Data Integration',
      body: [
        'Incorporate live data to keep your customer journey maps updated and accurate.',
      ],
      
      image: {
        src: '/images/benefits/data-integration.webp',
      }
    },
    {
      heading: 'Cross-Departmental Alignment',
      body: [
        'Ensure all teams are aligned around a unified vision of the customer journey.',
      ],
      image: {
        src: '/images/benefits/department-alignment.webp',
      }
    },
    {
      heading: 'Customer Persona Development',
      body: [
        'Create detailed personas to better understand and target your customers.',
      ],
      image: {
        src: '/images/benefits/persona-development.webp',
      }
    },
    {
      heading: 'Analytical Tools and Reporting',
      body: [
        'Track performance with robust analytics and get actionable insights to optimize your customer journeys.',
      ],
      image: {
        src: '/images/benefits/analytics-and-reporting.webp',
      }
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
