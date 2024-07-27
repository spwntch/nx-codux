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
    <div className="flex-col pt-12 pb-28">
      <div className="container">
        <ContentContainer innerContent={header} />
        {content.bullets && <FeatureGrid features={content.bullets} />}
      </div>
    </div>
  );
};

export default ProductSummary;
