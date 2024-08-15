'use client';

import {
  AlternatingSplitBenefits,
  cn,
  ContentContainer,
  IContent,
} from '@spwntch/react-ui';

export interface BenefitsProps {
  content: IContent;
  className?:string
}

const Benefits = ({ content, className }: BenefitsProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className={cn("flex-col pt-12 pb-28", className)}>
      <div className="md:container px-3">
        <ContentContainer innerContent={header} />
        {content.bullets && (
          <AlternatingSplitBenefits benefits={content.bullets} />
        )}
      </div>
    </div>
  );
};

export default Benefits;
