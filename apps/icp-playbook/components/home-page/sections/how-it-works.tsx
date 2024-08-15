'use client';
import { ContentContainer, IContent, CardGrid, cn } from '@spwntch/react-ui';

type Props = { content: IContent; className?: string };

const HowItWorks = ({ content, className }: Props) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className={cn('flex-col pt-12 pb-28', className)}>
      <div className="md:container px-3">
        <ContentContainer innerContent={header} className="mb-12" />
        <CardGrid cards={content.bullets} />
      </div>
    </div>
  );
};

export default HowItWorks;
