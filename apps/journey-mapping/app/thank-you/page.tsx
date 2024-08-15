import { Suspense } from 'react';
import ThankYouPage from '../../components/thank-you-page/thank-you-page';
import { THANK_YOU_HERO_CONTENT, THANK_YOU_HERO_IMAGE } from '../../config';

const title =
  'Elevate Your Customer Experience with Journey Mapping | Interact RDT';
const description =
  'Thank you for your interest in our Journey Mapping service. Discover how you can enhance customer satisfaction and drive growth by visualizing and optimizing every customer touchpoint. Explore our tailored solutions to create impactful customer journeys.';
const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/journey-mapping-thank-you.png`;
const keywords: string[] = [
  'Journey Mapping',
  'customer experience',
  'customer journey',
  'CX strategy',
  'customer satisfaction',
  'touchpoint optimization',
  'customer insights',
  'business growth',
  'customer journey map',
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
      siteName: 'Journey Mapping | Interact RDT',
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
      <ThankYouPage
        hero={{
          image: THANK_YOU_HERO_IMAGE,
          content: THANK_YOU_HERO_CONTENT,
        }}
      />
    </Suspense>
  );
}