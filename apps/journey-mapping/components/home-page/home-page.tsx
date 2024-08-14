'use client';

import {
  FullImageHero,
  IContent,
  IImage,
  IMdxDoc,
  IPricing,
  LogoCarousel,
} from '@spwntch/react-ui';

import { useRouter } from 'next/navigation';
import Benefits from './sections/benefits';
import CaseStudies from './sections/case-studies';
import Faqs from './sections/faqs';
import FinalCta from './sections/final-cta';
import HowItWorks from './sections/how-it-works';
import Pricing from './sections/pricing';

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
  pricing: IContent;
  value: IContent[];
  cost: IPricing;
  finalCta: IContent;
  // productSummary: IContent;
  // diveIn: IContent;
  // about: {
  //   youtubeId: string;
  //   content: IContent;
  //   stats: { label: string; value: string }[];
  // };

  // testimonials: IContent;
}

const HomePage = ({
  hero,
  clientLogos,
  benefits,
  caseStudies,
  howItWorks,
  faqs,
  pricing,
  value,
  cost,
  finalCta,
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
      <Benefits content={benefits} className="bg-muted" />
      <CaseStudies
        content={caseStudies.content}
        articles={caseStudies.articles}
      />
      <HowItWorks content={howItWorks} className="bg-muted" />
      <Faqs id="faq" content={faqs} />
      <Pricing
        id="pricing"
        pricingContent={pricing}
        valueContent={value}
        costContent={cost}
        className="bg-muted"
        onCtaClick={() => handleLinkTo('#get-started')}
      />
      <FinalCta id="get-started" content={finalCta} />
    </div>
  );
};

export default HomePage;
