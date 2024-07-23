'use client';
import { ContentSection, IContent } from '@spwntch/react-ui';

type Props = { content: IContent };

const ProductSummary = ({ content }: Props) => {
  return <ContentSection innerContent={content} />;
};

export default ProductSummary;
