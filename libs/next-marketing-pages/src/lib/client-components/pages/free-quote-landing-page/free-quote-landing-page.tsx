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
  FeaturesGrid,
} from '../../page-sections';

export interface FreeQuoteLandingPageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  clientLogos?: string[];
  benefits?: IContent;
  caseStudies?: {
    content: IContent;
    articles: IMdxDoc[];
  };
  ctaBanner?: IContent;
  productFeatures?: IContent;
  howItWorks?: IContent;
  faqs?: IContent;
  pricing?: IContent;
  value?: IContent[];
  cost?: IPricing;
  about?: {
    youtubeId: string;
    content: IContent;
    stats: { label: string; value: string }[];
  };
  blog?: {
    content: IContent;
    articles: IMdxDoc[];
  };
  finalCta?: IContent;
}

export const FreeQuoteLandingPage = ({
  hero,
  clientLogos,
  benefits,
  caseStudies,
  ctaBanner,
  productFeatures,
  howItWorks,
  faqs,
  pricing,
  value,
  cost,
  about,
  blog,
  finalCta,
}: FreeQuoteLandingPageProps) => {
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
          if (ctaIndex === 0) handleLinkTo('#cta-form');
        }}
      />
      {clientLogos && <LogoCarousel logos={clientLogos} className="bg-white" />}
      {benefits && <Benefits content={benefits} className="bg-muted" />}
      {caseStudies && (
        <CaseStudies
          content={caseStudies.content}
          articles={caseStudies.articles}
        />
      )}
      {ctaBanner && (
        <CtaBanner
          content={ctaBanner}
          onCtaClick={() => handleLinkTo('#cta-form')}
          className="bg-muted"
        />
      )}
      {productFeatures && (
        <FeaturesGrid id="product" content={productFeatures} />
      )}
      {howItWorks && <HowItWorks content={howItWorks} />}
      {faqs && <Faqs id="faq" content={faqs} className="bg-muted" />}
      {pricing && value && cost && (
        <Pricing
          id="pricing"
          pricingContent={pricing}
          valueContent={value}
          costContent={cost}
          onCtaClick={() => handleLinkTo('#cta-form')}
        />
      )}
      {about && <About id="about" {...about} className="bg-muted" />}
      {blog && (
        <Blog
          content={blog.content}
          articles={blog.articles}
          className="bg-muted"
        />
      )}
      {(finalCta?.cta || finalCta?.ctas?.length) && (
        <CtaForm id="cta-form" content={finalCta} />
      )}
    </div>
  );
};
