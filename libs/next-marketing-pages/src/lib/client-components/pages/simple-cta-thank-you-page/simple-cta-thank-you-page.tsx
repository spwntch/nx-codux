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

export const SimpleCtaThankYouPage = ({ hero }: ThankYouPageProps) => {
  const router = useRouter();
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

  return (
    <div className="flex flex-col">
      <FullImageHero
        image={hero.image}
        innerContent={content}
        className="text-white"
        hAlign="left"
        onCtaClick={(ctaIndex: number) => {
          if (ctaIndex === 0) router.push('https://www.interactrdt.com');
          if (ctaIndex === 1) router.push('/');
        }}
      />
    </div>
  );
};

