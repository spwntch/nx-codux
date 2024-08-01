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
  // clientLogos: string[];
  // productSummary: IContent;
  // benefits: IContent;
  // learnMore: IContent;
  // howItWorks: IContent;
  // diveIn: IContent;
  // faqs: IContent;
  // pricing: IContent;
  // about: {
  //   youtubeId: string;
  //   content: IContent;
  //   stats: { label: string; value: string }[];
  // };
  // getStarted: IContent;

  // testimonials: IContent;
}

const HomePage = ({
  hero,
  // clientLogos,
  // productSummary,
  // benefits,
  // learnMore,
  // howItWorks,
  // diveIn,
  // faqs,
  // pricing,
  // about,
  // getStarted,
}: HomePageProps) => {
  const router = useRouter();
  const handleLinkTo = (url: string) => {
    router.push(url);
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
          if (ctaIndex === 0) handleLinkTo('#get-started');
        }}
      />
    </div>
  );
};

export default HomePage;
