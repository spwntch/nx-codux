'use client';

import {
  FullImageHero,
  IContent,
  IImage,
  TextWithClassName,
} from '@spwntch/react-ui';

import { useRouter, useSearchParams } from 'next/navigation';

export interface ThankYouPageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
}

const ThankYouPage = ({ hero }: ThankYouPageProps) => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const content = {
    ...hero.content,
    title: {
      content: `${(hero.content.title as TextWithClassName).content}${
        name ? ', ' + name : ''
      } 🥳`,
      className: (hero.content.title as TextWithClassName).className,
    },
  };

  const router = useRouter();
  const handleGotoPrimaryWebsite = () => {
    router.push('https://www.interactrdt.com');
  };

  return (
    <div className="flex flex-col">
      <FullImageHero
        image={hero.image}
        innerContent={content}
        className="text-white"
        vAlign="middle"
        hAlign="left"
        onCtaClick={(ctaIndex: number) => {
          if (ctaIndex === 0) handleGotoPrimaryWebsite();
        }}
      />
    </div>
  );
};

export default ThankYouPage;
