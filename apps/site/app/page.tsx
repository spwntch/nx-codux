import { HomePage } from '@/next-pages/server';
import {
  BENEFITS,
  CASE_STUDIES,
  CLIENT_LOGOS,
  HOME_HERO_CONTENT,
  HOME_HERO_IMAGE,
  HOW_IT_WORKS,
  TESTIMONIALS,
  THE_ICP_PLAYBOOK,
} from '../config';
import { FAQ } from '../config/home/faqs';

export default function Index() {
  return (
    <HomePage
      hero={{
        image: HOME_HERO_IMAGE,
        content: HOME_HERO_CONTENT,
      }}
      clientLogos={CLIENT_LOGOS}
      productSummary={THE_ICP_PLAYBOOK}
      benefits={BENEFITS}
      howItWorks={HOW_IT_WORKS}
      faqs={FAQ}
      testimonials={TESTIMONIALS}
      caseStudies={CASE_STUDIES}
    />
  );
}
