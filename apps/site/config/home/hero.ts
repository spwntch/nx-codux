import { IContent, IImage } from '@spwntch/react-ui';


export const HOME_HERO_IMAGE: IImage = {
  src: '/images/coworkers-in-casual-workshop.webp',
  darken: true,
};

export const HOME_HERO_CONTENT: IContent = {
  title: {
    content: 'Unlock Your Ideal Customers with the ICP Playbook',
    // className: 'text-4xl font-bold text-center',
  },
  subTitle: {
    content:
      'Transform your marketing and product strategies with our comprehensive playbook.',
    // className: 'text-xl text-center mt-4',
  },
  body: {
    content: [
      "Are you struggling to identify and target the right customers, wasting valuable marketing resources on low-potential leads? Do you face challenges in aligning your marketing and sales teams, causing friction and inefficiencies? Perhaps you're overwhelmed by the vast amounts of data available but unsure how to leverage it effectively?",
      'With the ICP Playbook, you can achieve higher conversion rates, improve team alignment, and see faster, data-driven results. Our comprehensive playbook provides the tools and strategies you need to transform your marketing efforts and reach your ideal customers efficiently.',
    ],
    // className: 'text-lg text-center mt-6',
  },
  bullets: [
    {
      //   icon: <IconTarget />,
      body: 'Achieve higher conversion rates',
      // className: 'flex items-center',
    },
    {
      //   icon: <IconUsers />,
      body: 'Improved team alignment',
      // className: 'flex items-center',
    },
    {
      //   icon: <IconBarChart2 />,
      body: 'Faster, data-driven results',
      // className: 'flex items-center',
    },
  ],
  // tags: {
  //   content: ['Get Started Today', 'Learn More'],
  //   className: 'flex justify-center space-x-4 mt-8',
  // },
};
