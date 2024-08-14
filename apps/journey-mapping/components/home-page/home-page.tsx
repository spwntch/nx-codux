'use client';

import {
  FullImageHero,
  IContent,
  IImage,
  IMdxDoc,
  LogoCarousel,
} from '@spwntch/react-ui';

import { useRouter } from 'next/navigation';
import Benefits from './sections/benefits';
import CaseStudies from './sections/case-studies';
import HowItWorks from './sections/how-it-works';
import Faqs from './sections/faqs';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  clientLogos: string[];
  benefits: IContent;
  caseStudies: {
    content: IContent;
    articles: IMdxDoc[];
  };
  howItWorks: IContent;
  faqs: IContent;
  // productSummary: IContent;
  // diveIn: IContent;
  // pricing: IContent;
  // value: IContent[];
  // cost: IPricing;
  // about: {
  //   youtubeId: string;
  //   content: IContent;
  //   stats: { label: string; value: string }[];
  // };
  // getStarted: IContent;

  // testimonials: IContent;
}

const HomePage = ({
  hero,
  clientLogos,
  benefits,
  caseStudies,
  howItWorks,
  faqs
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
        // vAlign="bottom"
        hAlign="left"
        onCtaClick={(ctaIndex: number) => {
          if (ctaIndex === 0) handleLinkTo('#get-started');
        }}
      />
      <LogoCarousel logos={clientLogos} className="bg-white" />
      <Benefits content={benefits} className="bg-muted"/>
      <CaseStudies content={caseStudies.content} articles={caseStudies.articles} />
      <HowItWorks content={howItWorks} className="bg-muted" />
      <Faqs id="faq" content={faqs} />
      {/* <ProductSummary id="product" content={productSummary} />
      <DiveIn
        content={diveIn}
        className="bg-muted"
        onCtaClick={() => handleLinkTo('#get-started')}
      />
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
