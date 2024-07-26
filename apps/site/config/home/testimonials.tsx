import { IContent } from '@spwntch/react-ui';

export const TESTIMONIALS: IContent = {
  heading: {
    content: 'What Our Clients Say',
    className: 'text-3xl font-bold text-center mt-10',
  },
  body: {
    content: [
      'Discover how the ICP Playbook has transformed the marketing strategies and business outcomes of our clients.',
      'Our comprehensive guide has helped companies across various industries achieve remarkable results by improving their customer profiling and targeting efforts.'
    ],
    className: 'text-lg text-center mt-4',
  },
  bullets: [
    {
      body: [
        'The ICP Playbook revolutionized our marketing strategy. We\'ve seen a 30% increase in qualified leads.',
      ],
      className: 'text-lg mt-2',
      heading: 'Jane Doe, CMO of XYZ Corp.',
    },
    {
      body: [
        'The workshops were eye-opening and invaluable. We now have a clear picture of our ideal customer.',
      ],
      className: 'text-lg mt-2',
      heading: 'John Smith, CEO of ABC Ltd.',
    },
    {
      body: [
        'Implementing the ICP Playbook has streamlined our customer profiling process, leading to a significant boost in our marketing efficiency.',
      ],
      className: 'text-lg mt-2',
      heading: 'Emily White, Head of Growth at DEF Inc.',
    },
    {
      body: [
        'Thanks to the ICP Playbook, our team is now better aligned, and we\'ve achieved a 25% increase in conversion rates.',
      ],
      className: 'text-lg mt-2',
      heading: 'Michael Brown, VP of Marketing at GHI Solutions.',
    },
  ],
};