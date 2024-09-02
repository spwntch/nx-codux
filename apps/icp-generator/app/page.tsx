import { IcpGenerator } from '../components';
import { FreeQuoteLandingPage } from '@/next-marketing-pages';
import { HERO_CONTENT, HERO_IMAGE } from '../config';

export default function Index() {
  return (
    <FreeQuoteLandingPage hero={{ image: HERO_IMAGE, content: HERO_CONTENT }} />
  );
}
