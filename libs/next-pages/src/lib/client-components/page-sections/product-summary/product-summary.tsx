'use client';
import { ContentContainer, FeatureGrid, IContent } from '@spwntch/react-ui';

type Props = { content: IContent };

const ProductSummary = ({ content }: Props) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className="flex-col py-12">
      <ContentContainer innerContent={header}  />
      {content.bullets && <FeatureGrid features={content.bullets} />}
    </div>
  );
};

export default ProductSummary;
