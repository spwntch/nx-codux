'use client';

import {
  FullImageHero,
  IContent,
  IImage,
  IPricing,
  LogoCarousel,
} from '@spwntch/react-ui';

import { useRouter } from 'next/navigation';
import ProductSummary from './sections/product-summary';
import HowItWorks from './sections/how-it-works';
import AboutUs from './sections/about-us';
import Benefits from './sections/benefits';
import Faqs from './sections/faqs';
import GetStarted from './sections/get-started';
import Pricing from './sections/pricing';
import DiveIn from './sections/dive-in';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  clientLogos: string[];
  productSummary: IContent;
  benefits: IContent;
  howItWorks: IContent;
  diveIn: IContent;
  faqs: IContent;
  pricing: IContent;
  value: IContent[];
  cost: IPricing;
  about: {
    youtubeId: string;
    content: IContent;
    stats: { label: string; value: string }[];
  };
  getStarted: IContent;

  // testimonials: IContent;
}

const HomePage = ({
  hero,
  clientLogos,
  productSummary,
  benefits,
  howItWorks,
  diveIn,
  faqs,
  pricing,
  value,
  cost,
  about,
  getStarted,
}: HomePageProps) => {
  const router = useRouter();
  const handleLinkTo = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col">
      <FullImageHero
        image={hero.image}
        innerContent={hero.content}
        className="text-white"
        // vAlign="middle"
        hAlign="left"
        onCtaClick={(ctaIndex: number) => {
          if (ctaIndex === 0) handleLinkTo('#get-started');
        }}
        
      />
      <LogoCarousel logos={clientLogos} className="bg-white" />
      <Benefits content={benefits} />
      {/* <ProductSummary id="product" content={productSummary} />
      <HowItWorks content={howItWorks} className="bg-muted" />
      <DiveIn
        content={diveIn}
        className="bg-muted"
        onCtaClick={() => handleLinkTo('#get-started')}
      />
      <Faqs id="faq" content={faqs} />
      <Pricing
        id="pricing"
        pricingContent={pricing}
        valueContent={value}
        costContent={cost}
        className="bg-muted"
        onCtaClick={() => handleLinkTo('#get-started')}
      />
      <AboutUs id="about" {...about} />
      <GetStarted id="get-started" content={getStarted} className="bg-muted" /> */}
    </div>
  );
};

export default HomePage;
