'use client';

import {
  FullImageHero,
  IContent,
  IImage,
  IMdxDoc,
  IPricing,
  LogoCarousel,
} from '@spwntch/react-ui';

import {
  About,
  Benefits,
  Blog,
  CaseStudies,
  CtaBanner,
  CtaForm,
  Faqs,
} from '@/next-page-sections';
import { useRouter } from 'next/navigation';
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
  diveIn: IContent;
  howItWorks: IContent;
  faqs: IContent;
  pricing: IContent;
  value: IContent[];
  cost: IPricing;
  blog: {
    content: IContent;
    articles: IMdxDoc[];
  };
  finalCta: IContent;
  about: {
    youtubeId: string;
    content: IContent;
    stats: { label: string; value: string }[];
  };
}

const HomePage = ({
  hero,
  clientLogos,
  benefits,
  caseStudies,
  diveIn,
  howItWorks,
  faqs,
  pricing,
  value,
  cost,
  about,
  blog,
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
      <CtaBanner
        content={diveIn}
        onCtaClick={() => handleLinkTo('#get-started')}
        className="bg-muted"
      />
      <HowItWorks content={howItWorks} />
      <Faqs id="faq" content={faqs} className="bg-muted" />
      <Pricing
        id="pricing"
        pricingContent={pricing}
        valueContent={value}
        costContent={cost}
        onCtaClick={() => handleLinkTo('#get-started')}
      />
      <About id="about" {...about} className="bg-muted" />
      <Blog
        content={blog.content}
        articles={blog.articles}
        className="bg-muted"
      />
      <CtaForm
        id="get-started"
        content={finalCta}
        ctaTag="start-automation_journey-mapping-get-started-form
"
      />
    </div>
  );
};

export default HomePage;
