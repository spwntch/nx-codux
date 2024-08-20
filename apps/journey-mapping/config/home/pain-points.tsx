import { IContent } from '@spwntch/react-ui';
import { Eye, Users, MessageCircle, Clock, BarChart } from 'lucide-react';

export const PAIN_POINTS: IContent = {
  heading: {
    content: 'Why You Need Journey Mapping',
    className: 'text-3xl font-bold text-center mt-10',
  },
  subheading: {
    content: 'Overcoming Critical Customer Experience Challenges',
    className: 'text-xl text-center mt-4',
  },
  body: {
    content: [
      'Journey Mapping is essential for any business looking to enhance its customer experience. It addresses the most pressing challenges in understanding, engaging, and retaining customers, ensuring your teams are aligned and your resources are effectively utilized.',
    ],
    className: 'text-lg text-center max-w-4xl',
  },
  bullets: [
    {
      icon: <Eye />,
      heading: 'Lack of Holistic Customer View',
      body: [
        'Struggling to see the full customer journey? Journey Mapping provides a clear, comprehensive view across all touchpoints, helping you identify and eliminate inconsistencies.',
      ],
      className: 'text-lg mt-2',
    },
    {
      icon: <Users />,
      heading: 'Team Misalignment',
      body: [
        'Are your teams working in silos? Journey Mapping aligns your marketing, sales, and product teams around a unified customer journey, improving collaboration and efficiency.',
      ],
      className: 'text-lg mt-2',
    },
    {
      icon: <MessageCircle />,
      heading: 'Customer Engagement Challenges',
      body: [
        'Missing opportunities to engage your customers? Journey Mapping helps you understand and optimize engagement at every stage, reducing drop-offs and enhancing satisfaction.',
      ],
      className: 'text-lg mt-2',
    },
    {
      icon: <Clock />,
      heading: 'Limited Time and Resources',
      body: [
        'Pressed for time? Journey Mapping offers a streamlined process that saves you time and resources while delivering actionable insights.',
      ],
      className: 'text-lg mt-2',
    },
    {
      icon: <BarChart />,
      heading: 'Data Overwhelm',
      body: [
        'Drowning in data? Journey Mapping turns overwhelming data into clear, actionable insights that enhance your customer experience strategy.',
      ],
      className: 'text-lg mt-2',
    },
  ],
};
