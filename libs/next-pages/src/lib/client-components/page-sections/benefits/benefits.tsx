'use client';

import { AlternatingSplitBenefits, ContentContainer, IContent } from '@spwntch/react-ui';

export interface BenefitsProps {
  content: IContent;
}

const Benefits = ({ content }: BenefitsProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return <div className="flex-col pt-12 pb-36 px-6 bg-muted">
    <ContentContainer innerContent={header}  />
    {content.bullets && <AlternatingSplitBenefits benefits={content.bullets} />}
  </div>;
};

export default Benefits;
