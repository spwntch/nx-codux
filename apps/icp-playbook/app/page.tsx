import { HomePage } from '@/next-pages/server';
import {
  BENEFITS,
  CLIENT_LOGOS,
  HOME_HERO_CONTENT,
  HOME_HERO_IMAGE,
  HOW_IT_WORKS,
  TELL_ME_MORE,
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
      tellMeMore={TELL_ME_MORE}
      benefits={BENEFITS}
      howItWorks={HOW_IT_WORKS}
      faqs={FAQ}
      testimonials={TESTIMONIALS}
    />
  );
}
