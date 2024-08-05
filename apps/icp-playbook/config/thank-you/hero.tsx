import { IContent, IImage } from '@spwntch/react-ui';
import { Crosshair, Users, TrendingUp } from 'lucide-react';

export const THANK_YOU_HERO_IMAGE: IImage = {
  src: '/images/benefits/data-driven-decisions.webp',
  darken: '75%',
};

export const THANK_YOU_HERO_CONTENT: IContent = {
  // announcement: {
  //   message: "Limited Time Offer: Get 10% Off the ICP Playbook!",
  //   className: "mx-auto text-xl",
  //   href: "#" 
  // },
  title: {
    content: 'Get Ready to Unlock the Full Potential of Your Target Audience',
    className: 'max-w-3xl',
  },
  subheading: {
    content:
      'Your journey to exceptional customer profiling starts now',
    className: 'max-w-2xl',
  },
  body: {
    content: [
      'Thank you for choosing the ICP Playbook to transform your marketing strategy! We’re excited to partner with you in identifying and targeting your ideal customers with precision.',
      'Expect to hear from one of our account managers in the next few hours, who will guide you through the next steps.',
    ],
    className: 'max-w-3xl',
  },
  // bullets: [
  //   {
  //     icon: <Crosshair />,
  //     body: ['Achieve higher conversion rates'],
  //   },
  //   {
  //     icon: <Users />,
  //     body: ['Improved team alignment'],
  //   },
  //   {
  //     icon: <TrendingUp />,
  //     body: ['Faster, data-driven results'],
  //   },
  // ],
  ctas: [
    { label: 'BACK TO HOME', variant: { size: 'xl' } },
    // { label: 'LEARN MORE', variant: { size: 'xl', variant: 'ghost' } },
  ],
};
