'use client';

import {
  About,
  Benefits,
  CtaBanner,
  CtaForm,
  Faqs,
  HowItWorks,
  Pricing,
  ProductSummary,
} from '@/next-marketing-pages';
import {
  FullImageHero,
  IContent,
  IImage,
  IPricing,
  LogoCarousel,
} from '@spwntch/react-ui';

import { useRouter } from 'next/navigation';

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
        vAlign="middle"
        hAlign="left"
        onCtaClick={(ctaIndex: number) => {
          if (ctaIndex === 0) handleLinkTo('#icp-playbook-cta-form');
        }}
      />
      <LogoCarousel logos={clientLogos} className="bg-white" />
      <ProductSummary id="product" content={productSummary} />
      <HowItWorks content={howItWorks} className="bg-muted" />
      <Benefits content={benefits} />
      <CtaBanner
        content={diveIn}
        className="bg-muted"
        onCtaClick={() => handleLinkTo('#icp-playbook-cta-form')}
      />
      {/* <LearnMore content={learnMore} /> */}
      <Faqs id="faq" content={faqs} />
      <Pricing
        id="pricing"
        pricingContent={pricing}
        valueContent={value}
        costContent={cost}
        className="bg-muted"
        onCtaClick={() => handleLinkTo('#icp-playbook-cta-form')}
      />
      <About id="about" {...about} />
      {(getStarted.cta || getStarted.ctas?.length) && (
        <CtaForm id="icp-playbook-cta-form" content={getStarted} />
      )}
    </div>
  );
};

export default HomePage;
