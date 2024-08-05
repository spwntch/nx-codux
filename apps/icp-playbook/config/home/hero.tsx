import { IContent, IImage } from '@spwntch/react-ui';
import { Crosshair, Users, TrendingUp } from 'lucide-react';

export const HOME_HERO_IMAGE: IImage = {
  src: '/images/benefits/increased-sales.webp',
  darken: '75%',
};

export const HOME_HERO_CONTENT: IContent = {
  // announcement: {
  //   message: "Limited Time Offer: Get 10% Off the ICP Playbook!",
  //   className: "mx-auto text-xl",
  //   href: "#" 
  // },
  title: {
    content: 'Unlock Your Ideal Customers with the ICP Playbook',
    className: 'max-w-3xl',
  },
  subheading: {
    content:
      'Transform your marketing and product strategies with our comprehensive playbook.',
    className: 'max-w-2xl',
  },
  body: {
    content: [
      // 'With the Ideal Customer Profile (ICP) Playbook, you can achieve higher conversion rates, improve team alignment, and see faster, data-driven results.',
      'Our comprehensive playbook provides the tools and strategies you need to transform your efforts and reach your ideal customers efficiently.',
    ],
    className: 'max-w-3xl',
  },
  bullets: [
    {
      icon: <Crosshair />,
      body: ['Achieve higher conversion rates'],
    },
    {
      icon: <Users />,
      body: ['Improved team alignment'],
    },
    {
      icon: <TrendingUp />,
      body: ['Faster, data-driven results'],
    },
  ],
  ctas: [
    { label: 'GET STARTED', variant: { size: 'xl' } },
    // { label: 'LEARN MORE', variant: { size: 'xl', variant: 'ghost' } },
  ],
};
