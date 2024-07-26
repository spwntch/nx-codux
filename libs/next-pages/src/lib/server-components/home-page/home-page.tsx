'use client';

import { FullImageHero, IContent, IImage, LogoCarousel } from '@spwntch/react-ui';

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
      <FullImageHero
        image={hero.image}
        innerContent={hero.content}
        // hAlign="left"
        // vAlign="top"
        className="text-white"
      />

      <LogoCarousel logos={clientLogos} className="bg-white" />
      <div className="px-3 md:container">
      <ProductSummary content={productSummary} />
      {/* <HowItWorks content={howItWorks} /> */}
      <Benefits content={benefits} />
      {/* <HowItWorks content={testimonials} /> */}
      {/* <HowItWorks content={caseStudies} /> */}
      </div>
    </>
  );
};

export default HomePage;
