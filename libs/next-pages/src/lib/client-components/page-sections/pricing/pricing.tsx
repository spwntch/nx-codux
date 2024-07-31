'use client';

import {
  cn,
  ContentContainer,
  IContent,
  SimplePricing,
} from '@spwntch/react-ui';

export interface PricingProps {
  id: string;
  content: IContent;
  className?: string;
  onCtaClick: () => void;
}

const Pricing = ({ id, content, className, onCtaClick }: PricingProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div id={id} className={cn('flex-col pt-12 pb-28', className)}>
      <div className="container">
        <ContentContainer innerContent={header} />
        <SimplePricing onCtaClick={onCtaClick} />
        {/* {content.bullets && <FaqAccordion faqs={content.bullets} />} */}
      </div>
    </div>
  );
};

export default Pricing;
