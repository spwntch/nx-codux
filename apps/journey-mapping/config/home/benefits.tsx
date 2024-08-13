import { IContent } from '@spwntch/react-ui';

export const BENEFITS: IContent = {
  heading: {
    content: 'Key Benefits of the ICP Playbook',
    // className: 'text-3xl font-bold text-center mt-10',
  },
  subheading: {
    content: 'Maximize Your Marketing and Product Effectiveness',
    // className: 'text-xl text-center mt-4',
  },
  body: {
    content: [
      'Discover how the ICP Playbook can transform your business by enhancing targeting, boosting conversions, aligning teams, and more. Each feature is designed to deliver actionable insights and strategies, ensuring you reach your goals efficiently and effectively.',
    ],
    className: 'text-lg text-left max-w-4xl',
  },
  bullets: [
    {
      image: { src: 'images/benefits/increased-sales.webp' },
      heading: 'Improved Targeting & Conversions',
      body: [
        'Identify and focus on high-potential customers, reducing wasted marketing spend and boosting conversion rates. With the ICP Playbook, gain precision in your targeting efforts, leading to higher lead quality, increased engagement, and more successful sales.',
      ],
      bullets: [
        {
          body: ['Enhanced precision in targeting efforts.'],
          className: 'flex items-center mt-2',
        },
        {
          body: ['Higher lead quality and improved conversion rates.'],
          className: 'flex items-center mt-2',
        },
      ],
    },
    {
      image: { src: 'images/benefits/data-driven-decisions.webp' },
      heading: 'Data-Driven Decision Making',
      body: [
        'Utilize analytics and data to refine customer profiles and improve business outcomes. The ICP Playbook empowers you with the insights needed to make informed decisions.',
      ],
      bullets: [
        {
          body: ['Leverage analytics for better decisions.'],
          className: 'flex items-center mt-2',
        },
        {
          body: ['Refine customer profiles effectively.'],
          className: 'flex items-center mt-2',
        },
      ],
    },
    {
      image: { src: 'images/benefits/team-alignment.webp' },
      heading: 'Team Alignment',
      body: [
        'Achieve better alignment between marketing, sales, and product teams. The ICP Playbook ensures everyone is on the same page, working towards common goals with a unified strategy.',
      ],
      bullets: [
        {
          body: ['Unified strategy for all teams.'],
          className: 'flex items-center mt-2',
        },
        {
          body: ['Improved collaboration and efficiency.'],
          className: 'flex items-center mt-2',
        },
      ],
    },
    {
      image: { src: 'images/benefits/better-features.webp' },
      heading: 'Better Feature Identification',
      body: [
        'Empower product owners to identify and prioritize features that resonate with their perfect customers. The ICP Playbook provides the tools and insights needed to enhance product development strategies.',
      ],
      bullets: [
        {
          body: ['Prioritize features that resonate with customers.'],
          className: 'flex items-center mt-2',
        },
        {
          body: ['Enhance product development strategies.'],
          className: 'flex items-center mt-2',
        },
      ],
    },
    {
      image: { src: 'images/benefits/professional-growth.webp' },
      heading: 'Professional Growth',
      body: [
        'Stay updated with the latest strategies and tools to advance your career. The ICP Playbook equips you with cutting-edge knowledge and skills to remain competitive and innovative.',
      ],
      bullets: [
        {
          body: ['Access to the latest strategies.'],
          className: 'flex items-center mt-2',
        },
        {
          body: ['Enhance your professional skills.'],
          className: 'flex items-center mt-2',
        },
      ],
    },
    {
      image: { src: 'images/benefits/enhanced-experience.webp' },
      heading: 'Enhanced CX/UX',
      body: [
        'Develop deeper insights into customer needs, leading to more personalized and engaging experiences. The ICP Playbook helps you create customer experiences that resonate and delight.',
      ],
      bullets: [
        {
          body: ['Deeper customer insights.'],
          className: 'flex items-center mt-2',
        },
        {
          body: ['More personalized experiences.'],
          className: 'flex items-center mt-2',
        },
      ],
    },
  ],
};
