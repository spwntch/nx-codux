'use client';
import {
  cn,
  ContentContainer,
  IContent
} from '@spwntch/react-ui';

type ProductsProps = { content: IContent; className?: string };

export const Products = ({ content, className }: ProductsProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className={cn('flex-col pt-12 pb-28 h-full', className)}>
      <div className="md:container px-3 h-full">
        <ContentContainer innerContent={header} className="mb-12" />
        <pre>{JSON.stringify(content.bullets, null, 2)}</pre>

        {/* <CardGrid cards={content.bullets} /> */}
      </div>
    </div>
  );
};
