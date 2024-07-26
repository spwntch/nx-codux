'use client';

import {
  AlternatingSplitBenefits,
  ContentContainer,
  FaqAccordion,
  IContent,
} from '@spwntch/react-ui';

export interface BenefitsProps {
  content: IContent;
}

const Faqs = ({ content }: BenefitsProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className="flex-col py-12 px-6">
      <ContentContainer innerContent={header} />
      {content.bullets && <FaqAccordion faqs={content.bullets} />}
    </div>
  );
};

export default Faqs;
