import { IContent, IPricing } from '@spwntch/react-ui';

export const PRICING: IContent = {
  heading: 'Pricing',
  subheading: 'Simple Pricing. Pay once. Use forever.',
};

import { CheckIcon } from 'lucide-react';

const icon = (
  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-primary" />
);

export const COST: IPricing = {
  heading: 'Pay once, own it forever',
  price: '$4,999',
  currency: 'USD',
  cta: { label: 'UNLOCK ACCESS TODAY' },
  note: `We're used to working with procurement departments. We'll help you deal with that.`,
};

export const VALUE: IContent[] = [
  {
    heading: {
      content: 'A ton of knowledge',
      className: 'md:text-2xl font-bold tracking-tight mb-0',
    },
    body: {
      content: [
        "Full access to everything we've learned about leveraging customers for maximum profitability and retention over 20 years of consulting to leading brands across a multitude of industries.",
      ],
      className: 'text-sm leading-6 text-muted-foreground mt-2',
    },
    bullets: {
      content: [
        { icon, body: ['Background theory'] },
        { icon, body: ['Methods that work'] },
        { icon, body: ['Workshop materials'] },
        { icon, body: ['Analysis templates'] },
      ],
      className: 'grid grid-cols-2 w-full text-sm text-muted-foreground mb-0',
    },
  },
  {
    heading: {
      content: 'A guided learning journey',
      className: 'md:text-2xl font-bold tracking-tight mb-0',
    },
    body: {
      content: [
        "We take customer experience serioulsy, and we hope this'll be the best learning journey you've ever had!",
      ],
      className: 'text-sm leading-6 text-muted-foreground mt-2',
    },
    bullets: {
      content: [
        { icon, body: ['Concierge account management'] },
        { icon, body: ['Subject matter experts'] },
        { icon, body: ['Facilitated workshops'] },
        { icon, body: ['24/7 support'] },
      ],
      className: 'grid grid-cols-2 w-full text-sm text-muted-foreground mb-0',
    },
  },
  {
    heading: {
      content: 'Free access, forever...',
      className: 'md:text-2xl font-bold tracking-tight mb-0',
    },
    body: {
      content: [
        'Join our ever-growing community of learners and experts in the field. Engage in conversation with leaders in your space.',
      ],
      className: 'text-sm leading-6 text-muted-foreground mt-2',
    },
    bullets: {
      content: [
        { icon, body: ['Perpetual license to use our templates'] },
        { icon, body: ['Continually growing Discord community'] },
        { icon, body: ['Your next big opportunity, perhaps?'] },
      ],
      className: 'grid grid-cols-2 w-full text-sm text-muted-foreground mb-0',
    },
  },
];
