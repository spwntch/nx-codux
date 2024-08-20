'use client';
import { Article, IMdxDocFrontMatter } from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';
import { JSXElementConstructor, ReactElement } from 'react';

type Props = {
  meta: IMdxDocFrontMatter;
  toc: any;
  content: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
};

export const ArticlePage = ({ meta, toc, content }: Props) => {
  const router = useRouter();

  return (
    <Article
      meta={meta}
      toc={toc}
      content={content}
      backTo={{ label: 'BACK', href: '/' }}
      onBackTo={(href) => router.push(href)}
      vAlign="bottom"
    />
  );
};

