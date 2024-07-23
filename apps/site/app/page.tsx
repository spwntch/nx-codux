import { HomePage } from '@/next-pages/server';
import { HOME_HERO_CONTENT, HOME_HERO_IMAGE } from '../config';

export default function Index() {
  return (
    <HomePage
      hero={{
        image: HOME_HERO_IMAGE,
        content: HOME_HERO_CONTENT,
      }}
    />
  );
}
