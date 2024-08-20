'use client';
import { cn, ContentContainer, FeatureGrid, IContent } from '@spwntch/react-ui';

type FeaturesGridProps = {
  id: string;
  content: IContent;
  className?: string;
};

export const FeaturesGrid = ({ id, content, className }: FeaturesGridProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div id={id} className={cn('flex-col pt-12 pb-28', className)}>
      <div className="md:container px-3">
        <ContentContainer innerContent={header} />
        {content.bullets && <FeatureGrid features={content.bullets} />}
      </div>
    </div>
  );
};
