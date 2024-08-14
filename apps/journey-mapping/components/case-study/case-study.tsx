'use client';
import { Article, IMdxDocFrontMatter } from '@spwntch/react-ui';
import { notFound } from 'next/navigation';
import React, { JSXElementConstructor, ReactElement } from 'react';

type Props = {
  meta: IMdxDocFrontMatter;
  content: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
};

const CaseStudy = ({ meta, content }: Props) => {
  if (!content) return notFound();

  return <Article meta={meta} content={content} />;
};

export default CaseStudy;
