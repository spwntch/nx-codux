import { DigitalProductLandingPage } from '@/next-marketing-pages';
import { HERO_CONTENT, HERO_IMAGE } from '../config';

export default function Index() {
  return (
    <DigitalProductLandingPage hero={{ image: HERO_IMAGE, content: HERO_CONTENT }} />
  );
}
