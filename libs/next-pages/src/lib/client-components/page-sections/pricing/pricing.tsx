'use client';

import {
  cn,
  ContentContainer,
  IContent,
  SimplePricing,
} from '@spwntch/react-ui';

export interface PricingProps {
  id: string;
  pricingContent: IContent;
  valueContent: IContent[];
  className?: string;
  onCtaClick: () => void;
}

const Pricing = ({
  id,
  pricingContent,
  valueContent,
  className,
  onCtaClick,
}: PricingProps) => {
  const header: IContent = {
    heading: pricingContent.heading,
    subheading: pricingContent.subheading,
    body: pricingContent.body,
  };
  return (
    <div id={id} className={cn('flex-col pt-12 pb-28', className)}>
      <div className="container">
        <ContentContainer innerContent={header} />
        <SimplePricing valueContent={valueContent} onCtaClick={onCtaClick} />
        {/* {content.bullets && <FaqAccordion faqs={content.bullets} />} */}
      </div>
    </div>
  );
};

export default Pricing;
