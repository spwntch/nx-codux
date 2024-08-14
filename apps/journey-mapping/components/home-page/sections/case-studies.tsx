'use client';

import { ArticleGrid, cn, ContentContainer, IContent, IMdxDoc } from '@spwntch/react-ui';

export interface CaseStudiesProps {
  content: IContent;
  articles: IMdxDoc[];
  className?: string;
}

const CaseStudies = ({ content, articles, className }: CaseStudiesProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className={cn('flex-col pt-12 pb-28', className)}>
      <div className="container">
        <ContentContainer innerContent={header} />
        <ArticleGrid
          articles={articles}
          onClickArticle={(slug) =>
            console.log(`Navigating to article: ${slug}`)
          }
        />
      </div>
    </div>
  );
};

export default CaseStudies;
