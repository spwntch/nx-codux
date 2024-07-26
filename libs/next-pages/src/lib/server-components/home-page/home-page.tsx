'use client';

import {
  FullImageHero,
  IContent,
  IImage,
  LogoCarousel,
} from '@spwntch/react-ui';

import { Benefits, Faqs, ProductSummary, Testimonials, } from '../../client-components';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  clientLogos: string[];
  productSummary: IContent;
  howItWorks: IContent;
  benefits: IContent;
  faqs: IContent;
  testimonials: IContent;
}

const HomePage = ({
  hero,
  clientLogos,
  productSummary,
  howItWorks,
  benefits,
  faqs,
  testimonials,
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
        <Faqs content={faqs} />
        {/* <Testimonials content={testimonials} /> */}
        {/* <HowItWorks content={testimonials} /> */}
      </div>
    </>
  );
};

export default HomePage;
