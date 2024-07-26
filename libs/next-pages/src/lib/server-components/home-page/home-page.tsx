'use client';

import { IContent, IImage } from '@spwntch/react-ui';

import {
  Benefits,
  HowItWorks,
  ProductSummary
} from '../../client-components';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  clientLogos: string[];
  productSummary: IContent;
  howItWorks: IContent;
  benefits: IContent;
  testimonials: IContent[];
  caseStudies: IContent[];
}

const HomePage = ({
  hero,
  clientLogos,
  productSummary,
  howItWorks,
  benefits,
  testimonials,
  caseStudies,
}: HomePageProps) => {
  return (
    <>
      {/* <FullImageHero
        image={hero.image}
        innerContent={hero.content}
        hAlign="left"
        vAlign="bottom"
        className="text-white"
      />
      <LogoCarousel logos={clientLogos} className="bg-white" /> */}
      <ProductSummary content={productSummary} />
      {/* <HowItWorks content={howItWorks} /> */}
      <Benefits content={benefits} />
      {/* <HowItWorks content={testimonials} /> */}
      {/* <HowItWorks content={caseStudies} /> */}
    </>
  );
};

export default HomePage;
