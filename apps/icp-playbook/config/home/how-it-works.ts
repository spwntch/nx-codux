import { IContent } from '@spwntch/react-ui';

export const HOW_IT_WORKS: IContent = {
  heading: 'How It Works',
  subheading: {
    content: 'A Step-by-Step Guide to Using the ICP Playbook',
    // Add any necessary className here
  },
  body: {
    content: [
      'With the ICP Playbook, you’ll be fully supported every step of the way. From orientation to implementation, we ensure you and your team have the tools and knowledge needed to succeed.',
      'Here’s how our process unfolds:',
      '< TO DO >',
    ],
    className: 'text-lg text-center max-w-4xl',
  },
  bullets: [
    {
      heading: 'Introduction and Setup',
      body: [
        "Begin with an orientation session to understand the playbook's framework and set up your team.",
      ],
    },
    {
      heading: 'Workshops and Interactive Sessions',
      body: [
        'Participate in structured workshops that cover different aspects of customer profiling.',
        'Engage in group activities and discussions to gain diverse perspectives.',
      ],
    },
    {
      heading: 'Utilizing Worksheets and Templates',
      body: [
        'Apply the provided worksheets and templates to gather and analyze customer data.',
        'Use these tools to develop detailed and actionable customer profiles.',
      ],
    },
    {
      heading: 'Implementation and Review',
      body: [
        'Implement the developed ICPs into your marketing and product strategies.',
        'Regularly review and refine the profiles based on new data and insights.',
      ],
    },
  ],
};
