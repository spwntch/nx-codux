import { IContent, IImage } from '@spwntch/react-ui';

export const THANK_YOU_HERO_IMAGE: IImage = {
  src: '/images/thank-you/pexels-dreamsky-258557-790916.webp',
  darken: '75%',
};

export const THANK_YOU_HERO_CONTENT: IContent = {
  // announcement: {
  //   message: "Limited Time Offer: Get 10% Off the ICP Playbook!",
  //   className: "mx-auto text-xl",
  //   href: "#"
  // },
  title: {
    content: 'We look forward to meeting you',
    className: 'max-w-3xl',
  },
  subheading: {
    content: 'Get ready to unlock the full potential of your target audience',
    className: 'max-w-3xl',
  },
  body: {
    content: [
      `Thank you for your interest in the ICP Playbook with Interact.`,
      `We're excited to help you to transform your sales, marketing and product strategies to unlock new profits!`,
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
    { label: 'EXPLORE MORE', variant: { size: 'xl' } },
    { label: 'GO HOME', variant: { variant: 'link', size: 'xl' } },
    // { label: 'LEARN MORE', variant: { size: 'xl', variant: 'ghost' } },
  ],
};
