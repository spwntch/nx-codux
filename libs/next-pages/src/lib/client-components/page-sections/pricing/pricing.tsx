'use client';

import { ContentContainer, IContent, SimplePricing } from '@spwntch/react-ui';

export interface BenefitsProps {
  content: IContent;
  onCtaClick: () => void;
}

const Pricing = ({ content, onCtaClick }: BenefitsProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className="flex-col pt-12 pb-28">
      <div className="container">
        <ContentContainer innerContent={header} />
        <SimplePricing onCtaClick={onCtaClick} />
        {/* {content.bullets && <FaqAccordion faqs={content.bullets} />} */}
      </div>
    </div>
  );
};

export default Pricing;
