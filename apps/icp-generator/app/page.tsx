import { DigitalProductLandingPage } from '@/next-marketing-pages';
import { BENEFITS, HERO_CONTENT, HERO_IMAGE, PAIN_POINTS } from '../config';

export default function Index() {
  return (
    <DigitalProductLandingPage
      hero={{ image: HERO_IMAGE, content: HERO_CONTENT }}
      painPoints={PAIN_POINTS}
      benefits={BENEFITS}
    />
  );
}
