import { HomePage } from '@/next-pages/server';
import {
  BENEFITS,
  CLIENT_LOGOS,
  HOME_HERO_CONTENT,
  HOME_HERO_IMAGE,
  HOW_IT_WORKS,
  THE_ICP_PLAYBOOK,
} from '../config';

export default function Index() {
  return (
    <HomePage
      hero={{
        image: HOME_HERO_IMAGE,
        content: HOME_HERO_CONTENT,
      }}
      clientLogos={CLIENT_LOGOS}
      benefits={BENEFITS}
      productSummary={THE_ICP_PLAYBOOK}
      howItWorls={HOW_IT_WORKS}
    />
  );
}
