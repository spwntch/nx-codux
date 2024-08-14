import { IContent, IImage } from '@spwntch/react-ui';
import { Crosshair, Users, TrendingUp } from 'lucide-react';

export const HOME_HERO_IMAGE: IImage = {
  src: '/images/home/hero/vlad-bagacian-d1eaoAabeXs-unsplash.webp',
  darken: '75%',
  attribution: {
    url: 'https://unsplash.com/photos/woman-sitting-on-grey-cliff-d1eaoAabeXs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    photographer: {
      name: 'Vlad Bagacian',
      url: 'https://unsplash.com/@vladbagacian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplashhttps://unsplash.com/@vladbagacian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    }
  },
};

export const HOME_HERO_CONTENT: IContent = {
  title: {
    content: 'Transform Your Customer Experience with Expert Journey Mapping',
    className: 'max-w-4xl text-4xl font-bold tracking-tight mb-4',
  },
  subheading: {
    content:
      'Optimize every touchpoint and drive growth with data-driven insights that elevate customer satisfaction.',
    className: 'max-w-2xl text-xl text-muted-foreground mb-6',
  },
  body: {
    content: [
      'We understand that each customer interaction is crucial to your business success.',
      'Our Journey Mapping service empowers you to visualize and refine every step of the customer journey, ensuring that your customers have a seamless and satisfying experience from start to finish.',
    ],
    className: 'max-w-4xl text-lg text-muted-foreground mb-8',
  },
  bullets: [
    {
      icon: <Crosshair className="h-6 w-6 text-primary" />,
      body: [
        "Gain a deep understanding of your customers' needs and behaviors.",
      ],
      className: 'flex items-start space-x-3 mb-4',
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      body: [
        'Identify and eliminate pain points to create frictionless experiences.',
      ],
      className: 'flex items-start space-x-3 mb-4',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      body: [
        'Align your entire team around a unified vision of the customer journey.',
      ],
      className: 'flex items-start space-x-3 mb-4',
    },
  ],
  ctas: [
    {
      label: 'CONTACT SALES',
      variant: { size: 'xl' }, // Adjust this based on your buttonVariants definition
    },
  ],
};
