import { IContent } from '@spwntch/react-ui';
import { BarChart3, Brain, ClipboardList, ShieldQuestion } from 'lucide-react';

export const THE_ICP_PLAYBOOK: IContent = {
  heading: {
    content: 'What is the ICP Playbook?',
    // className: 'text-3xl font-bold text-center mt-10',
  },
  subheading: {
    content: 'Your All-In-One Solution for Effective Customer Profiling',
    // className: 'text-xl text-center mt-4',
  },
  body: {
    content: [
      'The ICP Playbook is a comprehensive toolkit designed to help you identify and target your ideal customers with precision. Developed for marketing, sales, and product teams, it includes structured workshops, worksheets, templates, and more to streamline your customer profiling process.',
    ],
    className: 'text-lg text-center max-w-4xl',
  },
  bullets: [
    {
      icon: <Brain size={24} />,
      heading: 'Interactive Workshops and Whiteboard Templates',
      body: [
        'Engage your team with guided sessions and Miro/Mural templates to define and refine your Ideal Customer Profile collaboratively.',
      ],
      className: 'text-lg mt-2',
    },
    {
      icon: <ClipboardList size={24} />,
      heading: 'Comprehensive Worksheets and Templates',
      body: [
        'Use practical tools and ready-to-use formats to collect, analyze, and create detailed customer profiles and personas.',
      ],
      className: 'text-lg mt-2',
    },
    {
      icon: <ShieldQuestion size={24} />,
      heading: 'Survey Scripts and Questions',
      body: [
        'Leverage pre-made scripts and questions for running effective online customer surveys, gathering valuable insights with ease.',
      ],
      className: 'text-lg mt-2',
    },
    {
      icon: <BarChart3 size={24} />,
      heading: 'Data-Driven Insights and Strategies',
      body: [
        'Transform customer data into actionable strategies, ensuring every decision is backed by precise analytics and thorough customer understanding.',
      ],
      className: 'text-lg mt-2',
    },
  ],
};
