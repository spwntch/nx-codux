import { IContent } from '@spwntch/react-ui';

export const HOW_IT_WORKS: IContent = {
  heading: { content: 'How It Works',className: 'max-w-3xl mx-auto', },
  subheading: {
    content: 'A Step-by-Step Guide to Using the ICP Playbook',
    className: 'max-w-3xl mx-auto',
  },
  body: {
    content: [
      'With the ICP Playbook, you’ll be fully supported every step of the way. From orientation to implementation, we ensure you and your team have the tools and knowledge needed to succeed.',
      'Here’s how our process unfolds:',
    ],
    className: 'max-w-3xl mx-auto',
  },
  bullets: [
    {
      heading: 'PROJECT PHASE 1',
      subheading: 'Introduction and Setup',
      body: [
        "Begin with an orientation session to understand the playbook's framework and set up your team.",
      ],
    },
    {
      heading: 'PROJECT PHASE 2',
      subheading: 'Workshops and Interactive Sessions',
      body: [
        'Participate in structured workshops that cover different aspects of customer profiling.',
        'Engage in group activities and discussions to gain diverse perspectives.',
      ],
    },
    {
      heading: 'PROJECT PHASE 3',
      subheading: 'Utilizing Worksheets and Templates',
      body: [
        'Apply the provided worksheets and templates to gather and analyze customer data.',
        'Use these tools to develop detailed and actionable customer profiles.',
      ],
    },
    {
      heading: 'PROJECT PHASE 4',
      subheading: 'Implementation and Review',
      body: [
        'Implement the developed ICPs into your marketing and product strategies.',
        'Regularly review and refine the profiles based on new data and insights.',
      ],
    },
  ],
};
