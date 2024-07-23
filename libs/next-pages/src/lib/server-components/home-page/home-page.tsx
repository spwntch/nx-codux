import { IContent, IImage } from '@spwntch/react-ui';
import {
  Benefits,
  Hero,
  HowItWorks,
  LogoCarousel,
  ProductSummary,
} from '../../client-components';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  clientLogos: string[];
  productSummary: IContent;
  howItWorls: IContent;
  benefits: { image: IImage; content: IContent }[];
}

const HomePage = ({
  hero,
  clientLogos,
  productSummary,
  howItWorls,
  benefits,
}: HomePageProps) => {
  return (
    <>
      <Hero image={hero.image} content={hero.content} />
      <LogoCarousel logos={clientLogos} className="bg-white" />
      <ProductSummary content={productSummary} />
      <HowItWorks content={howItWorls} />
      <Benefits benefits={benefits} />
    </>
  );
};

export default HomePage;
