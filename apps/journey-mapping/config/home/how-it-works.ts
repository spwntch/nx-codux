import { IContent } from '@spwntch/react-ui'; // Adjust the import path as needed

const HOW_IT_WORKS: IContent = {
  heading: { content: 'Our Journey Mapping Process' },
  subheading: {
    content: 'Charting the Path to Unforgettable Customer Experiences',
  },
  body: {
    content: [
      'Imagine a world where every interaction with your brand is purposeful, impactful, and leaves a lasting impression. Our journey mapping process is designed to guide you toward that reality.',
      'By shedding light on every step your customers take, we help you uncover hidden opportunities and craft experiences that truly resonate. With each map we create, we empower you to connect more deeply with your audience, turning insights into transformative customer journeys that set your brand apart.',
    ],
    className:'max-w-4xl '
  },
  bullets: [
    {
      numbered: true,
      heading: 'Deep Dive Discovery',
      subheading: 'Uncovering Key Insights',
      body: [
        'We begin by immersing ourselves in your business to understand your objectives and customer expectations.',
        'Our research captures the essence of your customer’s needs, laying the groundwork for a journey map that reflects real-world experiences.',
      ],
    },
    {
      numbered: true,
      heading: 'Journey Mapping Excellence',
      subheading: 'Visualizing Every Touchpoint',
      body: [
        'With advanced tools, we create a detailed map of your customer’s journey.',
        'Every touchpoint, channel, and interaction is meticulously charted to provide a holistic view of the customer experience, highlighting moments that matter.',
      ],
    },
    {
      numbered: true,
      heading: 'Insightful Analysis',
      subheading: 'Turning Data into Direction',
      body: [
        'Our experts analyze the journey map to reveal patterns and opportunities.',
        'We transform data into actionable insights, giving you the knowledge to refine and optimize your customer journey for greater satisfaction and engagement.',
      ],
    },
    {
      numbered: true,
      heading: 'Future-Focused Mapping',
      subheading: 'Envisioning Tomorrow’s Journeys',
      body: [
        'For those looking to innovate, we help envision future customer journeys.',
        'By anticipating trends and customer needs, we design pathways that keep you ahead of the curve, ensuring your brand continues to deliver standout experiences.',
      ],
    },
  ],
  // Visuals can be added here if required by the component (e.g., infographics or flowcharts)
};

export default HOW_IT_WORKS;