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
  HowItWorks,
  Pricing,
} from '@/next-marketing-pages';
import { useRouter } from 'next/navigation';

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
          if (ctaIndex === 0) handleLinkTo('#journey-mapping-cta-form');
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
        onCtaClick={() => handleLinkTo('#journey-mapping-cta-form')}
        className="bg-muted"
      />
      <HowItWorks content={howItWorks} />
      <Faqs id="faq" content={faqs} className="bg-muted" />
      <Pricing
        id="pricing"
        pricingContent={pricing}
        valueContent={value}
        costContent={cost}
        onCtaClick={() => handleLinkTo('#journey-mapping-cta-form')}
      />
      <About id="about" {...about} className="bg-muted" />
      <Blog
        content={blog.content}
        articles={blog.articles}
        className="bg-muted"
      />

      {(finalCta.cta || finalCta.ctas?.length) && (
        <CtaForm id="journey-mapping-cta-form" content={finalCta} />
      )}
    </div>
  );
};

export default HomePage;
