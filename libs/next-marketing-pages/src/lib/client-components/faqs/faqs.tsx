'use client';

import {
  cn,
  ContentContainer,
  FaqAccordion,
  IContent,
} from '@spwntch/react-ui';

export interface FaqsProps {
  id: string;
  content: IContent;
  className?: string;
}

export const Faqs = ({ id, content, className }: FaqsProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div id={id} className={cn('flex-col pt-12 pb-28', className)}>
      <div className="md:container px-3">
        <ContentContainer innerContent={header} />
        {content.bullets && <FaqAccordion faqs={content.bullets} />}
      </div>
    </div>
  );
};
