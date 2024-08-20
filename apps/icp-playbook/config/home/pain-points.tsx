import { IContent } from '@spwntch/react-ui';
import { Target, DollarSign, Users, Clock, BarChart } from 'lucide-react';

export const PAIN_POINTS: IContent = {
  heading: {
    content: 'Why You Need the ICP Playbook',
    className: 'text-3xl font-bold text-center mt-10',
  },
  subheading: {
    content: 'Tackling Your Biggest Customer Profiling Challenges',
    className: 'text-xl text-center mt-4',
  },
  body: {
    content: [
      'The ICP Playbook is designed to address the most critical challenges businesses face in defining and targeting their ideal customers. It provides practical solutions that ensure your marketing, sales, and product teams are aligned and working efficiently.',
    ],
    className: 'text-lg text-center max-w-4xl',
  },
  bullets: [
    {
      icon: <Target />,
      heading: 'Lack of Clarity in Target Audience',
      body: [
        'Many businesses struggle with defining who their ideal customers are, leading to broad and ineffective targeting. The ICP Playbook provides a structured approach to help you clearly define and understand your ideal customer profile, ensuring your efforts are focused on the right audience.',
      ],
      className: 'text-lg mt-2',
    },
    {
      icon: <DollarSign />,
      heading: 'Inefficient Marketing Spend',
      body: [
        'Wasting marketing resources on low-potential leads is a common issue. By using the ICP Playbook, you can focus your marketing efforts on high-potential customers, significantly reducing unnecessary costs and improving ROI.',
      ],
      className: 'text-lg mt-2',
    },
    {
      icon: <Users />,
      heading: 'Misalignment Between Marketing and Sales',
      body: [
        'Miscommunication and misalignment between teams can lead to missed opportunities and inefficiencies. The ICP Playbook ensures that both your marketing and sales teams are aligned on who the ideal customers are, improving collaboration and results.',
      ],
      className: 'text-lg mt-2',
    },
    {
      icon: <Clock />,
      heading: 'Time Constraints',
      body: [
        'Building customer profiles from scratch can be time-consuming. The ICP Playbook includes pre-built templates and structured workshops, saving you time and resources while still delivering comprehensive results.',
      ],
      className: 'text-lg mt-2',
    },
    {
      icon: <BarChart />,
      heading: 'Difficulty in Data Utilization',
      body: [
        'Many businesses collect vast amounts of data but struggle to make it actionable. The ICP Playbook provides tools and techniques to make data analysis accessible and actionable, empowering you to make informed decisions based on real insights.',
      ],
      className: 'text-lg mt-2',
    },
  ],
};
