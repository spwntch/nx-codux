import { IContent, IMdxDoc } from '@spwntch/react-ui';

const SANLAM: IMdxDoc = {
  meta: {
    slug: 'sanlam',
    date: '2023-09-27',
    coverImage: '/images/case-studies/sanlam-cover.webp',
    authorName: 'Wagieda P.',
    authorAvatar: '/images/case-studies/sanlam-icon.webp',
    title: 'A Unified Client Experience',
    abstract: [
      'Discover how Sanlam, a centennial beacon in financial services, collaborated with Interact RDT, pioneers in behavioral insights. Together, they decoded the African financial psyche, crafted a unified client journey, and deepened market trust.',
    ],
    testimonial:
      'Interact RDT has proven to be a reliable and competent research partner. Their dedication to understanding the diverse financial psyches across our markets was instrumental in helping us refine our strategies. The insights we gained were actionable and deeply aligned with our vision for a unified digital experience. Their professionalism, attention to detail, and flexibility made this collaboration a resounding success.',
    keywords: [
      'Interact RDT',
      'Sanlam',
      'Customer Experience',
      'User Experience',
      'Market Research',
      'Financial Services',
      'African Markets',
      'Strategic Partnership',
      'Financial Psyche',
      'Target Customer',
      'Client Needs',
      'Market Alignment',
      'Diverse Clientele',
      'Behavioral Insights',
      'Research Methodologies',
      'Quality of Service',
      'Market Diversity',
      'Holistic Metrics',
      'Timeliness & Efficiency',
      'Open Communication',
      'Flexibility & Adaptability',
      'Tailored Financial Solutions',
      'Unified Digital Experience',
      'Deepened Market Trust',
      'Client Loyalty',
      'Discovery Session',
      'Business Growth',
      'Innovation',
      'Global Expertise',
      'Targeted Approach',
    ],
  },
};

const LIBERTY: IMdxDoc = {
  meta: {
    slug: 'liberty',
    date: '2018-07-23',
    coverImage: '/images/case-studies/liberty-cover.webp',
    authorName: 'Graham E.',
    authorAvatar: '/images/case-studies/liberty-icon.webp',

    title: 'Digital Mastery',
    abstract: [
      'The digital age demands flawless online interactions. When Liberty, a premier financial institution in South Africa, aimed to perfect its user experience and customer journey, the choice was clear: Interact RDT. Journey with Graham Easton as he recounts a collaboration defined by professionalism, invaluable insights, and grounded realism.',
    ],
    testimonial:
      'My experience with Interact has been specific around website UX testing and Customer Journey Mapping. In both these instances, they have been professional, insightful, and above all else, always been realistic in what will work for the business. We developed a true partnership approach. I therefore highly recommend them for this detailed and methodical approach.',
    keywords: [
      'Interact RDT',
      'Free Consultation',
      'Discovery Session',
      'Global Expertise',
      'Strategic Insight',
      'Targeted Approach',
      'Business Growth',
      'Innovation',
      'Challenges',
      'Expectations',
      'Liberty',
      'Enlightened Engagement',
      'Mystery Shopping',
      'Service Quality',
      'Customer Experience',
      'Online Panel Interviews',
      'Opinions',
      'Sentiments',
      'Onsite Insights',
      'Strategic Decisions',
      'Distinctive Qualities',
      'Endorsement',
      'Customer Focus',
      'Brand Experiences',
      'Customer Touchpoint',
      'Research Partner',
      'CX',
      'UX',
      'Market Research',
      'Product Strategy',
    ],
  },
};
export const CASE_STUDIES_GRID: IMdxDoc[] = [SANLAM, LIBERTY];

export const CASE_STUDIES: IContent = {
  heading: { content: `Proven Success with Leading Brands` },
  subheading: {
    content: `Discover how our Journey Mapping service has made a measurable impact for our clients.`,
  },
  body: {
    content: [
      `Our Journey Mapping service has empowered organizations like Liberty and Sanlam to enhance their customer experiences and drive business growth. By partnering with us, these industry leaders were able to align their teams around a unified customer journey strategy, optimize touchpoints, and gain valuable insights that transformed their customer interactions.`,
      `Explore our case studies to see the tangible results and benefits that our service has delivered.`,
    ],
    className: 'max-w-5xl',
  },
};
