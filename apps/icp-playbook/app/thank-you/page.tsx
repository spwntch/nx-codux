import { SimpleCtaThankYouPage } from '@/next-marketing-pages';
import { Suspense } from 'react';
import { THANK_YOU_HERO_CONTENT, THANK_YOU_HERO_IMAGE } from '../../config';

const title =
  'Unlock Your Ideal Customers with the ICP Playbook | Interact RDT';
const description =
  'Transform your marketing and product strategies with the ICP Playbook. Identify, profile, and engage high-potential customers with precision. Discover how our comprehensive guide helps improve targeting, increase conversions, align teams, and drive data-driven decision making. Get started today!';
const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/increaed-conversions.png`;
const keywords: string[] = [
  'ICP Playbook',
  'customer profiling',
  'marketing strategy',
  'product strategy',
  'customer engagement',
  'team alignment',
  'data-driven marketing',
  'customer insights',
  'marketing efficiency',
  'customer segmentation',
];

export const metadata = {
  title,
  description,
  keywords,
  openGraph:
    (process.env.NEXT_PUBLIC_SITE_URL && {
      title,
      description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: 'ICP Playbook | Interact RDT',
      images: [{ url: image, width: 1200, height: 630 }],
      locale: 'en_US',
      type: 'website',
    }) ||
    null,
  twitter:
    (process.env.NEXT_PUBLIC_SITE_URL && {
      card: 'summary_large_image',
      title,
      description,
      creator: '@InteractRDT',
      images: [image],
    }) ||
    null,
};

export default function Index() {
  return (
    <Suspense>
      <SimpleCtaThankYouPage
        hero={{
          image: THANK_YOU_HERO_IMAGE,
          content: THANK_YOU_HERO_CONTENT,
        }}
      />
    </Suspense>
  );
}
