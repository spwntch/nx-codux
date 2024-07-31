import { IContent } from '@spwntch/react-ui';

export const PRICING: IContent = {
  heading: 'Pricing',
  subheading: 'Simple Pricing. Pay once. Use forever.',
};

import { CheckIcon } from 'lucide-react';

const icon = (
  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-primary" />
);

export const VALUE: IContent[] = [
  {
    heading: {
      content: 'A ton of knowledge',
      className: 'text-2xl font-bold tracking-tight text-foreground',
    },
    body: [
      "Full access to everything we've learned about leveraging customers for maximum profitability and retention over 20 years of consulting to leading brands across a multitude of industries.",
    ],
    bullets: [
      { icon, body: ['Background theory'] },
      { icon, body: ['Methods that work'] },
      { icon, body: ['Workshop materials'] },
      { icon, body: ['Analysis templates'] },
    ],
  },
  // {
  //   heading: 'A guided learning journey',
  //   body: [
  //     "We take customer experience serioulsy, and we hope this'll be the best learning journey you've ever had!",
  //   ],
  //   bullets: [
  //     { icon, body: ['Concierge account management'] },
  //     { icon, body: ['Subject matter experts'] },
  //     { icon, body: ['Facilitated workshops'] },
  //     { icon, body: ['24/7 support'] },
  //   ],
  // },
  // {
  //   heading: 'Free access, forever...',
  //   body: [
  //     'Join our ever-growing community of learners and experts in the field. Engage in conversation with leaders in your space.',
  //   ],
  //   bullets: [
  //     { icon, body: ['Perpetual license to use our templates'] },
  //     { icon, body: ['Continually growing Discord community'] },
  //     { icon, body: ['Your next big opportunity, perhaps?'] },
  //   ],
  // },
];
