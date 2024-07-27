import { HomePage } from '@/next-pages/server';
import {
  BENEFITS,
  CLIENT_LOGOS,
  DIVE_IN,
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
      benefits={BENEFITS}
      tellMeMore={TELL_ME_MORE}
      howItWorks={HOW_IT_WORKS}
      diveIn={DIVE_IN}
      faqs={FAQ}
      testimonials={TESTIMONIALS}
    />
  );
}
