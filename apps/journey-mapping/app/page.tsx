import { FreeQuoteLandingPage } from '@/next-marketing-pages';
import {
  ABOUT_CONTENT,
  ABOUT_STATS,
  ABOUT_YOUTUBE,
  BENEFITS,
  BLOG,
  BLOG_POSTS,
  CASE_STUDIES,
  CASE_STUDIES_GRID,
  CLIENT_LOGOS,
  COST,
  CTA_BANNER,
  FINAL_CTA,
  HOME_HERO_CONTENT,
  HOME_HERO_IMAGE,
  PRICING,
  VALUE,
} from '../config';
import FAQS from '../config/home/faqs';
import HOW_IT_WORKS from '../config/home/process';

const title =
  'Optimize Your Customer Journey with Expert Mapping | Interact RDT';
const description =
  'Enhance customer experiences with our Journey Mapping service. Gain insights, align teams, and make data-driven decisions to improve customer satisfaction and drive growth. Discover how our comprehensive tools and strategies help you visualize and refine every step of the customer journey. Start optimizing today!';
const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/home/hero/vlad-bagacian-d1eaoAabeXs-unsplash.jpg`;
const keywords: string[] = [
  'Journey Mapping',
  'customer journey',
  'customer experience',
  'CX strategy',
  'team alignment',
  'data-driven decision making',
  'customer insights',
  'customer satisfaction',
  'customer touchpoints',
  'customer persona development',
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
    <FreeQuoteLandingPage
      hero={{
        image: HOME_HERO_IMAGE,
        content: HOME_HERO_CONTENT,
      }}
      clientLogos={CLIENT_LOGOS}
      benefits={BENEFITS}
      caseStudies={{
        content: CASE_STUDIES,
        articles: CASE_STUDIES_GRID,
      }}
      ctaBanner={CTA_BANNER}
      howItWorks={HOW_IT_WORKS}
      faqs={FAQS}
      pricing={PRICING}
      value={VALUE}
      cost={COST}
      about={{
        youtubeId: ABOUT_YOUTUBE,
        content: ABOUT_CONTENT,
        stats: ABOUT_STATS,
      }}
      // blog={{
      //   content: BLOG,
      //   articles: BLOG_POSTS,
      // }}
      finalCta={FINAL_CTA}
    />
  );
}
