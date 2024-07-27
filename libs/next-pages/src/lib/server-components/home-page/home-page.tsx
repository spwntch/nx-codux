'use client';

import {
  FullImageHero,
  IContent,
  IImage,
  LogoCarousel,
} from '@spwntch/react-ui';

import {
  Benefits,
  DiveIn,
  Faqs,
  HowItWorks,
  Pricing,
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
  benefits: IContent;
  tellMeMore: IContent;
  howItWorks: IContent;
  diveIn: IContent;
  faqs: IContent;
  pricing: IContent;
  testimonials: IContent;
}

const HomePage = ({
  hero,
  clientLogos,
  productSummary,
  benefits,
  tellMeMore,
  howItWorks,
  diveIn,
  faqs,
  pricing,
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
        <Benefits content={benefits} />
        <HowItWorks content={howItWorks} />
        <TellMeMore content={tellMeMore} />
      </div>
      <div id="faq">
        <Faqs content={faqs} />
        <Pricing content={pricing} />
        <DiveIn content={diveIn} />
      </div>
      {/* <Testimonials content={testimonials} /> */}
      {/* <HowItWorks content={testimonials} /> */}
    </div>
  );
};

export default HomePage;
