import { IContent } from '@spwntch/react-ui';
import { CheckCircle, TrendingUp, Shield } from 'lucide-react';

export const BENEFITS: IContent = {
  title: {
    content: 'Unlock the Full Potential of Your Strategy',
    className: 'text-3xl font-bold mb-4',
  },
  subheading: {
    content: 'Why Choose the AI-Driven ICP Generator?',
    className: 'text-xl mb-6',
  },
  bullets: [
    {
      image: {src: 'images/data-driven-accuracy.webp', alt: 'Data Driven Accuracy'},
      heading: 'Data-Driven Accuracy',
      body: [
        'Benefit from AI-generated customer profiles that are based on comprehensive, data-driven research, ensuring every decision is backed by reliable insights.',
      ],
    },
    {
      image: {src: 'images/faster-time-to-market.webp', alt: 'Faster Time to Market'},
      heading: 'Faster Time to Market',
      body: [
        'Speed up your product development and marketing processes with instant ICP generation, allowing you to stay ahead of the competition and quickly respond to market changes.',
      ],
    },
    {
      image: {src: 'images/reduced-risk.webp', alt: 'Reducec Risk'},
      heading: 'Reduced Risk',
      body: [
        'Mitigate the risks of targeting the wrong audience or misaligning your strategies by using accurate, AI-generated ICPs and Buyer Personas tailored to your specific market.',
      ],
    },
  ],
  body: {
    content: [
      'The AI-Driven ICP Generator is more than just a tool—it’s a strategic advantage that helps you refine your approach, maximize efficiency, and achieve your business goals with confidence.',
    ],
    className: 'max-w-3xl mt-8',
  },
};