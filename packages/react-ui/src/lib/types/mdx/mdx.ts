import { JSXElementConstructor, ReactElement } from 'react';

export interface ITocItem {
  label: string;
  href: string;
  children?: ITocItem[];
}

export interface IMdxDoc {
  meta: IMdxDocMeta;
  toc?: ITocItem[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: ReactElement<any, string | JSXElementConstructor<any>>;
}

export interface IMdxDocFrontMatter {
  path?: string;
  slug: string;
  date: string;
  title: string;
  subtitle?: string;
  coverImage?: string;
  authorName?: string;
  authorAvatar?: string;
  tags?: string[];
  categories?: string[];
  keywords?: string[];
  abstract?: string[];
  testimonial?: string;
  published?: boolean;
}

export type IMdxDocMeta = IMdxDocFrontMatter;
