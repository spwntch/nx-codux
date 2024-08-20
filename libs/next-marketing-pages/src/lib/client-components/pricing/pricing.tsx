'use client';

import {
  cn,
  ContentContainer,
  IContent,
  IPricing,
  SimplePricing,
} from '@spwntch/react-ui';

interface PricingProps {
  id: string;
  pricingContent: IContent;
  valueContent: IContent[];
  costContent: IPricing;
  className?: string;
  onCtaClick: () => void;
}

export const Pricing = ({
  id,
  pricingContent,
  valueContent,
  costContent,
  className,
  onCtaClick,
}: PricingProps) => {
  return (
    <div id={id} className={cn('flex-col pt-12 pb-28', className)}>
      <div className="md:container px-3">
        <ContentContainer innerContent={pricingContent} />
        <SimplePricing
          valueContent={valueContent}
          costContent={costContent}
          onCtaClick={onCtaClick}
        />
        {/* {content.bullets && <FaqAccordion faqs={content.bullets} />} */}
      </div>
    </div>
  );
};
