import { FreeQuoteLandingPage } from '@/next-marketing-pages';
import {
  ABOUT_CONTENT,
  ABOUT_STATS,
  ABOUT_YOUTUBE,
  BENEFITS,
  CLIENT_LOGOS,
  COST,
  DIVE_IN,
  GET_STARTED,
  HOME_HERO_CONTENT,
  HOME_HERO_IMAGE,
  HOW_IT_WORKS,
  PRICING,
  THE_ICP_PLAYBOOK,
  VALUE,
} from '../config';
import { FAQ } from '../config/home/faqs';

const title =
  'Unlock Your Ideal Customers with the ICP Playbook | Interact RDT';
const description =
  'Transform your marketing and product strategies with the ICP Playbook. Identify, profile, and engage high-potential customers with precision. Discover how our comprehensive guide helps improve targeting, increase conversions, align teams, and drive data-driven decision making. Get started today!';
const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/benefits/increased-sales.png`;
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
    <FreeQuoteLandingPage
      hero={{
        image: HOME_HERO_IMAGE,
        content: HOME_HERO_CONTENT,
      }}
      clientLogos={CLIENT_LOGOS}
      productFeatures={THE_ICP_PLAYBOOK}
      benefits={BENEFITS}
      howItWorks={HOW_IT_WORKS}
      ctaBanner={DIVE_IN}
      faqs={FAQ}
      pricing={PRICING}
      value={VALUE}
      cost={COST}
      about={{
        youtubeId: ABOUT_YOUTUBE,
        content: ABOUT_CONTENT,
        stats: ABOUT_STATS,
      }}
      finalCta={GET_STARTED}
      // testimonials={TESTIMONIALS}
    />
  );
}
