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
  // productSummary: IContent;
  // howItWorks: IContent;
  // diveIn: IContent;
  // faqs: IContent;
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
}: HomePageProps) => {
  const router = useRouter();
  const handleLinkTo = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col">
      {/* <FullImageHero
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
      <Benefits content={benefits} /> */}
      <CaseStudies content={caseStudies.content} articles={caseStudies.articles} />
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
