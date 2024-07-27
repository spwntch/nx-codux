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
    <div id="product"className="flex-col py-12">
      <div className="container">

      <ContentContainer innerContent={header}  />
      {content.bullets && <FeatureGrid features={content.bullets} />}
      </div>
    </div>
  );
};

export default ProductSummary;
