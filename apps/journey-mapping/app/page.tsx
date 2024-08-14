import HomePage from '../components/home-page/home-page';
import {
  BENEFITS,
  CLIENT_LOGOS,
  HOME_HERO_CONTENT,
  HOME_HERO_IMAGE
} from '../config';
import { CASE_STUDIES, CASE_STUDIES_GRID } from '../config/home/case-studies';

const title =
  'Optimize Your Customer Journey with Expert Mapping | Interact RDT';
const description =
  'Enhance customer experiences with our Journey Mapping service. Gain insights, align teams, and make data-driven decisions to improve customer satisfaction and drive growth. Discover how our comprehensive tools and strategies help you visualize and refine every step of the customer journey. Start optimizing today!';
const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/home-hero.png`;
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
    <HomePage
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
      // productSummary={THE_ICP_PLAYBOOK}
      // howItWorks={HOW_IT_WORKS}
      // diveIn={DIVE_IN}
      // faqs={FAQ}
      // pricing={PRICING}
      // value={VALUE}
      // cost={COST}
      // about={{
      //   youtubeId: ABOUT_YOUTUBE,
      //   content: ABOUT_CONTENT,
      //   stats: ABOUT_STATS,
      // }}
      // getStarted={GET_STARTED}
      // testimonials={TESTIMONIALS}
    />
  );
}
