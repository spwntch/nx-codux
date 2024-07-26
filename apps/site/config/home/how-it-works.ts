import { IContent } from '@spwntch/react-ui';

export const HOW_IT_WORKS: IContent = {
  heading: {
    content: 'How It Works',
    className: 'text-3xl font-bold text-center mt-10',
  },
  body: {
    content: ['Identify, Profile, Align, Optimize'],
    className: 'text-lg text-center mt-4',
  },
  bullets: [
    {
      body: 'Identify: Gather and analyze data to pinpoint high-potential customers.',
      className: 'text-lg mt-2',
    },
    {
      body: 'Profile: Create detailed customer profiles using our proven templates.',
      className: 'text-lg mt-2',
    },
    {
      body: 'Align: Ensure marketing, sales, and product teams are on the same page.',
      className: 'text-lg mt-2',
    },
    {
      body: 'Optimize: Continuously refine your profiles based on data-driven insights.',
      className: 'text-lg mt-2',
    },
  ],
  // callToAction: {
  //   message: 'Learn More About the ICP Playbook',
  //   href: '/learn-more',
  //   className: 'text-xl font-bold text-center mt-6 underline',
  // },
};
