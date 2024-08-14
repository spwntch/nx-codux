import { IContent } from '@spwntch/react-ui'; // Adjust the import path as needed

const HOW_IT_WORKS: IContent = {
  heading: { content: 'Our Journey Mapping Process' },
  bullets: [
    {
      numbered: true,
      heading: 'Discovery',
      body: [
        'We begin by understanding your business needs and customer pain points.',
      ],
    },
    {
      numbered: true,
      heading: 'Mapping',
      body: [
        'Using our advanced tools, we map out the entire customer journey, identifying key touchpoints.',
      ],
    },
    {
      numbered: true,
      heading: 'Analysis',
      body: [
        'Our experts analyze the journey map to highlight areas for improvement and opportunities for optimization.',
      ],
    },
    {
      numbered: true,
      heading: 'Implementation',
      body: [
        'We work with your team to implement the recommended changes and track the results.',
      ],
    },
  ],
  // Visuals can be added here if required by the component (e.g., infographics or flowcharts)
};

export default HOW_IT_WORKS;
