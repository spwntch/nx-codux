'use client';
import { Article, IMdxDocFrontMatter } from '@spwntch/react-ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { JSXElementConstructor, ReactElement } from 'react';

type Props = {
  meta: IMdxDocFrontMatter;
  content: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
};

const CaseStudy = ({ meta, content }: Props) => {
  const router = useRouter();

  return (
    <Article
      meta={meta}
      content={content}
      backTo={{ label: 'BACK', href: '/' }}
      onBackTo={(href) => router.push(href)}
      vAlign="bottom"
    />
  );
};

export default CaseStudy;
