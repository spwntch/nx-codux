'use client';

import {
  FullImageHero,
  IContent,
  IImage,
  IMdxDoc,
  LogoCarousel
} from '@spwntch/react-ui';

import { useRouter } from 'next/navigation';
import { About, Blog, CtaForm } from '../../page-sections';

export interface MostlyHeroLandingPageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  clientLogos?: string[];
  about?: {
    youtubeId: string;
    content: IContent;
    stats: { label: string; value: string }[];
  };
  blog?: {
    content: IContent;
    articles: IMdxDoc[];
  };
  finalCta?: IContent;
}

export const MostlyHeroLandingPage = ({
  hero,
  clientLogos,
  about,
  blog,
  finalCta,
}: MostlyHeroLandingPageProps) => {
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
        onCtaClick={(ctaIndex: number) => {
          if (ctaIndex === 0) handleLinkTo('#cta-form');
        }}
      />
      {clientLogos && <LogoCarousel logos={clientLogos} className="bg-white" />}
      {about && <About id="about" {...about} className="bg-muted" />}
      {blog && (
        <Blog
          content={blog.content}
          articles={blog.articles}
          className="bg-muted"
        />
      )}
      {(finalCta?.cta || finalCta?.ctas?.length) && (
        <CtaForm id="cta-form" content={finalCta} />
      )}
    </div>
  );
};
