import { IContent, IImage } from '@spwntch/react-ui';
import { Crosshair, TrendingUp, Users } from 'lucide-react';

export const HOME_HERO_IMAGE: IImage = {
  src: '/images/home/hero/vlad-bagacian-d1eaoAabeXs-unsplash.webp',
  darken: '50%',
  // attribution: {
  //   url: 'https://unsplash.com/photos/woman-sitting-on-grey-cliff-d1eaoAabeXs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
  //   photographer: {
  //     name: 'Vlad Bagacian',
  //     url: 'https://unsplash.com/@vladbagacian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplashhttps://unsplash.com/@vladbagacian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
  //   }
  // },
};

export const HOME_HERO_CONTENT: IContent = {
  title: {
    content: 'Unlock Seamless Customer Journeys with Expert Mapping',
    className: 'max-w-3xl',
    // className: 'max-w-4xl text-4xl font-bold tracking-tight mb-4',
  },
  subheading: {
    content:
      'Optimize every touchpoint and drive growth with data-driven insights that elevate customer satisfaction.',
    className: 'max-w-2xl',
  },
  body: {
    content: [
      'Every customer interaction is crucial to your long-term business success.',
      'Our Journey Mapping service empowers you to visualize and refine every step of the customer journey, ensuring that your customers have a seamless and satisfying experience from start to finish.',
    ],
    className: 'max-w-2xl',
  },
  bullets: [
    {
      icon: <Crosshair className="h-8 w-8 " />,
      body: [
        "Gain a deep understanding of your customers' needs and behaviors.",
      ],
    },
    {
      icon: <Users className="h-8 w-8 " />,
      body: [
        'Identify and eliminate pain points to create frictionless experiences.',
      ],
    },
    {
      icon: <TrendingUp className="h-8 w-8 " />,
      body: [
        'Align your entire team around a unified vision of the customer journey.',
      ],
    },
  ],
  ctas: [
    {
      label: 'CONTACT SALES',
      variant: { size: 'lg' },
    },
  ],
};
