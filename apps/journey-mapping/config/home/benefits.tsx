import { IContent } from '@spwntch/react-ui';

export const BENEFITS: IContent = {
  heading: { content: 'Why Choose Our Journey Mapping Service?' },
  bullets: [
    {
      heading: 'Comprehensive Visualization Tools',
      body: [
        'Imagine having a clear, panoramic view of your customer’s journey, capturing every interaction with precision.',
        'Our intuitive tools and customizable templates empower you to design a customer journey that truly resonates with your audience.',
        'Unlock the potential to streamline processes, creating experiences that not only meet expectations but inspire loyalty and satisfaction.',
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
        'Stay ahead of trends and respond to your customers’ needs with insights drawn from real-time data.',
        'With our platform, your journey maps are always reflective of the latest behaviors and trends, allowing you to adapt with agility and confidence.',
        'Experience the satisfaction of making data-driven decisions that keep you connected with your customers and ahead of the competition.',
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
        'Imagine a world where every team in your organization is aligned, working in harmony towards a unified vision of the customer journey.',
        'Our Journey Mapping service brings this vision to life, fostering collaboration and breaking down silos for a more cohesive customer experience.',
        'This alignment not only enhances internal efficiency but also strengthens the consistency and impact of your customer interactions.',
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
        'Get closer to your customers by developing personas that truly reflect their needs, desires, and behaviors.',
        'With our tools, you can delve deep into understanding what drives your customers, allowing you to create more meaningful and personalized interactions.',
        'This understanding transforms how you connect with your audience, turning insights into impactful, lasting relationships.',
      ],
      image: {
        src: '/images/benefits/pexels-cottonbro-4855325.webp',
        attribution: { photographer: { name: '', url: '' } },
      },
    },
    {
      heading: 'Analytical Tools and Reporting',
      body: [
        'Harness the power of data to illuminate the path forward, turning insights into action.',
        'Our robust analytics and reporting tools give you the clarity needed to optimize every aspect of your customer journey, from first touch to lasting loyalty.',
        'With this knowledge, you can confidently make decisions that not only enhance the customer experience but also drive measurable business success.',
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