'use client';

import {
  cn,
  ContentContainer,
  IContent,
  SimplePricing,
} from '@spwntch/react-ui';

interface Props {
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
}: Props) => {
  return (
    <div id={id} className={cn('flex-col pt-12 pb-28', className)}>
      <div className="container">
        <ContentContainer innerContent={pricingContent} />
        <SimplePricing valueContent={valueContent} onCtaClick={onCtaClick} />
        {/* {content.bullets && <FaqAccordion faqs={content.bullets} />} */}
      </div>
    </div>
  );
};

export default Pricing;
