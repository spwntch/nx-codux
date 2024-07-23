import { IContent, IImage } from '@spwntch/react-ui';
import { Benefits, Hero, LogoCarousel } from '../../client-components';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
}

const HomePage = ({ hero }: HomePageProps) => {
  const heroImage: IImage = {
    src: '/images/coworkers-in-casual-workshop.webp',
    darken: true,
  };
  const heroContent: IContent = {
    title: {
      content: 'Unlock Your Ideal Customers with the ICP Playbook',
      className: 'text-white',
    },
    subTitle: {
      content:
        'Transform your marketing and product strategies with our comprehensive playbook.',
      className: 'text-white',
    },
    body: {
      content: [
        'Achieve higher conversion rates, improved team alignment, and faster, data-driven results with our playbook.',
      ],
      className: 'text-white',
    },
    bullets: [
      {
        body: 'Struggling to identify and target the right customers?',
        className: 'text-white',
      },
      {
        body: 'Wasting marketing resources on low-potential leads?',
        className: 'text-white',
      },
      {
        body: 'Facing challenges in aligning your marketing and sales teams?',
        className: 'text-white',
      },
      {
        body: 'Overwhelmed by data but unsure how to leverage it effectively?',
        className: 'text-white',
      },
    ],
  };

  const clientLogos = [
    '/client-logos/brooklyn-colored.svg',
    '/client-logos/hamilton-colored.svg',
    '/client-logos/milano-colored.svg',
    '/client-logos/nairobi-colored.svg',
    '/client-logos/oslo-colored.svg',
    '/client-logos/phoenix-colored.svg',
    '/client-logos/san-francisco-colored.svg',
    '/client-logos/scale-colored.svg',
    '/client-logos/theo-colored.svg',
  ];

  const benefits: { image: IImage; content: IContent }[] = [
    {
      image: { src: '/images/dartboard.webp' },
      content: { title: 'Improved Targeting' },
    },
    {
      image: { src: '/images/purchase.webp' },
      content: { title: 'Increased Conversions' },
    },
    {
      image: { src: '/images/teamwork.webp' },
      content: { title: 'Team Alignment' },
    },
    {
      image: { src: '/images/growth.webp' },
      content: { title: 'Professional Growth' },
    },
  ];
  return (
    <>
      <Hero image={heroImage} content={hero.content} />
      {/* <LogoCarousel logos={clientLogos} /> */}
      {/* <Benefits benefits={benefits} /> */}
    </>
  );
};

export default HomePage;
