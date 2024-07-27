'use client';

import {
  FullImageHero,
  IContent,
  IImage,
  LogoCarousel,
} from '@spwntch/react-ui';

import {
  Benefits,
  Faqs,
  ProductSummary,
  TellMeMore,
} from '../../client-components';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  clientLogos: string[];
  productSummary: IContent;
  tellMeMore: IContent;
  howItWorks: IContent;
  benefits: IContent;
  faqs: IContent;
  testimonials: IContent;
}

const HomePage = ({
  hero,
  clientLogos,
  productSummary,
  tellMeMore,
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
        className="text-white"
        vAlign="middle"
        hAlign="left"
      />

      <LogoCarousel logos={clientLogos} className="bg-white" />
      <div >
        <ProductSummary content={productSummary} />
        <TellMeMore content={tellMeMore} />
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
