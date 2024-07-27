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
  HowItWorks,
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
    <div className="flex flex-col">
      <FullImageHero
        image={hero.image}
        innerContent={hero.content}
        className="text-white"
        vAlign="middle"
        hAlign="left"
      />
      <LogoCarousel logos={clientLogos} className="bg-white" />
      <div id="product">
        <ProductSummary content={productSummary} />
        <HowItWorks content={howItWorks} />
        <Benefits content={benefits} />
        <TellMeMore content={tellMeMore} />
      </div>
      <div id="faq">
        <Faqs content={faqs} />
      </div>
      {/* <Testimonials content={testimonials} /> */}
      {/* <HowItWorks content={testimonials} /> */}
    </div>
  );
};

export default HomePage;
