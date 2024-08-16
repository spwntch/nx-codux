'use client';
import { ContentContainer, IContent, CardGrid, cn } from '@spwntch/react-ui';

type HowItWorksProps = { content: IContent; className?: string };

export const HowItWorks = ({ content, className }: HowItWorksProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className={cn('flex-col pt-12 pb-28', className)}>
      <div className="md:container px-3 ">
        <ContentContainer innerContent={header} className='mb-12' />
        <CardGrid cards={content.bullets} />
      </div>
    </div>
  );
};

