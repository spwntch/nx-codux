import { IContent, IImage } from '@spwntch/react-ui';
import { Benefits, Hero, LogoCarousel } from '../../client-components';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
}

const HomePage = ({ hero }: HomePageProps) => {
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
      <Hero image={hero.image} content={hero.content} />
      {/* <LogoCarousel logos={clientLogos} /> */}
      {/* <Benefits benefits={benefits} /> */}
    </>
  );
};

export default HomePage;
