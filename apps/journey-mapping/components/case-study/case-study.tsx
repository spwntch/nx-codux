'use client';
import { Article, IMdxDocFrontMatter } from '@spwntch/react-ui';
import { notFound, useRouter } from 'next/navigation';
import React, { JSXElementConstructor, ReactElement } from 'react';

type Props = {
  meta: IMdxDocFrontMatter;
  content: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
};

const CaseStudy = ({ meta, content }: Props) => {
  const router = useRouter();
  if (!content) return notFound();

  return (
    <Article
      meta={meta}
      content={content}
      backTo={{ label: 'BACK', href: '/' }}
      onBackTo={(href) => router.push(href)}
    />
  );
};

export default CaseStudy;
