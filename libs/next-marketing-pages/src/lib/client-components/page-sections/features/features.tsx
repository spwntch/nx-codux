'use client';
import {
  cn,
  ContentContainer,
  FeatureGridOne,
  FeatureGridTwo,
  IContent,
} from '@spwntch/react-ui';

type FeaturesGridProps = {
  id: string;
  content: IContent;
  gridStyle?: 'one' | 'two';
  className?: string;
};

export const FeaturesGrid = ({
  id,
  content,
  gridStyle = 'one',
  className,
}: FeaturesGridProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div id={id} className={cn('flex-col pt-12 pb-28', className)}>
      <div className="md:container px-3">
        <ContentContainer innerContent={header} />
        {content.bullets ? (
          gridStyle === 'two' ? (
            <FeatureGridTwo features={content.bullets} className="mt-8" />
          ) : (
            <FeatureGridOne features={content.bullets} className="mt-8" />
          )
        ) : null}
      </div>
    </div>
  );
};
