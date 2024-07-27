
'use client';

import { ContentContainer, IContent } from '@spwntch/react-ui';

export interface BenefitsProps {
  content: IContent;
}

const Pricing = ({ content }: BenefitsProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className="flex-col pt-12 pb-28 bg-muted">
      <div className="container">
        <ContentContainer innerContent={header} />
        {/* {content.bullets && <FaqAccordion faqs={content.bullets} />} */}
      </div>
    </div>
  );
};

export default Pricing;
