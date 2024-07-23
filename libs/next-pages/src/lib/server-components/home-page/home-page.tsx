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
    '/client-logos/aldor.svg',
    '/client-logos/hollard.svg',
    '/client-logos/media-24.svg',
    '/client-logos/nedbank.svg',
    '/client-logos/old-mutual.svg',
    '/client-logos/sanlam.svg',
    '/client-logos/vodacom.svg',
    '/client-logos/woolworths.svg',
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
      <LogoCarousel logos={clientLogos} className='bg-white'  />
      {/* <Benefits benefits={benefits} /> */}
    </>
  );
};

export default HomePage;
