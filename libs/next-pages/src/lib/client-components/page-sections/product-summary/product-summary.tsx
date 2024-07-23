'use client';
import { ContentSection, IContent } from '@spwntch/react-ui';

type Props = { content: IContent };

const ProductSummary = ({ content }: Props) => {
  return <ContentSection innerContent={content} className='pt-32 max-w-4xl mx-auto' />;
};

export default ProductSummary;
