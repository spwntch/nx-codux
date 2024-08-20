import { FreeQuoteLandingPage } from '@/next-marketing-pages';
import { HOME_HERO_CONTENT, HOME_HERO_IMAGE } from '../config';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <FreeQuoteLandingPage hero={{ image: HOME_HERO_IMAGE, content: HOME_HERO_CONTENT }} />
  );
}
