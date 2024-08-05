'use client';

import {
  FullImageHero,
  IContent,
  IImage
} from '@spwntch/react-ui';

import { useRouter } from 'next/navigation';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
}

const ThankYouPage = ({ hero }: HomePageProps) => {
  const router = useRouter();
  const handleGohome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col">
      <FullImageHero
        image={hero.image}
        innerContent={hero.content}
        className="text-white"
        vAlign="middle"
        hAlign="left"
        onCtaClick={(ctaIndex: number) => {
          if (ctaIndex === 0) handleGohome();
        }}
      />
    </div>
  );
};

export default ThankYouPage;
